'use strict';

/* globals module */
module.exports ={
	plugins: [],
	env: {
		browser: true,
		jquery: true,
		es6: true,
	},

	/**
	 * Default globals.
	 *
	 * These will get ignored automatically.
	 *
	 * @since  1.1
	 */
	globals: {
		_: false,
		Backbone: false,
		jQuery: false,
		JSON: false,
	},
};
