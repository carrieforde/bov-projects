/**
 * Color scripts.
 */
( function( window, validator ) {

	var red    = document.getElementById( 'red' ),
		green  = document.getElementById( 'green' ),
		blue   = document.getElementById( 'blue' ),
		alpha  = document.getElementById( 'alpha' );

	/**
	 * Get the input values.
	 */
	var getValue = function() {

		var redValue    = red.value,
			greenValue  = green.value,
			blueValue   = blue.value,
			alphaValue  = alpha.value,
			rgba        = '';

		// Build the RGBA string.
		rgba = 'rgba(' + redValue + ', ' + greenValue + ', ' + blueValue + ', ' + alphaValue + ')';

		checkRGBA( rgba );
	};

	/**
	 * Checks if the input string is an RGB color.
	 * 
	 * @param    {string}  input  The string to check.
	 * @returns  {bool}
	 */
	var isRGBA = function( input ) {

		// Throw an error if input is missing.
		if ( !input ) {
			throw "Missing parameter for isRGB: 'input'.";
		}

		// Throw an error if input is not a string.
		if ( typeof input !== 'string' ) {
			throw "'input' is not a string.";
		}

		// Remove any spaces and semicolons.
		input = input.replace( /\s/g, '' );
		input = input.replace( ';', '' );


		// Make sure string begins with 'rgb(' and ends with ')'.
		if ( input.substring( 0, 5 ) !== 'rgba(' && input.charAt( input.length ) !== ')' ) {
			return false;
		}

		// Use .substring to get numbers between rgba().
		input = input.substring( 5, input.length - 1 );

		// Split substring into an array.
		input = input.split( ',' );

		// If the array has more than three values, it ain't RGBA.
		if ( input.length !== 4 ) {
			return false;
		}

		// Loop over RGB values to make sure they're between 0 and 255.
		for ( var i = 0; i < input.length - 1; i++ ) {

			if ( ! validator.isNumberBetween( input[i], '0', '255' ) ) {
				return false;
			}
		}

		// Check the alpha value to make sure it's between 0 and 1.
		if ( ! validator.isNumberBetween( input[input.length - 1], '0', '1' ) ) {
			return false;
		}

		return true;
	};

	/**
	 * Check RGBA is valid.
	 * 
	 * @param  {string}  input  The RGBA string.
	 */
	var checkRGBA = function( input ) {

		// Get the form so we can add the invalid class to it.
		var form = document.getElementById( 'color-form' );

		// Check input is a valid RGBA value.
		if ( ! input || ! isRGBA( input ) ) {
			form.className += 'invalid';
		} else {
			updateSwatch( input ); // if it's valid, update the swatch.
		}
	};

	/**
	 * Updates the background color of the swatch & the span value.
	 * 
	 * @param  {string}  input  The RGBA value.
	 */
	var updateSwatch = function( input ) {

		// Get the swatch & value span.
		var swatch = document.getElementById( 'swatch' ),
			span = swatch.nextSibling.nextSibling; // spaces mean we have to nextSibling twice.

		// Update the values.
		swatch.style.backgroundColor = input;
		span.textContent = input;
	}

	// Fire our events.
	red.addEventListener( 'change', getValue );
	green.addEventListener( 'change', getValue );
	blue.addEventListener( 'change', getValue );
	alpha.addEventListener( 'change', getValue );
})( window, validator );
