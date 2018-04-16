/**
 * Utilities
 */
( function( window, validator ) {

	var utilities = {};

	/**
	 * Check an input.
	 * 
	 * @param  {string}  input  The input to be checked.
	 */
	utilities.checkInput = function( input ) {

		// Get the input value.
		var value = input.value;

		// If the input is a resubmission, existing classes need to be removed first.
		if ( input.classList.contains( 'invalid' ) || input.classList.contains( 'valid' ) ) {
			input.classList.remove( 'invalid', 'valid' );
		}

		// Check the input isn't empty and is at least 2 characters.
		if ( ! value || ( ! validator.isEmpty( value ) && ! validator.isOfLengthOrGreaterThan( value, 2 ) ) ) {
			input.classList.add( 'invalid' );
		} else {
			input.classList.add( 'valid' );
		}
	};

	/**
	 * Check the select value.
	 * 
	 * @param  {string}  select  The select to be checked.
	 */
	utilities.checkSelectValue = function( select ) {
	
		// Set up our variables.
		var max         = select.children.length,
			selectValue = '';
		
		// Loop through options to determine which is selected.
		for ( var i = 0; i < max; i++ ) {

			// If select at i is selected, set selectValue.
			if ( select.children[i].selected ) {
				selectValue = select.children[i].value;
			}
		}

		// If the select is a resubmission, existing classes need to be removed first.
		if ( select.classList.contains( 'invalid' ) || select.classList.contains( 'valid' ) ) {
			select.classList.remove( 'invalid', 'valid' );
		}
		
		// Check the select value is not empty.
		if ( ! selectValue || validator.isEmpty( selectValue ) ) {
			select.classList.add( 'invalid' );
		} else {
			select.classList.add( 'valid' );
		}
	};

	/**
	 * Check the email address isn't empty or invalid.
	 */
	utilities.checkEmail = function( input ) {

		// If the input is a resubmission, existing classes need to be removed first.
		if ( input.classList.contains( 'invalid' ) || input.classList.contains( 'valid' ) ) {
			input.classList.remove( 'invalid', 'valid' );
		}

		// Check the input isn't empty and is a valid email address.
		if ( ! input.value || ( ! validator.isEmpty( input.value ) && ! validator.isEmailAddress( input.value ) ) ) {
			input.classList.add( 'invalid' );
		} else {
			input.classList.add( 'valid' );
		}
	};
	
	// Expose the `utilities` as a global variable onto `window` object.
	window.utilities = utilities;
})( window, validator );
