(function() {

	'use strict';

	class Collection {

		constructor() {
			this.data = new Set();
			this.handlers = new Map();
		}

		add (data) {

			if (!this.data.has(data)) {
				this.data.add(data);
			}

			if (this.handlers.has('add')) {

				this.handlers.get('add').forEach(handler => {
					handler(data);
				});
			}
		}

		remove (data) {

			if (this.data.has(data)) {
				this.data.delete(data);
			}

			if (this.handlers.has('remove')) {

				this.handlers.get('remove').forEach(handler => {
					handler(data);
				});
			}
		}

		observe (eventName, handler) {

			if (!this.handlers.has(eventName)) {
				this.handlers.set(eventName, [handler]);
			} else {
				this.handlers.get(eventName).push([handler]);
			}
		}

		unobserve (eventName) {

			if (this.handlers.has(eventName)) {
				this.handlers.delete(eventName);
			}
		}
	}
})();
