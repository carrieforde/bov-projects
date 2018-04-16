/**
 * Scripts for controlling the cart modal.
 */
(function (window) {

	'use strict';

	var openedModal;

	/**
	 * Open the modal a modal.
	 * 
	 * @param {string}  instance  The modal to open.
	 */
	window.openModal = function (instance) {
		
		var modal   = document.querySelector('#' + instance),
			wrapper = modal.parentElement,
			body    = document.querySelector('body');

		openedModal = modal;

		modal.classList.remove('is-hidden');
		wrapper.classList.remove('is-hidden');
		body.classList.add('modal-open');
	};

	/**
	 * Close currently open modal.
	 * 
	 * @param {string}  instance  The modal to close.
	 */
	function closeModal (instance) {

		var body = document.querySelector('body');

		body.classList.remove('modal-open');
		instance.classList.add('is-hidden');
		instance.parentElement.classList.add('is-hidden');

		setTimeout(function() {
			openedModal = '';
		}, 200);
	}

	/**
	 * Handles click events.
	 * 
	 * @param {any} event 
	 */
	function handleClickEvents (event) {

		var target = event.target;

		if (target.classList.contains('button--close-modal') || target.parentElement.classList.contains('button--close-modal') || target.classList.contains('modal-container') || target.getAttribute('id') === 'continueShopping') {
			closeModal(openedModal);
		}
	}

	/**
	 * Closes modal when ESC is presssed.
	 * 
	 * @param {any} event 
	 */
	function handleKeyEvents (event) {

		var key = event.keyCode;

		if (key === 27 && openedModal) {
			closeModal(openedModal);
		}
	}

	// Add modal event listeners.
	document.addEventListener('click', handleClickEvents);
	document.addEventListener('keyup', handleKeyEvents);
})(window);
