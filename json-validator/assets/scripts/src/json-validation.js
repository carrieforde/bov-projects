/**
 * JSON Validator scripts.
 */
(function (window) {

	'use strict';
	
	// Get global elements.
	var fileUpload    = document.getElementById('json-file'),
		textarea      = document.getElementById('json-text'),
		submit        = document.getElementById('submit'),
		removeButton  = document.getElementById('removeButton');

	/**
	 * Give the user feedback that their file has been uploaded, and disable the textarea.
	 * 
	*/
	function handleUpload () {

		var label = fileUpload.nextElementSibling,
			file = fileUpload.files[0],
			reader = new FileReader();
		
		// Return if no file is selected.
		if (!file) {
			return;
		}

		// Read text from upload, and dump it into the text area.
		reader.onload = function(fileLoadedEvent) {
			var textFromFileLoaded = fileLoadedEvent.target.result;
			textarea.value = textFromFileLoaded;
		};

		reader.readAsText(file, "UTF-8");

		// Update the button text & classes.
		label.classList.remove('button--info');
		label.classList.add('button--success');
		label.textContent = 'Change file';

		// Since we're dumping the read data into the text area, disable it.
		textarea.setAttribute('disabled', 'true');

		// Show the remove button & update text.
		removeButton.style.display = 'inline-block';
		removeButton.textContent = 'Remove ' + file.name;
	};

	/**
	 * Removes the uploaded file & clears data from text area.
	 * 
	 */
	function removeUpload () {

		var label = fileUpload.nextElementSibling;

		label.classList.remove('button--success');
		label.classList.add('button--info');
		label.textContent = 'Upload a JSON file';
		fileUpload.value = '';
		textarea.value = '';
		textarea.removeAttribute('disabled');
		this.style.display = 'none';
	};

	/**
	 * Process the uploaded / input data to check whether it is valid JSON.
	 * 
	 * @param {any} event 
	 */
	function processData (event) {
		
		// Prevent the default submit behavior.
		event.preventDefault();

		// Set up variables.
		var data         = textarea.value,
			pattern      = /^{(?: \s*(("\w+"): \s*(("[^"][\S\s]+")|\d+|true|false|null|{.*}|\[.*])),)*(?:\s*(("\w+"):\s*(("[^"][\S\s]+")|\d+|true|false|null|{.*}|\[.*])))\s*}$/gim,
			result,
			message      = '',
			activeTab    = document.querySelector('#jsonTab'),
			activePanel  = document.querySelector('#jsonPanel'),
			resultsTab   = document.querySelector('#resultsTab'),
			resultsPanel = document.querySelector('#resultsPanel'),
			messageBox   = resultsPanel.querySelector('.message-box');

		result = pattern.test(data);

		if (result) {
			message = 'JSON is valid';

			if (messageBox.classList.contains('invalid')) {
				messageBox.classList.remove('invalid');
			}
			messageBox.classList.add('valid');
		} else {
			message = 'JSON is invalid';

			if (messageBox.classList.contains('valid')) {
				messageBox.classList.remove('valid');
			}
			messageBox.classList.add('invalid');
		}

		resultsPanel.querySelector('p').innerHTML = message;
		activeTab.parentElement.classList.remove('is-active');
		activePanel.classList.remove('is-active');
		resultsTab.parentElement.classList.add('is-active');
		resultsPanel.classList.add('is-active');
	};

	fileUpload.addEventListener('change', handleUpload);
	submit.addEventListener('click', processData);
	removeButton.addEventListener('click', removeUpload);
})(window);
