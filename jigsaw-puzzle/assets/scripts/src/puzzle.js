/**
 * Puzzle scripts.
 */
(function (window) {

	'use strict';

	var hints = 0,
		deadline,
		countdownInterval,
		pieceStatus = {};

	/**
	 * Handles the dragStart event.
	 *
	 * @param {any} event
	 */
	window.dragStartHandler = function (event) {

		var target = event.target;

		event.dataTransfer.setData('text/plain', event.target.id);
		event.dataTransfer.dropEffect = 'move';
	};

	/**
	 * Handles the drop event.
	 *
	 * @param {any} event
	 */
	function dropHandler (event) {

		event.preventDefault();

		var dropTarget    = event.target,
			draggedTarget = event.dataTransfer.getData('text');

		draggedTarget = document.getElementById(draggedTarget);
		dropTarget.appendChild(draggedTarget);

		if (dropTarget.dataset.piece) {
		draggedTarget.classList.remove('p-5');
		} else {
			draggedTarget.classList.add('p-5');
		}

		updatePieceStatus(dropTarget, draggedTarget);
		piecesRemaining();
	};

	/**
	 * Handles the dragOver event.
	 *
	 * @param {any} event
	 */
	function dragOverHandler (event) {
		event.preventDefault();
		event.dataTransfer.dropEffect = 'move';
	};

	/**
	 * Begins the game.
	 *
	 * @param {string}  target  The event target.
	 */
	function beginPuzzle (target) {

		var puzzle       = document.getElementById('puzzle'),
			solvedPuzzle = document.getElementById('solvedPuzzle'),
			main         = document.querySelector('main'),
			beginPanel   = document.getElementById('beginPanel'),
			hintButton   = document.getElementById('hintButton'),
			hintText;

		// Hide the solved puzzle and Begin button.
		solvedPuzzle.classList.add('hidden');
		beginPanel.classList.add('none');
		main.classList.add('grid');

		// Render the puzzle pieces.
		renderPieces();

		// Initiate the countdown.
		getDifficulty();
		renderCountdown();
		countdownInterval = setInterval(renderCountdown, 1000);

		hintText = hints !== 1 ? hints + ' Hints' : hints + ' Hint';
		hintButton.textContent = hintText;
	}

	/**
	 * Take the user back to the beginning screen.
	 * 
	 */
	function backToBeginning (images) {

		var solvedPuzzle = document.getElementById('solvedPuzzle'),
			main         = document.querySelector('main'),
			beginPanel   = document.getElementById('beginPanel'),
			puzzlePieces = document.getElementById('puzzlePieces')

		solvedPuzzle.classList.remove("hidden");
		beginPanel.classList.remove("none");
		main.classList.remove("grid");
		puzzlePieces.classList.remove("slide-in");

		images.forEach(image => {
			image.parentElement.removeChild(image);
		});
	}

	/**
	 * Adds a class to highlight which level is selected.
	 *
	 * @param {any} checked
	 */
	function selectLevel (checked) {

		var inputs = document.querySelectorAll('input[type="radio"]');

		for (var radio of inputs) {
			radio.parentElement.classList.remove('checked');
		}

		checked.parentElement.classList.add('checked');
	}

	/**
	 * Gets the puzzle difficulty chosen by the user.
	 *
	 * @returns  {object}  The deadline for solving the puzzle.
	 */
	function getDifficulty () {

		var radios = document.querySelectorAll('input[type="radio"]'),
			time   = Date.parse(new Date());

		for (const radio of radios) {
			if (radio.checked) {
				hints = radio.dataset.hints;
				return deadline = new Date(time + parseInt(radio.dataset.time) * 60 * 1000);
			}
		}
	}

	/**
	 * Gets time remaining to complete the puzzle.
	 *
	 * @param    {object}  deadline  The date object for the puzzle deadline.
	 * @returns  {object}            The time remaining to complete the puzzle.
	 */
	function getCountdown (deadline) {

		var t       = Date.parse(deadline) - Date.parse(new Date()),
			minutes = Math.floor((t/1000/60) % 60),
			seconds = Math.floor((t/1000) % 60);

		return {
			'total': t,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	/**
	 * Renders the amount of time left to complete the puzzle.
	 *
	 */
	function renderCountdown () {

		var timer = document.getElementById('timer'),
			t     = getCountdown(deadline);

		timer.innerHTML = t.minutes + ':' + ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(countdownInterval);
			return checkSolution();
		}
	}

	/**
	 * Creates an array of puzzle piece images.
	 *
	 * @returns  {array}  An array of images.
	 */
	function getImages () {

		var assetFolder = 'dist/images/',
			images = [];

		// Build images array.
		for (var i = 5; i <= 45; i++) {
			images.push({
				'id': i,
				'source': assetFolder + 'Group ' + i + '.png'
			});
		}

		return shuffleImages(images);
	}

	/**
	 * Shuffles an array.
	 *
	 * @param    {array}  array  The array to be shuffled.
	 * @returns  {array}         The shuffled array.
	 */
	function shuffleImages (array) {

		// Create our new array.
		var shuffled = [],
			i;

		// Loop through original array, and build shuffled array.
		while (array.length > 0) {

			i = Math.floor(Math.random() * array.length); // randomly pick item from passed array.
			shuffled.push(array[i]); // add random item to new array.
			array.splice(i, 1); // removed selected item from passed array.
		}

		return shuffled;
	}

	/**
	 * Renders the puzzle pieces.
	 *
	 */
	function renderPieces() {

		var container   = document.getElementById('puzzlePieces'),
			output      = document.createDocumentFragment(),
			images      = getImages();

		// Loop through the puzzle pieces adding them to the document fragment.
		images.forEach(image => {

			var piece = document.createElement('img');

			piece.setAttribute('src', image.source);
			piece.setAttribute('id', 'piece' + image.id);
			piece.setAttribute('draggable', 'true');
			piece.setAttribute('ondragstart', 'dragStartHandler(event)');
			piece.dataset.image = image.id;
			piece.classList.add('p-5', 'trs-o');

			output.appendChild(piece);
		});

		// Append fragment to the DOM.
		container.appendChild(output);

		setTimeout(() => {
			container.classList.add('slide-in');
		}, 500);

		getPieceStatus();
	}

	/**
	 * Calculate the number of pieces remaining.
	 *
	 */
	function piecesRemaining () {

		var pieces    = document.getElementById('puzzlePieces'),
			remaining = pieces.children.length;

		if (remaining === 0) {
			checkSolution();
		}
	}

	/**
	 * Programatically create an object to store the piece status.
	 *
	 */
	function getPieceStatus () {

		for (var i = 5; i <= 45; i++) {
			pieceStatus[i] = undefined;
		}
	}

	/**
	 * Update whether the moved piece is placed correctly.
	 *
	 * @param {string}  dropped  The drop zone target.
	 * @param {string}  dragged  The dragged item.
	 */
	function updatePieceStatus (dropped, dragged) {

		var pieceID = dragged.dataset.image;

		if (dropped.dataset.piece === pieceID) {
			pieceStatus[pieceID] = true;
		} else {
			pieceStatus[pieceID] = false;
		}
	}

	/**
	 * Check the puzzle solution.
	 *
	 */
	function checkSolution() {

		var gameOver      = document.getElementById('gameOver'),
			message       = document.getElementById('gameOverMessage'),
			messageText   = '',
			remainingTime = getCountdown(deadline).total;

		for (const p in pieceStatus) {

			if (!pieceStatus[p]) {

				if (remainingTime > 0) {
					return showSuperHint();
				}

				messageText = 'Game Over! <span class="sad">😖</span>';
			}
		}

		// If the message text is still empty, we have a winner.
		if (!messageText) {
			clearInterval(countdownInterval);
			messageText = '<span class="tada tada-1">🎉</span> Congratulations! <span class="tada tada-2">🎉</span>';
		}

		message.innerHTML = messageText;
		gameOver.classList.add('z-32');
	}

	/**
	 * Solves the puzzle.
	 *
	 * @todo  Remove updatePieceStatus() adn piecesRemaining().
	 */
	function solvePuzzle () {

		var images = document.querySelectorAll('#puzzlePieces [data-image]'),
			timeout = 300;

		clearInterval(countdownInterval);

		images.forEach(image => {
			var piece = image.dataset.image,
				target = document.querySelector('[data-piece="' + piece + '"]');

			// Remove event listener and draggable attribute.
			image.removeAttribute('ondragstart');
			image.removeAttribute('draggable');

			// Fade piece out from puzzlePieces container.
			setTimeout(() => {
				image.classList.add('o-0');
				image.classList.remove('p-5');
			}, timeout - 100);

			// Fade pices into position on board.
			setTimeout(() => {
				target.appendChild(image);
				image.classList.remove('o-0');
			}, timeout);

			timeout = timeout + 100;
		});

		return {
			'timeout': timeout,
			'images': images
		};
	}

	/**
	 * Solves the puzzle, resets, and allows the user to begin again.
	 * 
	 */
	function resetPuzzle () {
		
		var solved = solvePuzzle(); // solves puzzle & gets returned object.

		// Stops the timer.
		clearInterval(countdownInterval);

		// After puzzle has been solved, reset images & puzzle.
		setTimeout(() => {
			backToBeginning(solved.images);
		}, solved.timeout);
	}

	/**
	 * Shows the solved puzzle image while the mouse is held down.
	 *
	 * @param   {string}  target  The initial event target.
	 * @return  {null}
	 */
	function showHint (target) {

		var solvedPuzzle = document.getElementById('solvedPuzzle'),
			hintText;

		if (target.getAttribute('disabled', 'true')) {
			return;
		}

		if (hints > 0) {
			solvedPuzzle.classList.remove('hidden');
			solvedPuzzle.classList.add('z-30');
		}

		if (hints === 0) {
			target.setAttribute('disabled', 'true');
			return;
		}

		target.onmouseup = function (event) {
			solvedPuzzle.classList.add('hidden');
			solvedPuzzle.classList.remove('z-30');
		};

		hints--;
		hintText = hintText = hints !== 1 ? hints + ' Hints' : hints + ' Hint';
		target.textContent = hintText;
	}

	/**
	 * Indicate which pieces are out of place.
	 * 
	 */
	function showSuperHint () {

		for (const p in pieceStatus) {
			var dropZone = document.querySelector('[data-piece="' + p + '"]');

			if (!pieceStatus[p]) {
				dropZone.style.border = '1px solid red';
			} else {
				dropZone.style.border = 'none';
			}
		}
	}

	/**
	 * Determine which event to fire based on click.
	 *
	 * @param    {object}  event  The event object.
	 * @returns  {null}
	 */
	function handleClickEvents (event) {

		var target = event.target;

		if (!target) {
			return;
		}

		// If the Begin Puzzle button is pressed, call beginPuzzle().
		if (target.getAttribute('id') === 'beginPuzzle') {
			beginPuzzle(event.target);
		}

		if (target.getAttribute('id') === 'resetPuzzle') {
			resetPuzzle();
		}

		if (target.getAttribute('id') === 'tryAgain') {
			var images = document.querySelectorAll('[data-image]'),
				gameOver = document.getElementById('gameOver');

			backToBeginning(images);
			gameOver.classList.remove('z-32');
		}

		if (target.getAttribute('id') === 'solvePuzzle') {
			solvePuzzle();
		}
	}

	/**
	 * Determine which event to fire based on mousedown.
	 *
	 * @param    {object}  event  The event object.
	 * @returns  {null}
	 */
	function handleMouseDownEvents (event) {

		var target = event.target;

		if (!target) {
			return;
		}

		if (target.getAttribute('id') === 'hintButton') {
			showHint(target);
		}
	}

	/**
	 * Determines which event to fire based on change.
	 *
	 * @param {any} event
	 */
	function handleChangeEvents (event) {

		selectLevel(event.target);
	}

	/**
	 * Determines event to fire based on drag over target.
	 *
	 * @param {any} event
	 */
	function handleDragOverEvents (event) {

		var target = event.target;

		if (target.dataset.piece || target.getAttribute('id') === 'puzzlePieces') {
			dragOverHandler(event);
		}
	}

	/**
	 * Determine which event to fire based on drop target.
	 *
	 * @param {any} event
	 */
	function handleDropEvents (event) {

		var target = event.target;

		if (target.dataset.piece || target.getAttribute('id') === 'puzzlePieces') {
			dropHandler(event);
		}
	}

	// Add event listeners.
	document.addEventListener('click', handleClickEvents);
	document.addEventListener('mousedown', handleMouseDownEvents);
	document.addEventListener('change', handleChangeEvents);
	document.addEventListener('dragover', handleDragOverEvents);
	document.addEventListener('drop', handleDropEvents);
})(window);
