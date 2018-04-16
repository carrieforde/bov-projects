/**
 * Login scripts
 */
( function( window, validator, utilities ) {

	var submit = document.getElementById( 'submit' );

	/**
	 * Get fields.
	 * 
	 * @param  {any}  event  The default event.
	 */
	var getFields = function( event ) {
		
		// Prevent form submission.
		event.preventDefault();

		// Get the inputs.
		var userName = document.getElementById( 'username' ),
			password = document.getElementById( 'password' );

		utilities.checkInput( userName );
		checkPassword( password );
	};

	/**
	 * Checks the password isn't empty and is alphanumeric.
	 */
	var checkPassword = function( input ) {

		// Get the value of the field.
		var value = input.value;

		// If a resubmission, remove existing validation classes.
		if ( input.classList.contains( 'invalid', 'valid' ) ) {
			input.classList.remove( 'invalid', 'valid' );
		}

		// Check value exists, isn't empty, and is alphanumeric.
		if ( ! value || ( ! validator.isEmpty( value ) && ! validator.isAlphanumeric( value ) ) ) {
			input.classList.add( 'invalid' );
		} else {
			input.classList.add( 'valid' );
		}
	};

	submit.addEventListener( 'click', getFields );
})( window, validator, utilities );
