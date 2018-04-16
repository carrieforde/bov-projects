/**
 * Scheduling scripts.
 */
( function( window, validator, utilities ) {

	// Get the submit button.
	var submit = document.getElementById( 'submit' );

	/**
	 * Get the form values.
	 * 
	 * @param  {any}  event  The default event.
	 */
	var getValues = function( event ) {

		// Prevent form submission.
		event.preventDefault();

		// Get form data.
		var firstName = document.getElementById( 'first-name' ),
			lastName  = document.getElementById( 'last-name' ),
			email     = document.getElementById( 'email' ),
			phone     = document.getElementById( 'telephone' ),
			date      = document.getElementById( 'date' ),
			time      = document.getElementById( 'time' ),
			timezone  = document.querySelector( 'select' );

		// Run checks.
		utilities.checkInput( firstName );
		utilities.checkInput( lastName );
		utilities.checkEmail( email );
		checkPhone( phone );
		checkDate( date );
		checkTime( time );
		utilities.checkSelectValue( timezone );
	};

	/**
	 * Check phone number is valid.
	 * 
	 * @param  {string}  input  The phone number to check.
	 */
	var checkPhone = function( input ) {

		// Get the input value.
		var value = input.value;

		// Remove existing classes if this is a resubmission.
		if ( input.classList.contains( 'invalid', 'valid' ) ) {
			input.classList.remove( 'invalid', 'valid' );
		}

		// Check value exists and is valid.
		if ( ! value || ! validator.isPhoneNumber( value ) ) {
			input.classList.add( 'invalid' );
		} else {
			input.classList.add( 'valid' );
		}
	};

	/**
	 * Check date is valid.
	 * 
	 * @param  {string}  input  The date string to check.
	 */
	var checkDate = function( input ) {

		// Get the input value.
		var value = input.value;

		// Remove existing classes if this is a resubmission.
		if ( input.classList.contains( 'invalid', 'valid' ) ) {
			input.classList.remove( 'invalid', 'valid' );
		}

		// Check value exists, and date is after today.
		if ( ! value || ! validator.isAfterToday( value ) ) {
			input.classList.add( 'invalid' );
		} else {
			input.classList.add( 'valid' );
		}
	};

	/**
	 * Check time is valid.
	 * 
	 * @param  {string}  input  The time string to check.
	 */
	var checkTime = function( input ) {

		// Get the input value.
		var value = input.value;

		// Get the first two numbers of the string, parse to int.
		value = value.substring( 0, 2 );
		value = parseInt( value );

		// Remove existing classes if this is a resubmission.
		if ( input.classList.contains( 'invalid', 'valid' ) ) {
			input.classList.remove( 'invalid', 'valid' );
		}
		
		// Check value exists and is between 9a.m. and 5p.m.
		if ( ! value || ! ( value >= 9 && value <= 17 ) ) {
			input.classList.add( 'invalid' );
		} else {
			input.classList.add( 'valid' );
		}
	};

	// Fire event.
	submit.addEventListener( 'click', getValues );
})( window, validator, utilities );
