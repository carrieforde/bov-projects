/*! bov-json-validator JS - This file is built with Grunt. DO NOT EDIT! */

/**
 * JSON Validator scripts.
 */
(function (window) {

	'use strict';

	// Get global elements.

	var fileUpload = document.getElementById('json-file'),
	    textarea = document.getElementById('json-text'),
	    submit = document.getElementById('submit'),
	    removeButton = document.getElementById('removeButton');

	/**
  * Give the user feedback that their file has been uploaded, and disable the textarea.
  * 
 */
	function handleUpload() {

		var label = fileUpload.nextElementSibling,
		    file = fileUpload.files[0],
		    reader = new FileReader();

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
	function removeUpload() {

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
	function processData(event) {

		// Prevent the default submit behavior.
		event.preventDefault();

		// Set up variables.
		var data = textarea.value,
		    pattern = /^{(?: \s*(("\w+"): \s*(("[^"][\S\s]+")|\d+|true|false|null|{.*}|\[.*])),)*(?:\s*(("\w+"):\s*(("[^"][\S\s]+")|\d+|true|false|null|{.*}|\[.*])))\s*}$/gim,
		    result,
		    message = '',
		    activeTab = document.querySelector('#jsonTab'),
		    activePanel = document.querySelector('#jsonPanel'),
		    resultsTab = document.querySelector('#resultsTab'),
		    resultsPanel = document.querySelector('#resultsPanel'),
		    messageBox = resultsPanel.querySelector('.message-box');

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

/**
 * Tabs Scripts
 */
(function () {

	'use strict';

	// Set up global variables.

	var components = document.querySelectorAll('.tabs');

	/**
  * Magically add accessiblity attributes. 🎩
  *
  */
	function addAccessibilityAttrs() {

		// Loop through tab components.
		for (const component of components) {

			var tabs = component.querySelectorAll('.tabs__tab'),
			    tabList = component.querySelector('.tabs__nav');

			// Add tablist attribute.
			tabList.setAttribute('role', 'tablist');

			for (var j = 0; j < tabs.length; j++) {

				var panelID = tabs[j].getAttribute('href'),
				    tabID = tabs[j].getAttribute('id'),
				    controls = panelID.substring(1, panelID.length),
				    panel = component.querySelector(panelID);

				// Add tab attributes.
				tabs[j].setAttribute('role', 'tab');
				tabs[j].setAttribute('aria-controls', controls);
				tabs[j].setAttribute('aria-selected', 'false');
				tabs[j].setAttribute('tabindex', '-1');

				// Add panel attributes.
				panel.setAttribute('role', 'tabpanel');
				panel.setAttribute('aria-labelledby', tabID);
				panel.setAttribute('tabindex', '0');

				// If the tab & related panel are the first in the component, update the attributes.
				if (j === 0) {
					tabs[j].setAttribute('aria-selected', 'true');
					tabs[j].parentElement.classList.add('is-active');
					panel.classList.add('is-active');
				}
			}
		}
	}

	/**
  * Show tab content based on selected tab.
  *
  * @param  {string}  el  The target element.
  */
	function showTabContent(el) {

		// Prevent default action of following link.
		event.preventDefault();

		// Set up function variables.
		var component = el.parentElement.parentElement.parentElement,
		    tabID = el.getAttribute('href'),
		    currentTab = component.querySelector('li.is-active a'),
		    currentContent = component.querySelector('.tabs__panel.is-active'),
		    newContent;

		// Pass tabID to get new tab.
		newContent = component.querySelector(tabID);

		// Remove class from previously selected tab & tab content, update ARIA attributes.
		deactivateTab(currentTab, currentContent);

		// Add class to newly selected tab & tab content, update ARIA attributes.
		activateTab(el, newContent);
	}

	/**
  * Update classes and attributes for inactive tab & panel.
  *
  * @param {string} tab    The tab to deactivate.
  * @param {string} panel  The panel to deactivate.
  */
	function deactivateTab(tab, panel) {

		tab.setAttribute('aria-selected', 'false');
		tab.parentElement.classList.remove('is-active');
		panel.classList.remove('is-active');
	}

	/**
  * Update classes and attributes for active tab & panel.
  *
  * @param {string} tab    The tab to activate.
  * @param {string} panel  Te panel to activate.
  */
	function activateTab(tab, panel) {

		tab.setAttribute('aria-selected', 'true');
		tab.parentElement.classList.add('is-active');
		panel.classList.add('is-active');
	}

	/**
  * Fires events based on event target.
  *
  * @param {object} event The event object.
  */
	function fireEvents(event) {

		if (event.target.tagName.toLowerCase() === 'a') {
			showTabContent(event.target);
		}
	}

	/**
  * Enables keyboard navigation through tabbed interface.
  *
  * @param {object} event The event object.
  */
	function keyboardNav(event) {

		var key = event.keyCode,
		    target = event.target,
		    listItem = target.parentElement,
		    component = listItem.parentElement.parentElement,
		    newTarget;

		switch (key) {

			// If up or left key is pressed.
			case 37:
			case 38:

				// Set the new target.
				if (listItem.previousElementSibling === null) {
					newTarget = component.querySelectorAll('.tabs__nav a');
					newTarget = newTarget[newTarget.length - 1];
				} else {
					newTarget = listItem.previousElementSibling;
					newTarget = newTarget.querySelector('a');
				}

				newTarget.focus();
				showTabContent(newTarget);
				break;

			// If down or right key is pressed.
			case 39: // left
			case 40:
				// down

				// Set the new target.
				if (listItem.nextElementSibling === null) {
					newTarget = component.querySelector('.tabs__nav a');
				} else {
					newTarget = listItem.nextElementSibling;
					newTarget = newTarget.querySelector('a');
				}

				newTarget.focus();
				showTabContent(newTarget);
				break;

			default:
				break;
		}
	}

	// Add event listener to tab component(s).
	for (const component of components) {
		component.addEventListener('click', fireEvents);
		component.addEventListener('keyup', keyboardNav);
	}

	// Add event listner to window to add accessibilty attributes on load.
	window.addEventListener('load', addAccessibilityAttrs);
})();

//# sourceMappingURL=app.js.map
