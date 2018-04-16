/**
 * Search
 */
( function( window, validator, utilities ) {

	// Get the submit.
	var submit = document.getElementById( 'submit' );

	/**
	 * Get the inputs.
	 * 
	 * @param  {any}  event 
	 */
	var getFields = function( event ) {

		// Prevent submission.
		event.preventDefault();

		// Get form elements.
		var search    = document.getElementById( 'search' ),
			category  = document.querySelector( 'select' );

		utilities.checkInput( search );
		utilities.checkSelectValue( category );
	};

	// Set up event listener.
	submit.addEventListener( 'click', getFields );
})( window, validator, utilities );
