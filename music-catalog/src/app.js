'use strict';

/*! bov-music-catalog JS - This file is built with Grunt. DO NOT EDIT! */

/**
 * Albums scripts.
 */
(function () {

	'use strict'; // eslint-disable-line strict

	var db,
	    albums = [{
		artist: 'BadBadNotGood',
		album: 'IV'
	}, {
		artist: 'STS9',
		album: 'Artifact'
	}, {
		artist: 'Disclosure',
		album: 'Settle'
	}, {
		artist: 'Caribou',
		album: 'Our Love'
	}, {
		artist: 'Kellis',
		album: 'Food'
	}, {
		artist: 'Quantic',
		album: 'An Announcement to Answer'
	}, {
		artist: 'Prefuse 73',
		album: 'One Word Extinguisher'
	}, {
		artist: 'Cinematic Orchestra',
		album: 'Man with a Movie Camera'
	}, {
		artist: 'Beastie Boys',
		album: 'Check Your Head'
	}, {
		artist: 'Gramatik',
		album: 'Beatz & Pieces Vol. 1'
	}, {
		artist: 'Bonobo',
		album: 'Migration'
	}, {
		artist: 'Flying Lotus',
		album: 'Cosmogramma'
	}];

	if ('indexedDB' in window) {

		// Open DB connection.
		var openRequest = window.indexedDB.open('albumsDB', 1);

		// What to do if connection is successful.
		openRequest.onsuccess = function () {
			db = openRequest.result;

			renderAlbums();
		};

		// What to do if connection fails.
		openRequest.onerror = function (event) {
			console.log(event.target.errorCode); // eslint-disable-line no-console
		};

		// Create object store.
		openRequest.onupgradeneeded = function () {
			var db = event.target.result,
			    objectStore = db.createObjectStore('albums', { keyPath: 'name' });

			objectStore.createIndex('artist', 'artist');
		};
	}

	/**
  * Loop through album array and make API request.
  */
	function getData() {

		var artist = '',
		    albumName = '';

		albums.forEach(function (album) {

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

		var promise = new Promise(function (resolve, reject) {

			var xhr = new XMLHttpRequest();

			xhr.onload = function () {

				var album = void 0,
				    response = void 0,
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

			xhr.onerror = function () {
				reject('Sorry, we were unable to complete the reqeust.');
			};

			xhr.open('GET', 'https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=872e3d8c471503897c1a95005ef390b9&artist=' + artist + '&album=' + album + '&format=json');
			xhr.send();
		});

		promise.then(function (result) {
			addAlbum(result);
		}, function (error) {
			console.log(error); // eslint-disable-line no-console
		});
	}

	/**
  * Renders the album object on the frontend.
  * 
  * @param  {Object}  result  The album data.
  */
	function renderAlbums() {

		var el = document.getElementById('albums');

		var album = '',
		    albums = '',
		    results = void 0;

		// Opens a transaction.
		db.transaction('albums').objectStore('albums').getAll().onsuccess = function (event) {

			// Updates the results.
			results = event.target.result;

			if (results.length === 0) {
				getData();
			}

			// Builds the album markup.
			results.forEach(function (result) {

				album = '\n\t\t\t\t\t\t<article class="album" data-album="' + result.name + '">\n\t\t\t\t\t\t\t<img class="album__image" src="' + result.image + '" alt="' + result.name + '">\n\t\t\t\t\t\t\t<h2 class="album__name">' + result.name + '</h2>\n\t\t\t\t\t\t\t<p class="album__artist">' + result.artist + '</p>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t';

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

		var transaction = db.transaction('albums', 'readwrite'),
		    objectStore = transaction.objectStore('albums');

		// Renders albums on the frontend.
		transaction.oncomplete = function () {
			renderAlbums();
		};

		// Let's the user know an error has occurred.
		transaction.onerror = function () {

			var el = document.getElementById('albums');

			el.innerHTML = '<p>Whoa! We\'ve experienced a problem.</p>';
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

		var albumName = album.dataset.album,
		    modal = document.querySelector('.modal-content');

		var albumInfo = void 0,
		    tracklist = void 0,
		    tracks = '',
		    modalMarkup = void 0;

		// Open a DB transaction.
		db.transaction('albums').objectStore('albums').get(albumName).onsuccess = function (event) {

			albumInfo = event.target.result;
			tracklist = albumInfo.tracklist.track;

			// Build the tracklist.
			tracklist.forEach(function (track) {
				tracks += '<li class="tracklist__track"><a href="' + track.url + '">' + track.name + '</a></li>';
			});

			// Let the user know if the tracklist isn't available.
			if (tracks.length === 0) {
				tracks = 'Sorry, this tracklist is unavailable.';
			}

			// Build the modal markup.
			modalMarkup = '\n\t\t\t\t\t<header class="modal-content__header">\n\t\t\t\t\t\t<img src="' + albumInfo.image + '" alt="' + albumInfo.name + '">\n\t\t\t\t\t\t<h2 id="modal-label">' + albumInfo.name + '</h2>\n\t\t\t\t\t\t<p>' + albumInfo.artist + '</p>\n\t\t\t\t\t\t<div>' + albumInfo.notes + '</div>\n\t\t\t\t\t\t<button type="button" class="button button--close">\n\t\t\t\t\t\t\t<span class="screen-reader-text">Close</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</header>\n\t\t\t\t\t<div id="modal-content" class="modal-content__content">\n\t\t\t\t\t\t<h3>Tracklist</h3>\n\t\t\t\t\t\t<ul class="tracklist list-reset">' + tracks + '</ul>\n\t\t\t\t\t</div>\n\t\t\t\t';

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

/**
 * Modal Scripts
 */
(function () {

	'use strict';

	/**
  * Opens a closed modal.
  * 
  */

	function openModal() {

		var modal = document.querySelector('.modal-container'),
		    body = document.querySelector('body');

		modal.classList.remove('modal-container--hidden');
		body.classList.add('modal-open');
	}

	/**
  * Close currently open modal.
  * 
  * @param {string}  instance  The modal to close.
  */
	function closeModal() {

		var modal = document.querySelector('.modal-container'),
		    body = document.querySelector('body');

		body.classList.remove('modal-open');
		modal.classList.add('modal-container--hidden');
	}

	/**
  * Handles click events.
  * 
  * @param {any} event 
  */
	function handleClickEvents(event) {

		var target = event.target;

		// If there is an album ancestor, display the tracklist.
		if (target.closest('.album')) {
			openModal();
		}

		// If the modal is open...
		if (target.classList.contains('button--close') || target.classList.contains('modal-container')) {
			closeModal();
		}
	}

	/**
  * Closes modal when ESC is presssed.
  * 
  * @param {any} event 
  */
	function keyClose(event) {

		var key = event.keyCode,
		    modal = document.querySelector('.modal-container');

		if (key === 27 && !modal.classList.contains('modal-container--hidden')) {
			closeModal();
		}
	}

	document.addEventListener('click', handleClickEvents);
	document.addEventListener('keyup', keyClose);
})();

//# sourceMappingURL=app.js.map
