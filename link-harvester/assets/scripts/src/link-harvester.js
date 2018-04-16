/**
 * Scripts that do the harvesting. 👩‍🌾
 */
(function () {

	'use strict';

	/**
	 * Processes an uploaded file.
	 * 
	 * @param {any} el  The file input.
	 * @returns 
	 */
	function processUpload(el) {

		var label        = el.nextElementSibling,
			file         = el.files[0],
			reader       = new FileReader(),
			textarea     = document.getElementById('html-text'),
			removeButton = document.getElementById('removeButton');
		
		// Return if no file is selected.
		if (!file) {
			return;
		}

		// Read text from upload, and dump it into the text area.
		reader.onload = function (fileLoadedEvent) {
			var textFromFileLoaded = fileLoadedEvent.target.result;
			textarea.value = textFromFileLoaded;
		};

		reader.readAsText(file, "UTF-8");

		// Update the button text & classes.
		label.classList.remove('button--info');
		label.classList.add('button--success');
		label.textContent = 'Change file';

		// Since we're dumping the read data into the textarea, let's disable it.
		textarea.setAttribute('disabled', 'true');

		// Show the remove button & update text.
		removeButton.classList.remove('is-hidden');
		removeButton.textContent = 'Remove ' + file.name;
	}

	/**
	 * Clears an uploaded file.
	 * 
	 * @param {any} el  The clicked button.
	 */
	function removeUpload(el) {

		var label      = el.previousElementSibling,
			fileUpload = document.getElementById('html-file'),
			textarea   = document.getElementById('html-text');

		label.classList.remove('button--success');
		label.classList.add('button--info');
		label.innerHTML = '<i class="fa fa-upload" aria-hidden="true"></i> Upload an HTML file';
		fileUpload.value = '';
		textarea.value = '';
		textarea.removeAttribute('disabled');
		el.classList.add('is-hidden');
	}
	
	/**
	 * Determines which function to call on change event.
	 * 
	 * @param {any} event 
	 * @returns 
	 */
	function handleChangeEvents(event) {

		var upload = event.target.closest('input');

		if (!upload) {
			return;
		}

		if (upload.getAttribute('id') === 'html-file') {
			processUpload(upload);
		}
	}

	/**
	 * Harvest links from the inputted HTML.
	 * 
	 */
	function processData() {

		var data = document.getElementById('html-text').value,
			pattern = /(<a[\s\w="?:/.@-]*>)([\w\s.,;:-])+<\/a>/gi,
			links,
			harvested = {
				links: [],
				emailAddresses: []
			};
		
		// Get the matching links.
		links = data.match(pattern);

		// Bail if no links are in the file.
		if (!links) {
			return;
		}
		
		// Pull out the external links & email addresses.
		links.forEach(function (link) {
			var address = link.match(/((https*:\/\/)[\w=?:/.@-]+)|(mailto:[\w@.-]+)/gi),
				text = link.match(/(?!>)([\w\s.,;:-]+)(?=<\/a>)/gi);
			
			// If after applying our second-layer regex, if empty, bail.
			if (!address) {
				return;
			}
			
			// Push links into our harvested object's links array.
			if (address[0].match(/((https*:\/\/)[\w=?:/.@-]+)/gi)) {
				
				var obj = {
					url: address[0],
					text: text[0]
				};

				harvested.links.push(obj);
			}

			// Push email addresses into our harvested object's email array.
			if (address[0].match(/(mailto:[\w@.-]+)/gi)) {

				harvested.emailAddresses.push(address[0]);
			}
		});

		// Render the harvested links.
		renderLinks(harvested);
	}

	/**
	 * Renders the harvested links.
	 * 
	 * @param  {object}  linksObj  The links to be rendered.
	 */
	function renderLinks(linksObj) {

		var output       = '<ul class="links">',
			results      = document.getElementById('results'),
			linksMessage = results.querySelector('.module__content');
		
		// If there are no links, add a message and bail.
		if (linksObj.links.length === 0 && linksObj.emailAddresses.length === 0) {
			linksMessage.innerHTML = '<div class="error">Sorry, there are no external links or email addresses!</div>';
			results.classList.remove('is-hidden');
			return;
		}

		// Cycle through links, adding a new <li /> for each.
		linksObj.links.forEach(function (link) {
			output += '<li><strong>' + link.text + '</strong>: <a href="' + link.url + '">' + link.url + '</a>';
		});

		// Cycle through email addresses, adding a new <li /> for each.
		linksObj.emailAddresses.forEach(function (address) {
			output += '<li><a href="' + address + '">' + address + '</a>';
		});

		// Append link data, and show the results.
		linksMessage.innerHTML = output + '</ul>';
		results.classList.remove('is-hidden');
	}

	/**
	 * Determines which function to call on a click event.
	 * 
	 * @param {any} event 
	 * @returns 
	 */
	function handleClickEvents(event) {

		var clicked = event.target.closest('button') || event.target.closest('input');

		if (!clicked) {
			return;
		}

		if (clicked.getAttribute('id') === 'removeButton') {
			removeUpload(clicked);
		}

		if (clicked.getAttribute('id') === 'submit') {
			event.preventDefault();
			processData();
		}
	}

	// Add events.
	document.addEventListener('change', handleChangeEvents);
	document.addEventListener('click', handleClickEvents);
})();
