/**
 * Post scripts.
 */
(function () {

	'use strict';

	/**
	 * Opens the post module.
	 * 
	 */
	function showPost() {

		const modules = document.querySelectorAll('.module'),
			post = document.querySelector('.module--post');

		for (const module of modules) {
			module.classList.add('is-hidden');
		}

		post.classList.remove('is-hidden');
		window.scroll(0, 0); // Make sure we are at the top of the post.
	}

	/**
	 * Closes post module.
	 * 
	 */
	function closePost() {

		const modules = document.querySelectorAll('.module'),
			post = document.querySelector('.module--post');

		for (const module of modules) {
			module.classList.remove('is-hidden');
		}

		post.classList.add('is-hidden');
	}

	/**
	 * Updates the post content when a new post is clicked.
	 * 
	 * @param {string}  article  The article clicked.
	 */
	function updatePostContent(article) {

		const title       = article.dataset.title,
			content     = article.dataset.content,
			postModule  = document.querySelector('.module--post'),
			post        = document.querySelector('.post'),
			postTitle   = post.querySelector('.post__title'),
			postContent = post.querySelector('.post__content');
		
		if (!postModule.classList.contains('is-hidden')) {
			post.style.opacity = '0';
			post.style.transition = 'opacity 0.3s ease-in-out';

			setTimeout(() => {
				// Update the title and content.
				postTitle.innerHTML = title;
				postContent.innerHTML = content;

				// Perform syntax highlighting.
				Prism.highlightAll();

				post.style.opacity = '1';
			}, 250);
		} else {

			// Update the title and content.
			postTitle.innerHTML = title;
			postContent.innerHTML = content;

			// Perform syntax highlighting.
			Prism.highlightAll();
		}
	}

	/**
	 * Determine which event to fire based on event target.
	 * 
	 * @returns 
	 */
	function handleClickEvents(event) {

		const target = event.target;

		if (!target) {
			return;
		}

		// If we clicked on a post link, determine which element contains the data, update & maybe fire open the post module.
		if ((target.classList.contains('link') && target.getAttribute('id') !== 'homeButton') || target.classList.contains('read-post') || target.classList.contains('article-link')) {
			var article = event.target.closest('article') || event.target.closest('li');
			updatePostContent(article);

			// If we're clicking within the main site page, open the post module.
			if (article.tagName === 'ARTICLE') {
				showPost();
			}
		}

		// If we click the return home button, close the post module.
		if (target.getAttribute('id') === 'homeButton') {
			closePost();
		}
	}

	document.addEventListener('click', handleClickEvents);
})();
