/**
 * Albums scripts.
 */
(function () {

	'use strict'; // eslint-disable-line strict

	var db,
		albums = [
		{
			artist: 'BadBadNotGood',
			album: 'IV'
		},
		{
			artist: 'STS9',
			album: 'Artifact'
		},
		{
			artist: 'Disclosure',
			album: 'Settle'
		},
		{
			artist: 'Caribou',
			album: 'Our Love'
		},
		{
			artist: 'Kellis',
			album: 'Food'
		},
		{
			artist: 'Quantic',
			album: 'An Announcement to Answer'
		},
		{
			artist: 'Prefuse 73',
			album: 'One Word Extinguisher'
		},
		{
			artist: 'Cinematic Orchestra',
			album: 'Man with a Movie Camera'
		},
		{
			artist: 'Beastie Boys',
			album: 'Check Your Head'
		},
		{
			artist: 'Gramatik',
			album: 'Beatz & Pieces Vol. 1'
		},
		{
			artist: 'Bonobo',
			album: 'Migration'
		},
		{
			artist: 'Flying Lotus',
			album: 'Cosmogramma'
		}
	];

	if ('indexedDB' in window) {

		// Open DB connection.
		const openRequest = window.indexedDB.open('albumsDB', 1);

		// What to do if connection is successful.
		openRequest.onsuccess = () => {
			db = openRequest.result;

			renderAlbums();
		};

		// What to do if connection fails.
		openRequest.onerror = event => {
			console.log(event.target.errorCode); // eslint-disable-line no-console
		};

		// Create object store.
		openRequest.onupgradeneeded = () => {
			const db = event.target.result,
				objectStore = db.createObjectStore('albums', { keyPath: 'name' });

			objectStore.createIndex('artist', 'artist');
		};
	}

	/**
	 * Loop through album array and make API request.
	 */
	function getData() {

		let artist    = '',
			albumName = '';

		albums.forEach(album => {

			artist = album.artist;
			albumName = album.album;

			getAlbumData(artist, albumName);
		});
	}

	/**
	 * Makes a request to the audioscrobbler API for album info.
	 * 
	 * @param  {String}   artist  The name of the artist.
	 * @param  {String}   album   The name of the album to fetch.
	 * 
	 * @return {Boolean}          Whether album returned data in the API request.
	 */
	function getAlbumData(artist, album) {

		let promise = new Promise((resolve, reject) => {

			const xhr = new XMLHttpRequest();
	
			xhr.onload = () => {
	
				let album,
					response,
					notes = '';
	
				// If the response is OK, proceed.
				if (xhr.status === 200) {
	
					response = JSON.parse(xhr.response);
	
					// Return false if an error was returned by the response.
					if (response.error) {
						return false;
					}
	
					if (response.album.wiki) {
						notes = response.album.wiki.content;
					}
	
					// Set up object to pass to IndexedDB.
					album = {
						name: response.album.name,
						artist: response.album.artist,
						tracklist: response.album.tracks,
						image: response.album.image[4]['#text'],
						notes: notes
					};
	
					resolve(album);
					return true;
				}
			};

			xhr.onerror = () => {
				reject(`Sorry, we were unable to complete the reqeust.`);
			};
	
			xhr.open('GET', 'https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=872e3d8c471503897c1a95005ef390b9&artist=' + artist + '&album=' + album + '&format=json');
			xhr.send();
		});

		promise.then(
			result => {
				addAlbum(result);
			},
			error => {
				console.log(error); // eslint-disable-line no-console
			}
		);
	}

	/**
	 * Renders the album object on the frontend.
	 * 
	 * @param  {Object}  result  The album data.
	 */
	function renderAlbums() {

		const el = document.getElementById('albums');

		let album = '',
			albums = '',
			results;

		// Opens a transaction.
		db.transaction('albums').objectStore('albums').getAll().onsuccess = event => {

			// Updates the results.
			results = event.target.result;

			if (results.length === 0) {
				getData();
			}

			// Builds the album markup.
			results.forEach(result => {

				album = `
						<article class="album" data-album="${result.name}">
							<img class="album__image" src="${result.image}" alt="${result.name}">
							<h2 class="album__name">${result.name}</h2>
							<p class="album__artist">${result.artist}</p>
						</article>
					`;

				albums += album;
			});

			// Appends the markup to the DOM.
			el.innerHTML = albums;
		};
	}

	/**
	 * Adds an album to IndexedDB.
	 * 
	 * @param {Object} album The album to add.
	 */
	function addAlbum(album) {

		const transaction = db.transaction('albums', 'readwrite'),
			objectStore = transaction.objectStore('albums');

		// Renders albums on the frontend.
		transaction.oncomplete = () => {
			renderAlbums();
		};

		// Let's the user know an error has occurred.
		transaction.onerror = () => {

			const el = document.getElementById('albums');

			el.innerHTML = `<p>Whoa! We've experienced a problem.</p>`;
		};

		// Actually adds the album to the Object Store.
		objectStore.add(album);
	}

	/**
	 * Display tracklist when album is clicked.
	 * 
	 * @param  {String}  album  The clicked album.
	 */
	function displayTracklist(album) {

		const albumName = album.dataset.album,
			modal       = document.querySelector('.modal-content');

		let albumInfo,
			tracklist,
			tracks = '',
			modalMarkup;

		// Open a DB transaction.
		db.transaction('albums').objectStore('albums').get(albumName).onsuccess = event => {

			albumInfo = event.target.result;
			tracklist = albumInfo.tracklist.track;

			// Build the tracklist.
			tracklist.forEach(track => {
				tracks += `<li class="tracklist__track"><a href="${track.url}">${track.name}</a></li>`;
			});

			// Let the user know if the tracklist isn't available.
			if (tracks.length === 0) {
				tracks = 'Sorry, this tracklist is unavailable.';
			}

			// Build the modal markup.
			modalMarkup = `
					<header class="modal-content__header">
						<img src="${albumInfo.image}" alt="${albumInfo.name}">
						<h2 id="modal-label">${albumInfo.name}</h2>
						<p>${albumInfo.artist}</p>
						<div>${albumInfo.notes}</div>
						<button type="button" class="button button--close">
							<span class="screen-reader-text">Close</span>
						</button>
					</header>
					<div id="modal-content" class="modal-content__content">
						<h3>Tracklist</h3>
						<ul class="tracklist list-reset">${tracks}</ul>
					</div>
				`;

			// Insert markup into the DOM.
			modal.innerHTML = modalMarkup;
		};
	}

	/**
	 * Handle click events.
	 * 
	 * @param {Object} event The event object.
	 */
	function handleClickEvents(event) {

		var target = event.target;

		// If there is an album ancestor, display the tracklist / album info.
		if (target.closest('.album')) {
			displayTracklist(target.closest('.album'));
		}
	}

	document.addEventListener('click', handleClickEvents);
})();
