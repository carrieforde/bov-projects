/**
 * JavaScript Utility functions.
 */
( function( window ) {

	var utilities = {};

	/**
	 * Iterates and calls callback parameter for each element or property of a list at the specified interval.
	 * 
	 * @param  {array}     list      The list to iterate over.
	 * @param  {number}    n         The internval at which the function iterates.
	 * @param  {function}  callback  The callback function to run.
	 */
	utilities.by = function( list, n, callback ) {

		// Iterate over list starting at n - 1. Increment each loop by + n.
		for ( var i = n - 1; i < list.length; i += n ) {

			// Call the callback on the list item at i.
			callback( list[i] );
		}
	};


	/**
	 * Creates an array of an object's keys.
	 * 
	 * @param    {ojbect}  object  The object whose keys to grab.
	 * @returns  {array}           The array of keys.
	 */
	utilities.keys = function( object ) {

		// Create our array variable.
		var arr = [];

		// Loop over properties in object.
		for ( var p in object ) {

			if ( object.hasOwnProperty( p ) ) {

				// Push each p (key) into the new array.
				arr.push( p );
			}
		}

		return arr;
	};


	/**
	 * Create an array of all the values of an object.
	 * 
	 * @param    {object}  object  The object whose values to grab.
	 * @returns  {array}           An array of object values.
	 */
	utilities.values = function( object ) {

		// Create our array variable.
		var arr = [];

		// Loop over properties in object.
		for ( var p in object ) {

			if ( object.hasOwnProperty( p ) ) {

				// Push each object[p] (value) into the new array.
				arr.push( object[p] );
			}
		}

		return arr;
	};

	/**
	 * Create an array of all the keys and values of an object in the order of [key, value, key, value].
	 * 
	 * @param    {object}  object  The object from where key-value pairs are grabbed.
	 * @returns  {array}           An array of key-value pairs for an object.
	 */
	utilities.pairs = function( object ) {

		// Create our array variable.
		var arr = [];
	
		// Loop over properties in object.
		for ( var p in object ) {

			if ( object.hasOwnProperty( p ) ) {

				// Push each p (key) and object[p] (value) into the new array.
				arr.push( p, object[p] );
			}
		}

		return arr;
	};

	/**
	 * Rearranges the order of an array.
	 * 
	 * @param    {array}  array  The array to be shuffled.
	 * @returns  {array}         The shuffled array.
	 */
	utilities.shuffle = function( array ) {

		// Create our new array.
		var shuffled = [],
			i;

		// Loop through original array, and build shuffled array.
		while ( array.length > 0 ) {

			i = Math.floor( Math.random() * array.length ); // randomly pick item from passed array.
			shuffled.push( array[i] ); // add random item to new array.
			array.splice( i, 1 ); // removed selected item from passed array.
		}

		return shuffled;
	};

	/**
	 * Return the plural of a word depending on the number of n.
	 * 
	 * @param    {number}  n       The number of items.
	 * @param    {string}  word    The word to pluralize.
	 * @param    {string}  plural  The plural (if tacking an 's' at the end won't do).
	 * @returns  {string}          The pluralized word.
	 */
	utilities.pluralize = function( n, word, plural ) {

		// If only one of the item exists, return the non-plural word.
		if ( n === 1 ) {
			return word;
		}
		
		// If no item, or more than 1 item exists, and no plural was passed, return the word + 's'.
		if ( ( n === 0 || n > 1 ) && ! plural ) {
			return word + 's';
		}
		
		// If no item, or more than 1 item exists, and a plural was passed, return the plural.
		if ( n === 0 || n > 1 ) {
			return plural;
		}
	};

	/**
	 * Convert a camelCase string to a dashed-string.
	 * 
	 * @param    {string}  str  String to convert.
	 * @returns  {string}       Dashed string.
	 */
	utilities.toDash = function( str ) {

		// Create a var for our new string.
		var dashString = '';
	
		// Loop over chars in string.
		for ( var i = 0; i < str.length; i++ ) {

			// If char is capital letter, += '-string[i]'
			if ( str.charAt(i) === str.charAt(i).toUpperCase() ) {
				dashString += '-' + str.charAt(i).toLowerCase();
			} else {
				dashString += str.charAt(i);
			}
		}

		return dashString;
	};

	/**
	 * Convert a dashed string to a camelCase string.
	 * 
	 * @param    {string}  str  String to be converted.
	 * @returns  {string}       camelCase string.
	 */
	utilities.toCamel = function( str ) {

		// Convert string to lower case, and split by dashes.
		str = str.toLowerCase().split( '-' );

		// Create our camel string, assigning the str at 0 as our first part.
		var camelString = str[0];

		// Loop over each word...
		for ( var i = 1; i < str.length; i++ ) {

			// Add the word to our camel string, converting the first char to uppercase.
			camelString += str[i].charAt(0).toUpperCase() + str[i].substring( 1, str[i].length );
		}

		return camelString;
	};

	/**
	 * Search values of an object, and return true if search item exists.
	 * 
	 * @param    {object}  obj     The object to search.
	 * @param    {any}     search  The search term.
	 * @returns  {bool}
	 */
	utilities.has = function( obj, search ) {

		// Loop over properties in object.
		for ( var p in obj ) {

			// If the value at p matches the search, return true.
			if ( obj[p] === search ) {
				return true;
			}
		}
		
		return false;
	};

	/**
	 * Creates a new object with key-value pairs specified in keys.
	 * 
	 * @param    {object}  obj   The object to check.
	 * @param    {array}   keys  The keys to be searched.
	 * @returns  {object}        The object with the resulting key-value pairs.
	 */
	utilities.pick = function( obj, keys ) {

		// Create a new object.
		var object = {};

		// Loop over each property of the object.
		for ( var p in obj ) {
			
			// Loop over each value in the keys array.
			for ( var i = 0; i < keys.length; i++ ) {
				
				// If the property matches the key, add the key-value to our new object.
				if ( p === keys[i] ) {
					object[p] = obj[p]; 
				}
			}
		}
		
		return object;
	};

	/**
	 * Removes all non-alphanumeric or space characters from a string.
	 * 
	 * @param    {string}  input  The string to process.
	 * @returns  {string}         The processed string with symbols removed.
	 */
	utilities.withoutSymbols = function( input ) {

		// Remove all the non-alphanumeric / non-space characters.
		input = input.replace( /([^a-z\d ])/gi, '' );
		
		return input;
	};

	/**
	 * Counts the number of words in the input parameter.
	 * 
	 * @param    {string}  input  The string of words to count.
	 * @returns  {number}         The number of words.
	 */
	utilities.countWords = function( input ) {

		// If the input is an empty string, return 0.
		if ( input === '' ) {
			return 0;
		}

		// Split the string by space, underscore, and / or dash.
		input = input.split( /[ _-]/ );
		
		// Return the length, i.e. count.
		return input.length;
	};

	// Expose the `utilities` as a global variable onto `window` object.
	window.utilities = utilities;
} )( window );
