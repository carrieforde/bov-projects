/**
 * Shipping scripts.
 */
( function( window, validator, utilities ) {

	// Get the submit.
	var submit = document.getElementById( 'submit' );

	/**
	 * Get form fields.
	 * 
	 * @param {any} event 
	 */
	var getFields = function( event ) {

		// Prevent submission.
		event.preventDefault();

		// Get shipping inputs.
		var firstName    = document.getElementById( 'first-name' ),
			lastName     = document.getElementById( 'last-name' ),
			address      = document.getElementById( 'address' ),
			city         = document.getElementById( 'city' ),
			country      = document.querySelector( 'select' ),
			addressMatch = document.getElementById( 'no-match' );
		
		// Run checks on shipping inputs.
		utilities.checkInput( firstName );
		utilities.checkInput( lastName );
		utilities.checkInput( address );
		utilities.checkInput( city );
		utilities.checkSelectValue( country );

		// If billing address is different, get billing data.
		if ( addressMatch.checked ) {

			// Get billing inputs.
			var billingFirstName    = document.getElementById( 'billing-first-name' ),
				billingLastName     = document.getElementById( 'billing-last-name' ),
				billingAddress      = document.getElementById( 'billing-address' ),
				billingCity         = document.getElementById( 'billing-city' ),
				billingCountry      = document.querySelector( '.billing-address select' );

			// Run checks on billing inputs.
			utilities.checkInput( billingFirstName );
			utilities.checkInput( billingLastName );
			utilities.checkInput( billingAddress );
			utilities.checkInput( billingCity );
			utilities.checkSelectValue( billingCountry );
		}
	};

	// Fire event.
	submit.addEventListener( 'click', getFields );
})( window, validator, utilities );
