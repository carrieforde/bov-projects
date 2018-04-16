/**
 * Cookie script.
 */
(function() {

	'use strict';

	/**
	 * Gets all cookies set for a site.
	 * 
	 * @returns  {object}  All site cookies and their values.
	 */
	function getAllCookies() {

		let cookies = document.cookie,
			cookieObj = {};

		cookies = cookies.split('; ');

		cookies.forEach(cookie => {
			var val = cookie.split('=');
			cookieObj[val[0]] = val[1];
		});

		return cookieObj;
	}

	/**
	 * Determines whether cookie is set.
	 * 
	 * @returns  {boolean}  Whether cookie has been set, and message has been dismissed.
	 */
	function isCookieDismissed () {

		const cookies = getAllCookies(),
			cookieAlert = document.getElementById('cookieMessage');

		for (const p in cookies) {
			if (p === 'dismissed_cookie') {
				cookieAlert.parentElement.classList.add('cookieDismissed');
				return true;
			}
		}

		return false;
	}

	/**
	 * Sets a cookie and hides the cookie message.
	 * 
	 */
	function dismissCookieMessage () {

		let cookieAlert = document.getElementById('cookieMessage'),
			date = new Date();

		date.setDate(date.getDate() + 30); // sets 30 day cookie
		document.cookie = 'dismissed_cookie=yes;expires=' + date.toUTCString();
		cookieAlert.parentElement.classList.add('cookieDismissed');
	}

	/**
	 * Determine which function to fire based on target.
	 * 
	 * @param {object}  event  The event object.
	 */
	function handleClickEvents (event) {

		const target = event.target;

		if (target.getAttribute('id') === 'dismissCookie') {
			dismissCookieMessage();
		}
	}

	document.addEventListener('click', handleClickEvents);
	window.addEventListener('load', () => {
		setTimeout(() => {
			isCookieDismissed();
		}, 100);
	});
})();
