/**
 * Calculator Scripts
 */
( function( window ) {

	// Set our variables.
	var buttons    = document.querySelectorAll( '.button-number, .button-operator' ),
		clear      = document.querySelector( '.button-clear' ),
		del        = document.querySelector( '.button-delete' ),
		equals     = document.querySelector( '.button-equals' ),
		screen     = document.getElementById( 'result' );

	/**
	 * Gets the value associated to the clicked button, and updates our "screen".
	 */
	var getButtonValue = function() {

		screen.value += this.value;
	};

	/**
	 * Clears the screen of any characters.
	 */
	var clearScreen = function() {

		screen.value = '';
	};

	/**
	 * Removes the character from the last button press.
	 */
	var deleteChar = function() {

		var value = screen.value;
		screen.value = value.substring( 0, value.length - 1 );
	};

	
	/**
	 * Runs the calculation on our entry, and updates the "screen" with the result.
	 */
	var calculate = function() {

		var value = screen.value;

		screen.value = eval( value );
	};

	// Add event listeners.
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener( 'click', getButtonValue );
	}

	clear.addEventListener( 'click', clearScreen );
	del.addEventListener( 'click', deleteChar );
	equals.addEventListener( 'click', calculate );
})( window );

