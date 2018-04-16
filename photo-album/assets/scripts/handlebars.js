/**
 * Handlebars scripts.
 */
(function ($, Handlebars) {
	
	var $content = $('.page__content'),
		photosURL = './photos.json',
		albumsURL = './albums.json';
	
	function getData(dataURL) {
		var request = new XMLHttpRequest();

		request.open('GET', dataURL, false);
		request.send(null);
		return JSON.parse(request.responseText);
	}

	/**
	 * Generate a random number between min and max.
	 * 
	 * @param   {number} min The minimum value.
	 * @param   {number} max The maximum value.
	 * @returns {number}     The generated value.
	 */
	function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	Handlebars.registerHelper('random', function (num, context, options) {

		var output = '',
			instance;

		for (var i = 0; i < num; i++) {
			instance = randomInt(1, context.length);
			output += options.fn(context[instance]);
		}

		return output;
	});

	Handlebars.registerHelper('match', function (val1, val2, options) {

		if (val1 === val2) {
			return options.fn(this);
		}
	});

	var randStr = $('#random-image-template').html(),
		randImgTemplate = Handlebars.compile(randStr);
	
	var albumStr = $('#album-template').html(),
		albumTemplate = Handlebars.compile(albumStr);

	var modal = $('#modal-template').html();
	Handlebars.registerPartial('modal', modal);

	var data = {
		photos: getData(photosURL),
		albums: getData(albumsURL)
	};

	console.log(data);
	var html = randImgTemplate({ data });

	html += albumTemplate({ data });

	$content.append(html);
})($, Handlebars);
