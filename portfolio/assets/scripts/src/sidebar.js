/**
 * Sidebar scripts
 */
(function () {

	'use strict';

	/**
	 * Throttle specificed events.
	 * 
	 * {@link}   https://codepen.io/AmeliaBR/post/basic-javascript-event-throttling
	 * @param    {function} listener  The function to fire.
	 * @param    {number}   delay     The delay in ms.
	 * @returns  {function}           The throttled listner.
	 */
	function throttle(listener, delay) {
		let timeout,
			throttledListner = event => {
				if (timeout) {
					clearTimeout(timeout);
				}
				timeout = setTimeout(listener, delay, event);
			};
		
		return throttledListner;
	}

	/**
	 * Attaches sidebar in viewport.
	 * 
	 * @returns  null
	 */
	function fixSidebar() {

		const sidebar    = document.querySelector('.sidebar'),
			postModule = document.querySelector('.module--post'),
			article    = document.querySelector('.post');

		// Bail if viewport is narrow, or post module isn't open.
		if (window.innerWidth < 900 || postModule.classList.contains('is-hidden')) {
			return;
		}

		// Attach sidebar when article is within 155px of top of viewport.
		if (article.offsetTop - window.scrollY <= 155) {
			sidebar.classList.add('is-fixed');
		} else { // detach
			sidebar.classList.remove('is-fixed');
		}
	}
	
	window.addEventListener('scroll', throttle(fixSidebar, 250));
})();
