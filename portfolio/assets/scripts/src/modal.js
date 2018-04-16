/**
 * Modal Scripts
 */
(function () {

	'use strict';

	let openedModal;

	/**
	 * Open the modal a modal.
	 *
	 * @param {string}  instance  The modal to open.
	 */
	window.openModal = function(instance) {
		const modal    = document.querySelector('#' + instance),
			wrapper  = modal.parentElement,
			body     = document.querySelector('body');

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
	function closeModal(instance) {
		const body = document.querySelector('body');

		body.classList.remove('modal-open');
		instance.classList.add('is-hidden');
		instance.parentElement.classList.add('is-hidden');

		setTimeout(() => {
			openedModal = '';
		}, 200);
	}

	/**
	 * Handles click events.
	 *
	 * @param {any} event
	 */
	function handleClickEvents(event) {

		const el    = event.target,
			modal = el.closest('button') || el.closest('section');

		if (!modal) {
			return;
		}

		if (modal.classList.contains('button--close') || (modal.classList.contains('modal-container') && el.tagName !== 'DIV')) {
			closeModal(openedModal);
		}
	}

	/**
	 * Closes modal when ESC is presssed.
	 *
	 * @param {any} event
	 */
	function keyClose(event) {
		const key = event.keyCode;

		if (key === 27 && openedModal) {
			closeModal(openedModal);
		}
	}

	document.addEventListener('click', handleClickEvents);
	document.addEventListener('keyup', keyClose);
})();
