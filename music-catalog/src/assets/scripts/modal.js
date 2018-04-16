/**
 * Modal Scripts
 */
(function () {

	'use strict';

	/**
	 * Opens a closed modal.
	 * 
	 */
	function openModal () {

		const modal = document.querySelector('.modal-container'),
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

		const modal = document.querySelector('.modal-container'),
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

		const target = event.target;

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

		const key = event.keyCode,
			modal = document.querySelector('.modal-container');

		if (key === 27 && !modal.classList.contains('modal-container--hidden')) {
			closeModal();
		}
	}

	document.addEventListener('click', handleClickEvents);
	document.addEventListener('keyup', keyClose);
})();
