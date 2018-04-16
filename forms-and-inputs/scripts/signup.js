/**
 * Forms & Inputs
 */
( function( window, validator, utilities ) {

	// Get submit.
	var submit = document.getElementById( 'submit' );

	/**
	 * Get fields.
	 */
	var getFields = function( event ) {

		// Prevent form submission.
		event.preventDefault();

		// Get inputs.
		var firstName = document.getElementById( 'first-name' ),
			lastName  = document.getElementById( 'last-name' ),
			email     = document.getElementById( 'email' );

		// Run checks.
		utilities.checkInput( firstName );
		utilities.checkInput( lastName );
		utilities.checkEmail( email );
	};

	// Fire events.
	submit.addEventListener( 'click', getFields );
})( window, validator, utilities );
