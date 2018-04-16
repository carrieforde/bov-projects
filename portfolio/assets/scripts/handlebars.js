/**
 * Scripts for interacting with Handlebars.js
 */
(function (Handlebars) {
	
	var page    = document.querySelector('.page'),
		content = document.querySelector('.page__content');
		dataURL = 'data.json';
	
	/**
	 * Get JSON data as a JavaScript object.
	 * 
	 * @param  {string}  dataURL  The JSON file URI.
	 */
	function getData(dataURL) {

		var request = new XMLHttpRequest(),
			data,
			headerTemplate,
			contentTemplate,
			footerTemplate;

		request.onload = function() {

			if (request.status === 200) {

				data = JSON.parse(request.responseText);

				headerTemplate  = Handlebars.templates.header(data);
				contentTemplate = Handlebars.templates.about(data);
				footerTemplate  = Handlebars.templates.footer(data);
	
				contentTemplate += Handlebars.templates.projects(data);
				contentTemplate += Handlebars.templates.skills(data);
				contentTemplate += Handlebars.templates.articles(data);
				contentTemplate += Handlebars.templates.contact(data);
				contentTemplate += Handlebars.templates.modal(data);
				contentTemplate += Handlebars.templates.post(data);
	
				page.innerHTML += headerTemplate;
				page.innerHTML += '<main class="page__content">' + contentTemplate + '</main>';
				page.innerHTML += footerTemplate;
			}
		};

		request.open('GET', dataURL);
		request.send();
	}

	Handlebars.registerHelper('sentenceCase', function (string) {
		var modString;

		modString = string.substring(0, 1).toUpperCase();
		modString += string.substring(1, string.length);

		return modString;
	});

	Handlebars.registerHelper('matches', function (first, second, options) {
		
		if (!options.hash.operator) {
			if (first === second) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '==') {
			if (first == second) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '<') {
			if (first < second) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '<=') {
			if (first <= second) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '>') {
			if (first > second) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '>=') {
			if (first >= second) {
				return options.fn(this);
			}
		}

		return options.inverse(this);
	});

	Handlebars.registerHelper('position', function (num, index, options) {

		if (!options.hash.operator) {
			if (num === index + 1) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '==') {
			if (num == index + 1) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '<') {
			if (num < index + 1) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '<=') {
			if (num <= index + 1) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '>') {
			if (num > index + 1) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '>=') {
			if (num >= index + 1) {
				return options.fn(this);
			}
		}

		return options.inverse(this);
	});

	Handlebars.registerHelper('hyphenCase', function (string) {
		var modString = string.replace(/([^a-z\d])/gi, '-');

		return modString = modString.toLowerCase();
	});

	Handlebars.registerHelper('camelCase', function (string) {
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

	Handlebars.registerHelper('add', function (num1, num2) {
		return num1 + num2;
	});

	Handlebars.registerHelper('excerpt', function (context) {

		var split    = context.split(' '),
			excerpt  = '',
			i        = 0;

		while (i < 20) {
			excerpt += split[i] + ' ';
			i++;
		}

		return new Handlebars.SafeString(excerpt + '&hellip;');
	});

	// var data = getData(dataURL),
	// 	articles = getData(articlesURL);

	getData(dataURL);
})(Handlebars);
