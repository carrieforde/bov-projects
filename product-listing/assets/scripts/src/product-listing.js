/**
 * Product Listing Scripts
 */
(function () {

	'use strict';

	// Set up global variables.
	var cart    = {
			'items': [],
			'total': 0,
			'coupon': '',
			'discount': 0,
			'type': '',
			'numberItems': 0
		},
		coupons = [
			{
				'code': '10OFF',
				'discount': 0.1,
				calculateDiscount: function() {

					// Initalize our variable.
					var maxPrice = 0,
						coupon   = document.getElementById('coupon');

					// Loop over items to find the most expensive one to discount.
					for (var i = 0; i < cart.items.length; i++) {

						// Check to see if the item is more expensive than our current maxPrice.
						if (parseFloat(cart.items[i].price) > maxPrice) {
							maxPrice = parseFloat(cart.items[i].price);
						}
					}

					// Indicate coupon is valid.
					coupon.classList.add('valid');

					// Update cart discount.
					cart.discount = maxPrice * this.discount;
				}
			},
			{
				'code': 'FIVER',
				'discount': 0.05,
				calculateDiscount: function() {

					var coupon = document.getElementById('coupon');

					// Indicate coupon is valid.
					coupon.classList.add('valid');

					// Update cart discount.
					cart.discount = cart.total * this.discount;
				}
			},
			{
				'code': 'EXTRASALE',
				'discount': 0.15,
				'type': 'sale',
				calculateDiscount: function() {

					var typeTotal = 0,
						coupon    = document.getElementById('coupon');

					// Loop over items in cart.
					for (var i = 0; i < cart.items.length; i++) {

						// Tally items that are of the correct type.
						if (cart.items[i].type === this.type) {
							typeTotal += cart.items[i].price * cart.items[i].quantity;
						}
					}

					// If there aren't any items of the specified type, make the coupon input invalid.
					if (!typeTotal) {
						coupon.classList.add('invalid');
						return;
					}

					// Indicate coupon is valid.
					coupon.classList.add('valid');

					// Update cart discount.
					cart.discount = typeTotal * this.discount;
				}
			}
		];

	/**
	 * Does the item we're trying to add already exist in the cart?
	 *
	 */
	function doesItemExist(itemID) {

		for (var i = 0; i < cart.items.length; i++) {
			if (cart.items[i].id === itemID) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Add items to the shopping cart.
	 *
	 */
	function addToCart (el) {

		// Get variables.
		var product      = el.parentElement.parentElement,
			productID    = product.getAttribute('id'),
			productName  = product.querySelector('.product__heading').textContent,
			productPrice = product.querySelector('.price').textContent,
			productImg   = product.querySelector('.product__image'),
			productQty   = product.querySelector('.qty').value,
			prodType     = product.getAttribute('data-type'),
			item         = {
				'id': parseInt(productID.replace('product', '')),
				'name': productName,
				'image': productImg.getAttribute('src'),
				'price': productPrice.replace('$', ''),
				'quantity': productQty,
				'type': prodType,
			};

		if (doesItemExist(item.id)) {

			// Loop over cart and find the item to increment.
			for (var i = 0; i < cart.items.length; i++) {

				if (cart.items[i].id === item.id) {

					// Increment the quantity.
					cart.items[i].quantity = item.quantity;
				}
			}

			renderCart();
			calculateTotal();
			calculateItemNumber();
		} else {

			cart.items.push(item);

			renderCart();
			calculateTotal();
			calculateItemNumber();
		}

		// Open the cart when when the first item is added.
		if (cart.items.length === 1) {
			openModal('modal');
		}
	}

	/**
	 * Removes item from cart.
	 */
	function removeFromCart (el) {

		// Get variables.
		var itemToRemove    = el.parentElement.parentElement,
			itemToRemoveID  = itemToRemove.getAttribute('id');

		// Update itemToRemove string to get just it's ID.
		itemToRemoveID = itemToRemoveID.replace('item', '');

		// Loop over cart and find the item to remove.
		for (var i = 0; i < cart.items.length; i++) {

			if (cart.items[i].id === parseInt(itemToRemoveID)) {

				// Remove the item.
				cart.items.splice(i, 1);
			}
		}

		renderCart();
		calculateTotal();
		calculateItemNumber();
	}

	/**
	 * Decrease the item quantity.
	 *
	 */
	function decreaseQuantity (el) {

		// Get variables.
		var item   = el.parentElement.parentElement.parentElement,
			itemID = item.getAttribute('id'),
			qty    = item.querySelector('.qty');

		// Decrement item quantity.
		qty.value--;

		// If item is in cart, and quantity is 0, remove it from the cart.
		if (item.classList.contains('cart-item') && qty.value === '0') {
			removeFromCart(item.querySelector('.button--remove'));
		}

		// If the item is in the cart, update the cart quantity.
		if (item.classList.contains('cart-item')) {

			// Update itemID string to get just it's ID.
			itemID = itemID.replace('item', '');

			// Loop over cart and find the item to decrement.
			for (var i = 0; i < cart.items.length; i++) {

				if (cart.items[i].id === parseInt(itemID)) {

					// Increment the quantity.
					cart.items[i].quantity--;

					itemTotal(itemID);
				}
			}
		}

		calculateTotal();
		calculateItemNumber();
	}

	/**
	 * Adjust the quantity per user input.
	 *
	 * @param  {string}  el  The quantity input.
	 */
	function adjustQuantity (el) {

		var item    = el.parentElement.parentElement.parentElement,
			itemID  = item.getAttribute('id'),
			qty     = el;

		// We can bail if the item isn't in the cart already.
		if (!item.classList.contains('cart-item')) {
			return;
		}

		// If item is in cart, and quantity is 0, remove it from the cart.
		if (qty.value === '0') {
			removeFromCart(item.querySelector('.button-remove'));
		}

		// Update itemID string to get just it's ID.
		itemID = itemID.replace( 'item', '' );

		// Loop over cart and find the item to update.
		for (var i = 0; i < cart.items.length; i++) {

			if (cart.items[i].id === parseInt(itemID)) {

				// Update the quantity.
				cart.items[i].quantity = parseInt(qty.value);

				itemTotal(itemID);
			}
		}

		calculateTotal();
		calculateItemNumber();
	}

	/**
	 * Increase the item quantity.
	 *
	 */
	function increaseQuantity (el) {

		// Get variable.
		var item    = el.parentElement.parentElement.parentElement,
			itemID  = item.getAttribute('id'),
			qty     = item.querySelector('.qty');

		// Increment quantity.
		qty.value++;

		if (item.classList.contains('cart-item')) {

			// Update itemID string to get just it's ID.
			itemID = itemID.replace('item', '');

			// Loop over cart and find the item to increment.
			for (var i = 0; i < cart.items.length; i++) {

				if (cart.items[i].id === parseInt(itemID)) {

					// Increment the quantity.
					cart.items[i].quantity++;

					itemTotal(itemID);
				}
			}
		}

		calculateTotal();
		calculateItemNumber();
	}

	/**
	 * Calculates the subtotal for a single product.
	 *
	 * @param {any} id
	 */
	function itemTotal (id) {

		var item    = document.getElementById('item' + id),
			totalEl = item.querySelector('.cart-item__total'),
			price;

		cart.items.forEach(item => {
			if (item.id === parseInt(id)) {
				price = item.price * item.quantity;
			}
		});

		totalEl.textContent = '$' + price;
	}

	/**
	 * Calculate and update the cart total.
	 *
	 */
	function calculateTotal () {

		var subTotal = 0;

		// Loop through items in the cart, and add up the price.
		for (var i = 0; i < cart.items.length; i++) {
			subTotal += cart.items[i].price * cart.items[i].quantity;
		}

		// Update cart total.
		cart.total = subTotal;

		renderTotal();
	}

	/**
	 * Indicates the number of items in the cart.
	 *
	 */
	function calculateItemNumber() {

		var items = 0,
			cartCount = document.getElementById('cartCount');

		cart.items.forEach(item => {
			items += parseInt(item.quantity);
		});

		cartCount.textContent = items;
	}

	/**
	 * Applies coupon discounts to total.
	 *
	 */
	function checkCoupon () {

		// Bail if cart is empty.
		if (cart.items.length === 0) {
			return;
		}

		var coupon     = document.getElementById('coupon'),
			couponCode = coupon.value,
			coup       = -1;

		// If no discount, return.
		if (!couponCode) {
			return;
		}

		// Loop through available discounts.
		for (var i = 0; i < coupons.length; i++) {

			// If the discount matches one of the available discounts, save its array position.
			if (coupons[i].code === couponCode) {
				coup = i;
			}
		}

		// If we didn't find a matching discount, add invalid flag & return.
		if (coup < 0) {
			coupon.classList.add('invalid');
			return;
		}

		// Calculate discount associated to coupon.
		coupons[coup].calculateDiscount();

		// Make sure we can only apply a discount once.
		calculateTotal();

		// Update cart total.
		cart.total = cart.total - cart.discount;
		renderTotal();
	}

	/**
	 * Renders the markup for items in the cart.
	 *
	 */
	function renderCart () {

		// Get variables.
		var cartEl = document.querySelector('#cart .cart__content'),
			cartItem = '',
			items    = '';

		cart.items.forEach(function (item) {

			// Use template literal to create our cart item content.
			cartItem = `<div id="item${item.id}" class="cart__row cart-item text--black">
				<div class="cart-col--1 flex align-center">
					<img src="${item.image}" alt="${item.name}" class="cart-item__image">
					<h3 class="cart-item__heading">${item.name}</h3>
				</div>
				<div class="cart-col--2">
					<span class="cart-item__price">$${item.price}</span>
				</div>
				<div class="cart-col--3">
					<div class="increment flex justify-between">
						<button class="button button--outline text--aluminum minus" type="button">&minus;</button>
						<label for="cart-${item.id}" class="hide-text">Quantity</label>
						<input class="qty" type="number" id="cart-${item.id}" name="cart-${item.id}" value="${item.quantity}">
						<button class="button button--outline text--aluminum plus" type="button">&plus;</button>
					</div>
				</div>
				<div class="cart-col--4">
					<span class="cart-item__total">$${item.quantity * item.price}</span>
				</div>
				<div class="cart-col--5">
					<button type="button" class="button button--close button--remove">
						<span class="hide-text">Remove</span>
						<span class="close close--1"></span>
						<span class="close close--2"></span>
					</button>
				</div>
			</div>`;

			items += cartItem;
		} );

		// Add the item to the cart.
		cartEl.innerHTML = items;
	}

	/**
	 * Renders the total in the DOM.
	 *
	 */
	function renderTotal () {

		var totalEl = document.getElementById('cartTotal'),
			total   = Math.round( cart.total * 100 ) / 100;

		// Update the cart total, rounding the number to the nearest two decimals.
		totalEl.textContent = '$' + total.toFixed(2);
	}

	/**
	 * Use the event target to determine which event to fire when a change happens.
	 *
	 * @param  {any}  event  The event fired.
	 */
	function handleChangeEvents (event) {

		if (event.target.classList.contains('qty')) {
			adjustQuantity(event.target);
		}
	}

	/**
	 * Determine which function to fire based on event target.
	 *
	 * @param {any} event
	 */
	function handleClickEvents (event) {

		var target = event.target;

		if (target.classList.contains('minus')) {
			decreaseQuantity(target);
		}

		if (target.classList.contains('plus')) {
			increaseQuantity(target);
		}

		if (target.classList.contains('button--add-to-cart')) {
			addToCart(target);
		}

		if (target.classList.contains('button--remove')) {
			removeFromCart(target);
		}

		if (target.getAttribute('id') === 'applyCoupon') {
			checkCoupon();
		}
	}

	// Add event listeners.
	document.addEventListener('change', handleChangeEvents);
	document.addEventListener('click', handleClickEvents);

})();
