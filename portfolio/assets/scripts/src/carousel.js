/**
 * Carousel
 */
(function () {
	
	'use strict';

	/**
	 * Changes slides via dot navigation.
	 * 
	 * @param {any} carousel 
	 * @param {any} el 
	 */
	function changeSlides(carousel, el) {
	
		const currentDot   = carousel.querySelector('.carousel__dots .is-active'),
			currentSlide = carousel.querySelector('.carousel__slide.is-active'),
			target       = el.getAttribute('href'),
			newSlide     = carousel.querySelector(target);

		// Update classes.
		currentDot.classList.remove('is-active');
		currentSlide.classList.remove('is-active');
		el.classList.add('is-active');
		newSlide.classList.add('is-active');

		// Set height based on new slide.
		setCarouselHeight(carousel, newSlide);
	}

	/**
	 * Advances slides when next arrow is clicked.
	 * 
	 * @param {any} carousel 
	 * @param {any} el 
	 */
	function advanceSlides(carousel, el) {

		const currentDot   = carousel.querySelector('.carousel__dots .is-active'),
			currentSlide = carousel.querySelector('.carousel__slide.is-active');
		let nextDot      = currentDot.nextElementSibling,
			nextSlide    = currentSlide.nextElementSibling;

		// If we're on the last slide, let's go back to the beginning.
		if (nextDot === null) {
			nextDot   = carousel.querySelector('.carousel__dots a');
			nextSlide = carousel.querySelector('.carousel__slide');
		}

		// Update classes.
		currentDot.classList.remove('is-active');
		currentSlide.classList.remove('is-active');
		nextDot.classList.add('is-active');
		nextSlide.classList.add('is-active');

		// Set height based on new slide.
		setCarouselHeight(carousel, nextSlide);
	}

	/**
	 * Reverses slide when previous arrow is clicked.
	 * 
	 * @param {any} carousel 
	 * @param {any} el 
	 */
	function reverseSlides(carousel, el) {
		const currentDot   = carousel.querySelector('.carousel__dots .is-active'),
			currentSlide = carousel.querySelector('.carousel__slide.is-active');
		let prevDot      = currentDot.previousElementSibling,
			prevSlide    = currentSlide.previousElementSibling;

		// If we're on the first slide, let's go to the end.
		if (prevDot === null) {
			prevDot   = carousel.querySelectorAll('.carousel__dots a');
			prevDot   = prevDot[prevDot.length - 1];
			prevSlide = carousel.querySelectorAll('.carousel__slide');
			prevSlide = prevSlide[prevSlide.length - 1];
		}

		// Update classes.
		currentDot.classList.remove('is-active');
		currentSlide.classList.remove('is-active');
		prevDot.classList.add('is-active');
		prevSlide.classList.add('is-active');

		// Set height based on new slide.
		setCarouselHeight(carousel, prevSlide);
	}

	/**
	 * Updates the height of the active carousel to accommodate variying slide heights.
	 * 
	 * @param {any} carousel 
	 * @param {any} slide 
	 */
	function setCarouselHeight(carousel, slide) {
		carousel.style.height = (slide.offsetHeight + 50).toString() + 'px';
	}

	/**
	 * Manages event delegation of click events.
	 * 
	 * @param {any} event 
	 * @returns 
	 */
	function handleClickEvents(event) {
		const el       = event.target,
			carousel = el.closest('div');
		
		if (!carousel || !carousel.classList.contains('carousel')) {
			return;
		}

		if (el.closest('button')) {
			
			if (el.closest('button').classList.contains('carousel__button--next')) {
				advanceSlides(carousel, el);
			}
	
			if (el.closest('button').classList.contains('carousel__button--previous')) {
				reverseSlides(carousel, el);
			}
		}

		if (el.tagName === 'A') {
			event.preventDefault();

			changeSlides(carousel, el);
		}
	}

	document.addEventListener('click', handleClickEvents);
})();
