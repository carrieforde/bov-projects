/**
 * Questionnaire
 */
( function( window, validator, utilities ) {

	// Get our submit.
	var submit = document.getElementById( 'submit' );

	/**
	 * Gets form fields.
	 * 
	 * @param  {any}  event  The default event.
	 */
	var getFields = function( event ) {

		// Prevent form submission.
		event.preventDefault();

		// Get our radios.
		var form = document.querySelector( '.questionnaire-form' ),
			cuisines = document.querySelectorAll( 'input[type="radio"]' ),
			selected = '',
			otherCuisine = '';

		// If a resubmission, remove invalid class.
		if ( form.classList.contains( 'invalid' ) ) {
			form.classList.remove( 'invalid' );
		}

		// Loop through radio buttons.
		for ( var i = 0; i < cuisines.length; i++ ) {

			// Establish which radio is checked.
			if ( cuisines[i].checked ) {
				selected = cuisines[i];
			}
		}

		// If no option is selected, add the invalid class.
		if ( selected.value === undefined || validator.isEmpty( selected.value ) ) {
			form.classList.add( 'invalid' );
		}

		// If other is checked, get the value of the text input, and check it's valid.
		if ( selected.value === 'other' ) {
			otherCuisine = document.getElementById( 'other-type' );

			utilities.checkInput( otherCuisine );
		}
	};

	// Add our event listener.
	submit.addEventListener( 'click', getFields );
})( window, validator, utilities );
