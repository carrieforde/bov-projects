/**
 * Scripts for interacting with Handlebars.js
 */
(function (Handlebars) {

	var page           = document.getElementById('page'),
		siteDataURL    = 'site.json',
		productDataURL = 'products.json';
	
	/**
	 * Get JSON data as a JavaScript object.
	 * 
	 * @param    {string}  dataURL  The JSON file URI.
	 * @returns  {object}           The JSON data as a JSON object.
	 */
	function getData(dataURL) {
		var request = new XMLHttpRequest();

		request.open('GET', dataURL, false);
		request.send(null);
		return JSON.parse(request.responseText);
	}

	Handlebars.registerHelper('camelCase', function(string) {
		string = string.split(' ');
		string[0] = string[0].toLowerCase();

		// Outer loop breaks out strings after space.
		for (var i = 1; i < string.length; i++) {
			var subString = '';

			// Inner loop rebuilds strings with capitalized letter at beginning of each word.
			for (var j = 0; j < string[i].length; j++) {
				if (0 === j) {
					subString += string[i][j].toUpperCase();
				} else {
					subString += string[i][j];
				}
			}

			string[i] = subString;
		}

		string = string.join('');
		return string.replace(/([^a-z\d])/gi, '');
	});

	Handlebars.registerHelper('productBadge', function () {

		if (this.sale) {
			return new Handlebars.SafeString('<span class="product__badge poppins text--white bg--danger">Sale</span>');
		}
		
		if (this.new) {
			return new Handlebars.SafeString('<span class="product__badge poppins text--white bg--success">New</span>');
		}
	});

	var siteData = getData(siteDataURL),
		productData = getData(productDataURL);

	var headerTemplate = Handlebars.templates.header(siteData),
		contentTemplate = Handlebars.templates.product(productData),
		footerTemplate = Handlebars.templates.footer(siteData);
	
	contentTemplate += Handlebars.templates.cart(productData);

	page.innerHTML += headerTemplate;
	page.innerHTML += '<main class="page__content grid">' + contentTemplate + '</main>';
	page.innerHTML += footerTemplate;
})(Handlebars);
