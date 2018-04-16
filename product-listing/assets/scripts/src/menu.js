/**
 * Menu scripts.
 */
(function () {

	'use strict';

	function showMobileMenu () {
		
		var body = document.querySelector('body'),
			screen = document.querySelector('.menu-screen');

		body.classList.toggle('menu-open');
	}

	function hideMobileMenu() {
		
		var body = document.querySelector('body'),
			screen = document.querySelector('.menu-screen');

		body.classList.remove('menu-open');
	}

	/**
	 * Determine which click event to fire.
	 * 
	 * @param    {object}  event  The event object.
	 * @returns  {null}
	 */
	function handleClickEvents(event) {
		
		var target = event.target;

		if (!target) {
			return;
		}

		if (target.getAttribute('id') === 'mobileMenu' || target.classList.contains('burger')) {
			showMobileMenu();
		}

		if (target.classList.contains('menu-screen')) {
			hideMobileMenu();
		}
	}

	document.addEventListener('click', handleClickEvents);
})();
