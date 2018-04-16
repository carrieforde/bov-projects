/**
 * Smooth scroll scripts
 */
(function () {

	'use strict';

	/**
	 * Checks whether modules need to be made visible before scrolling.
	 * 
	 * @param  {string}  el  The hash to be passed to the smooth scroll function.
	 */
	function checkVisibility(el) {

		const modules    = document.querySelectorAll('.module'),
			postModule = document.querySelector('.module--post');
		
		if (!postModule.classList.contains('is-hidden')) {

			for (const module of modules) {
				module.classList.remove('is-hidden');
			}

			setTimeout(() => {
				postModule.classList.add('is-hidden');
				smoothScroll(el);
			}, 500);
		} else {
			smoothScroll(el);
		}
	}

	/**
	 * Adds smooth scrolling to portfolio sections.
	 *
	 * @param  {any}  event
	 */
	var smoothScroll = function(el) {

		const hash       = el.getAttribute('href'),
			target     = document.querySelector(hash),
			modules    = document.querySelectorAll('.module'),
			siteHeader = document.querySelector('.site-header'),
			offset     = window.innerWidth > 899 ? target.offsetTop - siteHeader.clientHeight : target.offsetTop;

		// Remove tab index from previously scrolled modules.
		for (const module of modules) {
			module.removeAttribute('tabindex');
		}

		// Scroll the the desired element.
		window.scrollTo({left: 0, top: offset, behavior: 'smooth'});

		// Update focus after scolling is complete.
		setTimeout(function () {

			// Because we prevented the default action, we have to update the URL manually.
			window.location.hash = hash;

			// Updates focus to our target element.
			target.setAttribute('tabindex', '-1');
			target.focus();
			window.scrollTo(0, offset); // prevents iumpbacks from applying focus.
		}, 500);
	};

	/**
	 * Scrolls window to top of page.
	 *
	 */
	function scrollToBeginning() {

		const scrollTopButton = document.querySelector('.button--scroll-top');

		if (window.scrollY >= 500) {
			scrollTopButton.style.visibility = 'visible';
		}

		if (window.scrollY < 500) {
			scrollTopButton.style.visibility = 'hidden';
		}

		// Adds event listener on new button.
		scrollTopButton.onclick = event => {

			// Scroll the top of the page.
			window.scroll({left: 0, top: 0, behavior: 'smooth'});

			// Update the hash for accessibility.
			setTimeout(() => {
				window.location.hash = '';
			}, 500);
		}
	}

	/**
	 * Handles smooth scroll click events.
	 * 
	 * @param    {obiect}   event  The event.
	 * @returns                    null
	 */
	function handleClickEvents(event) {

		const target = event.target.closest('.site-navigation');

		if (target && event.target.tagName === 'A') {
			event.preventDefault();
			checkVisibility(event.target);
		}
	}

	document.addEventListener('click', handleClickEvents);
	window.addEventListener('scroll', scrollToBeginning);
})();
