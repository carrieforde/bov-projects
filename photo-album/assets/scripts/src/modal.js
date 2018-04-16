/**
 * Modal Scripts
 */
(function() {
	var openedModal;

	/**
	 * Open the modal a modal.
	 *
	 * @param {string}  instance  The modal to open.
	 */
	function openModal (instance, img, title) {
		var modal = document.querySelector('#' + instance),
			wrapper = modal.parentElement,
			body = document.querySelector('body'),
			modalImage = modal.querySelector('img'),
			modalText = modal.querySelector('p');

		modalImage.setAttribute('src', img);
		modalText.textContent = title;
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
	function handleClickEvents(event) {
		var target = event.target.closest('figure') || event.target.closest('button') || event.target.closest('section');

		if (!target) {
			return;
		}

		if (target.classList.contains('album-photo')) {
			openModal('modal-1', target.dataset.imageurl, target.dataset.imagetitle);
		}

		if (target.classList.contains('button--close') || (target.classList.contains('modal-container') && target.tagName !== 'DIV')) {
			closeModal(openedModal);
		}
	}

	/**
	 * Closes modal when ESC is presssed.
	 *
	 * @param {any} event
	 */
	function keyClose(event) {
		var key = event.keyCode;

		if (key === 27 && openedModal) {
			closeModal(openedModal);
		}
	}

	document.addEventListener('click', handleClickEvents);
	document.addEventListener('keyup', keyClose);
})();
