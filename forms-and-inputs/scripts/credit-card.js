/**
 * Credit cards scripts.
 */
( function( window, validator, utilities ) {

	// Get the form submit.
	var submit = document.getElementById( 'submit' );

	/**
	 * Get our form inputs.
	 * 
	 * @param {any} event  The default event.
	 */
	var getFields = function( event ) {

		// Prevent form submission.
		event.preventDefault();

		// Get the inputs.
		var firstName  = document.getElementById( 'first-name' ),
			lastName   = document.getElementById( 'last-name' ),
			cardNumber = document.getElementById( 'credit-card' ),
			csv        = document.getElementById( 'csv' ),
			month      = document.querySelector( '.month select' ),
			year       = document.querySelector( '.year select' );

		// Check the inputs.
		utilities.checkInput( firstName );
		utilities.checkInput( lastName );
		checkCardNumber( cardNumber );
		checkCSV( csv );
		checkExpiration( month, year );
	};

	/**
	 * Checks for a valid credit card number.
	 * 
	 * @param  {string}  input  The credit card number to check.
	 */
	var checkCardNumber = function( input ) {

		// Get the value of the input.
		var value = input.value;

		// Remove existing classes if this is a resubmission.
		if ( input.classList.contains( 'invalid', 'valid' ) ) {
			input.classList.remove( 'invalid', 'valid' );
		}

		// Check a value exists, and that it's a valid credit card number.
		if ( ! value || ! validator.isCreditCard( value ) ) {
			input.classList.add( 'invalid' );
		} else {
			input.classList.add( 'valid' );
		}
	};

	/**
	 * Checks the CSV is valid.
	 * 
	 * @param  {string}  input  The CSV to check.
	 */
	var checkCSV = function( input ) {

		// Get the value of the input.
		var value = input.value;

		// Remove existing classes if this is a resubmission.
		if ( input.classList.contains( 'invalid', 'valid' ) ) {
			input.classList.remove( 'invalid', 'valid' );
		}

		// Check a value exists, it's 3 characters long, and is only numbers.
		if ( ! value || value.length !== 3 || value.match( /([^\d])/gi ) ) {
			input.classList.add( 'invalid' );
		} else {
			input.classList.add( 'valid' );
		}
	};

	/**
	 * Checks the expiry date of the card is after today.
	 * 
	 * @param  {string}  month  The month of expiry.
	 * @param  {string}  year   The year of expiry.
	 */
	var checkExpiration = function( month, year ) {

		// Get the input values.
		var m = month.value,
			y = year.value,
			expiry = m + ' ' + y, // build the date string.
			expDate = new Date( expiry ), // create a new date.
			expMonth = expDate.getMonth();

		// Set the month to the next month because a card that expires this month is still technically valid.
		expDate.setMonth( expMonth + 1 );

		// Remove existing classes if this is a resubmission.
		if ( month.classList.contains( 'invalid', 'valid' ) ) {
			month.classList.remove( 'invalid', 'valid' );
			year.classList.remove( 'invalid', 'valid' );
		}

		// Check expDate exists, and date is after today.
		if ( ! expDate || ! validator.isAfterToday( expDate ) ) {
			month.classList.add( 'invalid' );
			year.classList.add( 'invalid' );
		} else {
			month.classList.add( 'valid' );
			year.classList.add( 'valid' );
		}
	};

	// Fire events.
	submit.addEventListener( 'click', getFields );
})( window, validator, utilities );
