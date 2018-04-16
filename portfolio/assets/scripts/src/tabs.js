/**
 * Tabs Scripts
 */
(function () {

	'use strict';

	/**
	 * Show tab content based on selected tab.
	 *
	 * @param  {any}  event
	 */
	function showTabContent(tabs, target) {

		// Set up function variables.
		const component      = tabs,
			tabID          = target.getAttribute('href'),
			currentTab     = component.querySelector('li.is-active a'),
			currentContent = component.querySelector('.tabs__content.is-active');
			
		let newContent;

		// Pass tabID to get new tab.
		newContent = component.querySelector(tabID);

		// Remove class from previously selected tab & tab content, update ARIA attributes.
		deactivateTab(currentTab, currentContent);

		// Add class to newly selected tab & tab content, update ARIA attributes.
		activateTab(target, newContent);
	}

	/**
	 * Update classes and attributes for inactive tab & panel.
	 *
	 * @param {any} tab
	 * @param {any} panel
	 */
	function deactivateTab(tab, panel) {
		tab.setAttribute('aria-selected', 'false');
		tab.parentElement.classList.remove('is-active');
		panel.classList.remove('is-active');
	}

	/**
	 * Update classes and attributes for active tab & panel.
	 *
	 * @param {any} tab
	 * @param {any} panel
	 */
	function activateTab(tab, panel) {
		tab.setAttribute('aria-selected', 'true');
		tab.parentElement.classList.add('is-active');
		panel.classList.add('is-active');
	}

	/**
	 * Enables keyboard navigation through tabbed interface.
	 *
	 * @param {any} event
	 */
	function keyboardNav(tabs, event) {
		const key       = event.keyCode,
			target    = event.target,
			listItem  = target.parentElement,
			component = tabs;
		
		let	newTarget;

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
				showTabContent(component, newTarget);
				break;

			// If down or right key is pressed.
			case 39: // left
			case 40: // down
				// Set the new target.
				if (listItem.nextElementSibling === null) {
					newTarget = component.querySelector('.tabs__nav a');
				} else {
					newTarget = listItem.nextElementSibling;
					newTarget = newTarget.querySelector('a');
				}

				newTarget.focus();
				showTabContent(component, newTarget);
				break;

			default:
				break;
		}
	}

	/**
	 * Handles event delegation for click events.
	 * 
	 * @param {any} event 
	 * @returns 
	 */
	function handleClickEvents(event) {

		// Prevent default action of following link.
		event.preventDefault();

		const tab = event.target.closest('div');

		if (!tab) {
			return;
		}

		if (tab.classList.contains('tabs') && event.target.tagName === 'A') {
			showTabContent(tab, event.target);
		}
	}

	/**
	 * Handles event delegation for key events.
	 * 
	 * @param {any} event 
	 * @returns 
	 */
	function handleKeyEvents(event) {

		const tab = event.target.closest('div');

		if (!tab) {
			return;
		}

		if (tab.classList.contains('tabs')) {
			keyboardNav(tab, event);
		}
	}

	document.addEventListener('click', handleClickEvents);
	document.addEventListener('keyup', handleKeyEvents);
})();
