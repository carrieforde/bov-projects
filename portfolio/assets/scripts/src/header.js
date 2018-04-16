/**
 * Header scripts.
 */
(function () {
	
	'use strict';

	/**
	 * Opens mobile menu.
	 *
	 */
	var openMobileMenu = function() {

		// Get local variables.
		const body    = document.querySelector( 'body' ),
			screen  = document.querySelector('.menu-screen'),
			menu    = document.querySelector('.site-navigation ul'),
			links   = menu.querySelectorAll( 'a' );

		// Add body class.
		body.classList.toggle( 'menu-open' );

		// Listen for clicks on menu screen, remove body class if clicked.
		screen.addEventListener( 'click', function() {
			body.classList.remove( 'menu-open' );
		});

		// Listen for ESC key press, remove body class when pressed.
		window.onkeyup = () => {
			if (event.keyCode === 27) {
				body.classList.remove('menu-open');
			}
		};

		// Listen for clicks on links, remove body class when a link is clicked.
		for (const link of links) {
			link.onclick = () => {
				body.classList.remove('menu-open');
			};
		}
	};

	/**
	 * Adds class to assist with styling.
	 *
	 */
	var focusSearch = function (el) {

		const search = document.getElementById('search');

		el.classList.add('is-focused');

		search.onblur = function() {
			el.classList.remove('is-focused');
		};
	};

	/**
	 * Handles event delegation for click events.
	 *
	 * @param {any} event
	 * @returns
	 */
	function handleClickEvents(event) {

		const menuToggle = event.target.closest('button');

		if (!menuToggle) {
			return;
		}

		if (menuToggle.classList.contains('menu-toggle')) {
			event.preventDefault();
			openMobileMenu();
		}
	}

	/**
	 * Handles event delegation for focus events.
	 *
	 * @param {any} event
	 * @returns
	 */
	function handleFocusEvents(event) {

		const form = event.target.closest('form');

		if (!form) {
			return;
		}

		if (form.classList.contains('search-form')) {
			focusSearch(form);
		}
	}

	document.addEventListener('click', handleClickEvents);
	document.addEventListener('focus', handleFocusEvents, true);
})();
