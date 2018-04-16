(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"module module--"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"row\">\n        <header class=\"module__header\">\n            <h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n        </header>\n\n        <div class=\"module__content\">\n            <img class=\"alignright\" src=\""
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.imgAlt || (depth0 != null ? depth0.imgAlt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgAlt","hash":{},"data":data}) : helper)))
    + "\">\n            <p class=\"intro text-left\">"
    + alias4(((helper = (helper = helpers.contentIntro || (depth0 != null ? depth0.contentIntro : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentIntro","hash":{},"data":data}) : helper)))
    + "</p>\n            "
    + ((stack1 = ((helper = (helper = helpers.contentMain || (depth0 != null ? depth0.contentMain : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentMain","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n</section>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0["0"] : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['articles'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"module module--"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + " background--white-smoke\">\n	<header class=\"module__header\">\n		<h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n	</header>\n	<div class=\"module__content\">\n		<p class=\"intro text-center\">"
    + alias4(((helper = (helper = helpers.contentIntro || (depth0 != null ? depth0.contentIntro : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentIntro","hash":{},"data":data}) : helper)))
    + "</p>\n\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.articles : depth0),{"name":"with","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</section>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<article class=\"card card--post background--white\" data-title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" data-content=\""
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper)))
    + "\">\n				<div class=\"card__inner-wrap\">\n					<div class=\"card__image\">\n						<a href=\"#post-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"article-link\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "						</a>\n						<span class=\"category-badge background--razzmatazz color--white\">\n							"
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + "\n						</span>\n					</div>\n			\n					<header class=\"card__header\">\n						<h2 class=\"card__title\">\n							<a href=\"#post-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"article-link\">\n								"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n							</a>\n						</h2>\n					</header>\n			\n					<div class=\"entry-content card__content\">\n						"
    + alias4((helpers.excerpt || (depth0 && depth0.excerpt) || alias2).call(alias1,(depth0 != null ? depth0.content : depth0),{"name":"excerpt","hash":{},"data":data}))
    + "\n					</div>\n			\n					<footer class=\"entry-footer card__footer\">\n						<a href=\"#post-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"link\">\n							Read More\n						</a>\n					</footer>\n				</div>\n			</article>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "							<img src=\""
    + container.escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\"\">\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "							<img src=\"https://picsum.photos/500/300?image=668\" alt=\"\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0["3"] : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['contact'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"module module--"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + " background--razzmatazz color--white\">\n	<div class=\"row\">\n		<header class=\"module__header\">\n			<h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n		</header>\n\n		<div class=\"module__content\">\n			<p class=\"intro text-center\">"
    + alias4(((helper = (helper = helpers.contentIntro || (depth0 != null ? depth0.contentIntro : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentIntro","hash":{},"data":data}) : helper)))
    + "</p>\n\n			<div class=\"contact-form-wrapper\">\n				<form method=\"GET\" action=\"\" name=\"contact\" id=\"contact-form\" class=\"contact-form\">\n					<h3 class=\"color--white\">Send a message!</h3>\n					<ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.formFields : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						<li>\n							<label>Message</label>\n							<textarea></textarea>\n						</li>\n						<li>\n							<input type=\"submit\" id=\"submit\" name=\"submit\" class=\"button button--outline\" value=\"Submit\">\n						</li>\n					</ul>\n				</form>\n			</div>\n\n			<div class=\"social-menu-wrapper\">\n				<h3 class=\"color--white\">Connect on social media</h3>\n				<ul class=\"social-menu\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.socialNetworks : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\n			</div>\n		</div>\n	</div>\n</section>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "						<li>\n							<label for=\""
    + alias3((helpers.camelCase || (depth0 && depth0.camelCase) || alias2).call(alias1,(depth0 != null ? depth0.label : depth0),{"name":"camelCase","hash":{},"data":data}))
    + "\">"
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "</label>\n							<input type=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3((helpers.camelCase || (depth0 && depth0.camelCase) || alias2).call(alias1,(depth0 != null ? depth0.label : depth0),{"name":"camelCase","hash":{},"data":data}))
    + "\" name=\""
    + alias3((helpers.camelCase || (depth0 && depth0.camelCase) || alias2).call(alias1,(depth0 != null ? depth0.label : depth0),{"name":"camelCase","hash":{},"data":data}))
    + "\">\n						</li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<li>\n						<a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n					</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0["4"] : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['footer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer class=\"site-footer text-center background--mine-shaft color--white\">\n	<p>\n		<small>Copyright &copy; 2017 Carrie Forde</small>\n	</p>\n</footer>\n";
},"useData":true});
templates['header'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "			<li>\n				<a href=\"#"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3((helpers.sentenceCase || (depth0 && depth0.sentenceCase) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"sentenceCase","hash":{},"data":data}))
    + "</a>\n			</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section id=\"cookieMessage\" class=\"cookieMessage background--dark-pastel-green color--white\">\n	<p class=\"intro\">Cookies are both delicious, and useful in JavaScript. My favorites are snickerdoodle cookies. What's your favorite? 🍪</p>\n	<button class=\"button button--outline\" id=\"dismissCookie\" type=\"button\">Hide Message</button>\n</section>\n<header class=\"site-header\">\n	<h1 class=\"site-title\">\n		<svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"584.92\" height=\"156.8\"\n			viewBox=\"0 0 584.92 156.8\">\n			<defs>\n				<clipPath id=\"a\" transform=\"translate(-0.49 -1.38)\">\n					<polygon points=\"54.36 39.08 38.2 39.08 38.2 55.25 38.2 71.69 38.2 87.85 38.2 120.46 54.36 120.46 54.36 87.85 157.28 87.85 157.28 71.69 54.36 71.69 54.36 55.25 157.28 55.25 157.28 39.08 54.36 39.08\"\n						fill=\"none\" />\n				</clipPath>\n				<linearGradient id=\"b\" x1=\"38.85\" y1=\"471.11\" x2=\"40.94\" y2=\"471.11\" gradientTransform=\"matrix(56.96, 0, 0, -56.96, -2175.2, 26914.09)\"\n					gradientUnits=\"userSpaceOnUse\">\n					<stop offset=\"0\" stop-color=\"#ec1b72\" />\n					<stop offset=\"0.02\" stop-color=\"#ec1b72\" />\n					<stop offset=\"1\" stop-color=\"#eac4dc\" />\n					<stop offset=\"1\" stop-color=\"#eac4dc\" />\n				</linearGradient>\n			</defs>\n			<title>carrie-forde-logo</title>\n			<polygon points=\"156.8 21.55 156.8 0 21.55 0 0 0 0 21.55 0 135.25 0 156.8 21.55 156.8 156.8 156.8 156.8 135.25 21.55 135.25 21.55 21.55 156.8 21.55\"\n				fill=\"#424143\" />\n			<g clip-path=\"url(#a)\">\n				<rect x=\"37.71\" y=\"37.71\" width=\"119.09\" height=\"81.38\" fill=\"url(#b)\" />\n			</g>\n			<rect x=\"70.4\" y=\"102.13\" width=\"86.4\" height=\"16.16\" fill=\"#bcbec0\" />\n			<path d=\"M193.76,105.8H205.2l0,2.18h-9v5.77h8.11v2.19h-8.11v7.42h-2.4Z\" transform=\"translate(-0.49 -1.38)\" fill=\"#424143\"\n			/>\n			<path d=\"M219.35,123.36l-3.49-5.52a9.81,9.81,0,0,1-1,0h-4.47v5.47H208V105.8h6.87a7.83,7.83,0,0,1,5.16,1.54,5.43,5.43,0,0,1,1.81,4.38,6.24,6.24,0,0,1-1,3.59,5.59,5.59,0,0,1-2.84,2.11l4.08,5.94Zm-4.47-7.65a5.3,5.3,0,0,0,3.46-1,3.57,3.57,0,0,0,1.21-2.92,3.44,3.44,0,0,0-1.21-2.85,5.42,5.42,0,0,0-3.46-1h-4.47v7.73Z\"\n				transform=\"translate(-0.49 -1.38)\" fill=\"#424143\" />\n			<path d=\"M238.47,106.83a8.86,8.86,0,0,1,3.35,3.22,8.61,8.61,0,0,1,1.23,4.51,8.71,8.71,0,0,1-1.23,4.53,9,9,0,0,1-3.35,3.26,9.68,9.68,0,0,1-9.3,0,9,9,0,0,1-3.35-3.26,8.71,8.71,0,0,1-1.23-4.53,8.61,8.61,0,0,1,1.23-4.51,9,9,0,0,1,3.33-3.22,9.79,9.79,0,0,1,9.32,0Zm-8,1.88a6.83,6.83,0,0,0-2.5,2.45,6.46,6.46,0,0,0-.93,3.4A6.55,6.55,0,0,0,228,118a6.88,6.88,0,0,0,2.5,2.47,6.6,6.6,0,0,0,3.4.92,6.49,6.49,0,0,0,3.37-.92,6.85,6.85,0,0,0,2.46-2.47,6.62,6.62,0,0,0,.91-3.41,6.54,6.54,0,0,0-.91-3.4,6.8,6.8,0,0,0-2.46-2.45,6.57,6.57,0,0,0-3.37-.9A6.68,6.68,0,0,0,230.45,108.71Z\"\n				transform=\"translate(-0.49 -1.38)\" fill=\"#424143\" />\n			<path d=\"M259,105.8h2.38v17.56H259l-10-13.6v13.6h-2.4V105.8H249L259,119.42Z\" transform=\"translate(-0.49 -1.38)\" fill=\"#424143\"\n			/>\n			<path d=\"M264.18,105.8H277.9V108h-5.67v15.35h-2.41V108h-5.64Z\" transform=\"translate(-0.49 -1.38)\" fill=\"#424143\" />\n			<path d=\"M279.73,114.91h6v1.68h-6Z\" transform=\"translate(-0.49 -1.38)\" fill=\"#424143\" />\n			<path d=\"M289.84,105.8H302V108h-9.78v5.42H301v2.19h-8.76v5.59h10.08v2.18H289.84Z\" transform=\"translate(-0.49 -1.38)\" fill=\"#424143\"\n			/>\n			<path d=\"M318.72,105.8h2.38v17.56h-2.43l-10-13.6v13.6h-2.41V105.8h2.44l10.06,13.62Z\" transform=\"translate(-0.49 -1.38)\" fill=\"#424143\"\n			/>\n			<path d=\"M337.92,106.94a8.41,8.41,0,0,1,3.25,3.15,9.1,9.1,0,0,1,0,9,8.49,8.49,0,0,1-3.28,3.15,9.54,9.54,0,0,1-4.66,1.14h-7.08V105.8h7.15A9.43,9.43,0,0,1,337.92,106.94Zm-1.25,13.39A6.26,6.26,0,0,0,339,118a6.63,6.63,0,0,0,.87-3.36,6.54,6.54,0,0,0-.88-3.39,6.4,6.4,0,0,0-2.39-2.37,6.7,6.7,0,0,0-3.38-.87h-4.69v13.2h4.79A6.6,6.6,0,0,0,336.67,120.33Z\"\n				transform=\"translate(-0.49 -1.38)\" fill=\"#424143\" />\n			<path d=\"M352.36,105.8h12.19V108h-9.78v5.42h8.75v2.19h-8.75v5.59h10.08v2.18H352.36Z\" transform=\"translate(-0.49 -1.38)\" fill=\"#424143\"\n			/>\n			<path d=\"M381.23,105.8h2.39v17.56h-2.44l-10-13.6v13.6h-2.41V105.8h2.43l10.06,13.62Z\" transform=\"translate(-0.49 -1.38)\" fill=\"#424143\"\n			/>\n			<path d=\"M400.8,114.78h2.13v6.45a10.64,10.64,0,0,1-3.11,1.68,10.48,10.48,0,0,1-3.53.63,9.29,9.29,0,0,1-4.64-1.19,8.91,8.91,0,0,1-3.33-3.26,8.79,8.79,0,0,1-1.22-4.53,8.7,8.7,0,0,1,1.23-4.51,8.84,8.84,0,0,1,3.37-3.22,9.52,9.52,0,0,1,4.71-1.18,10.3,10.3,0,0,1,3.58.65,9.72,9.72,0,0,1,3,1.78l-1.38,1.76a7.69,7.69,0,0,0-2.42-1.52,7.54,7.54,0,0,0-2.8-.54,6.91,6.91,0,0,0-6,3.36,6.82,6.82,0,0,0,0,6.84,6.79,6.79,0,0,0,2.51,2.48,6.66,6.66,0,0,0,3.46.92,7.43,7.43,0,0,0,2.24-.36,8.47,8.47,0,0,0,2.12-1Z\"\n				transform=\"translate(-0.49 -1.38)\" fill=\"#424143\" />\n			<path d=\"M407.5,105.8h2.41v17.56H407.5Z\" transform=\"translate(-0.49 -1.38)\" fill=\"#424143\" />\n			<path d=\"M427.42,105.8h2.38v17.56h-2.43l-10-13.6v13.6h-2.4V105.8h2.43l10.06,13.62Z\" transform=\"translate(-0.49 -1.38)\" fill=\"#424143\"\n			/>\n			<path d=\"M434.85,105.8H447V108h-9.79v5.42H446v2.19h-8.76v5.59h10.09v2.18H434.85Z\" transform=\"translate(-0.49 -1.38)\" fill=\"#424143\"\n			/>\n			<path d=\"M451.23,105.8h12.19V108h-9.78v5.42h8.75v2.19h-8.75v5.59h10.08v2.18H451.23Z\" transform=\"translate(-0.49 -1.38)\" fill=\"#424143\"\n			/>\n			<path d=\"M479,123.36l-3.49-5.52a9.81,9.81,0,0,1-1,0H470v5.47h-2.41V105.8h6.87a7.79,7.79,0,0,1,5.16,1.54,5.44,5.44,0,0,1,1.82,4.38,6.24,6.24,0,0,1-1,3.59,5.58,5.58,0,0,1-2.85,2.11l4.09,5.94Zm-4.47-7.65a5.35,5.35,0,0,0,3.47-1,3.56,3.56,0,0,0,1.2-2.92A3.43,3.43,0,0,0,478,109a5.47,5.47,0,0,0-3.47-1H470v7.73Z\"\n				transform=\"translate(-0.49 -1.38)\" fill=\"#424143\" />\n			<path d=\"M218.44,56.17a15.39,15.39,0,0,0-19.29,6.4,15.36,15.36,0,0,0,0,15.37,15.44,15.44,0,0,0,5.59,5.56,15,15,0,0,0,7.75,2.06,15.48,15.48,0,0,0,5.9-1.17,16.88,16.88,0,0,0,5.12-3.27l2.19,2.35a21,21,0,0,1-6.21,4,18.34,18.34,0,0,1-7.16,1.46,18.66,18.66,0,0,1-9.5-2.5A18.85,18.85,0,0,1,196,79.61a18,18,0,0,1-2.53-9.34A17.59,17.59,0,0,1,196,61a19.1,19.1,0,0,1,16.44-9.18A19.43,19.43,0,0,1,225.65,57l-2.14,2.5A16.2,16.2,0,0,0,218.44,56.17Z\"\n				transform=\"translate(-0.49 -1.38)\" fill=\"#424143\" />\n			<path d=\"M260.67,88.59l-4.33-9.71H236.09l-4.28,9.71h-3.87L244.39,52.1h3.75l16.45,36.49Zm-23.18-13h17.44l-8.77-19.73Z\" transform=\"translate(-0.49 -1.38)\"\n				fill=\"#424143\" />\n			<path d=\"M294.65,88.59l-7.88-11.9c-1.11.07-2,.1-2.56.1h-10v11.8h-3.6V52.1h13.62q6.84,0,10.57,3.16t3.74,8.95a12.52,12.52,0,0,1-2.2,7.57A11.43,11.43,0,0,1,290.06,76l8.77,12.58Zm-10.44-15q5.22,0,8-2.37a8.46,8.46,0,0,0,2.82-6.86,8.14,8.14,0,0,0-2.82-6.69q-2.82-2.3-8-2.29h-10V73.55Z\"\n				transform=\"translate(-0.49 -1.38)\" fill=\"#424143\" />\n			<path d=\"M332.39,88.59l-7.88-11.9c-1.11.07-2,.1-2.56.1h-10v11.8h-3.6V52.1H322q6.84,0,10.57,3.16t3.74,8.95a12.52,12.52,0,0,1-2.2,7.57A11.39,11.39,0,0,1,327.8,76l8.77,12.58ZM322,73.55q5.22,0,8-2.37a8.46,8.46,0,0,0,2.82-6.86A8.14,8.14,0,0,0,330,57.63q-2.82-2.3-8-2.29h-10V73.55Z\"\n				transform=\"translate(-0.49 -1.38)\" fill=\"#424143\" />\n			<path d=\"M346.07,52.1h3.6V88.59h-3.6Z\" transform=\"translate(-0.49 -1.38)\" fill=\"#424143\" />\n			<path d=\"M361.16,52.1h24.43v3.24H364.76v13h18.63v3.23H364.76V85.35h21.5v3.24h-25.1Z\" transform=\"translate(-0.49 -1.38)\" fill=\"#424143\"\n			/>\n			<path d=\"M409.44,52.1H432.3v3.24H413v14h17.18v3.24H413v16h-3.6Z\" transform=\"translate(-0.49 -1.38)\" fill=\"#424143\" />\n			<path d=\"M463.75,54.27a18.78,18.78,0,0,1,6.92,6.7,17.59,17.59,0,0,1,2.56,9.3,17.83,17.83,0,0,1-2.56,9.34,19.23,19.23,0,0,1-33,0,17.83,17.83,0,0,1-2.56-9.34,17.59,17.59,0,0,1,2.56-9.3,18.85,18.85,0,0,1,6.92-6.7,19.72,19.72,0,0,1,19.15,0ZM446.5,57.06a15.49,15.49,0,0,0-5.64,5.53,14.71,14.71,0,0,0-2.08,7.68A15,15,0,0,0,440.86,78a15.48,15.48,0,0,0,5.64,5.61,15.08,15.08,0,0,0,7.73,2.07,14.84,14.84,0,0,0,7.65-2.07A15.55,15.55,0,0,0,467.49,78a15,15,0,0,0,2.08-7.72,14.71,14.71,0,0,0-2.08-7.68,15.57,15.57,0,0,0-5.61-5.53,15,15,0,0,0-7.65-2A15.25,15.25,0,0,0,446.5,57.06Z\"\n				transform=\"translate(-0.49 -1.38)\" fill=\"#424143\" />\n			<path d=\"M505.23,88.59l-7.88-11.9c-1.12.07-2,.1-2.56.1h-10v11.8h-3.61V52.1h13.63q6.84,0,10.57,3.16t3.73,8.95a12.58,12.58,0,0,1-2.19,7.57A11.42,11.42,0,0,1,500.63,76l8.77,12.58Zm-10.44-15q5.22,0,8-2.37a8.46,8.46,0,0,0,2.81-6.86,8.13,8.13,0,0,0-2.81-6.69q-2.82-2.3-8-2.29h-10V73.55Z\"\n				transform=\"translate(-0.49 -1.38)\" fill=\"#424143\" />\n			<path d=\"M543.1,54.5a18.1,18.1,0,0,1,0,31.69,19.49,19.49,0,0,1-9.6,2.4H518.9V52.1h14.67A19.25,19.25,0,0,1,543.1,54.5Zm-1.85,28.87a15,15,0,0,0-.08-26.05,15.2,15.2,0,0,0-7.65-2h-11v30h11.17A14.93,14.93,0,0,0,541.25,83.37Z\"\n				transform=\"translate(-0.49 -1.38)\" fill=\"#424143\" />\n			<path d=\"M560.3,52.1h24.43v3.24H563.9v13h18.64v3.23H563.9V85.35h21.51v3.24H560.3Z\" transform=\"translate(-0.49 -1.38)\" fill=\"#424143\"\n			/>\n		</svg>\n\n		<span class=\"screen-reader-text\">Carrie Forde</span>\n	</h1>\n	<button type=\"button\" class=\"menu-toggle\">\n		<span class=\"screen-reader-text\">Menu</span>\n		<span class=\"span-1\"></span>\n		<span class=\"span-2\"></span>\n		<span class=\"span-3\"></span>\n	</button>\n	<nav class=\"site-navigation\">\n		<ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</ul>\n		<form method=\"GET\" action=\"\" name=\"search-form\" id=\"search-form\" class=\"search-form\">\n			<label for=\"search\">Search</label>\n			<input type=\"search\" id=\"search\" name=\"search\">\n			<input type=\"submit\" class=\"button button--icon-only\" id=\"search-submit\" value=\"Submit\" onclick=\"openModal('modal-1')\">\n		</form>\n	</nav>\n</header>\n";
},"useData":true});
templates['modal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"modal-container is-hidden\">\n	<div id=\"modal-1\" class=\"modal is-hidden\" role=\"dialog\" aria-labelledby=\"modal-1_label\" aria-describedby=\"modal-1_content\"\n		aria-modal=\"true\">\n		<div class=\"modal-content text-center\">\n			<header class=\"modal-content__header\">\n				<h2 id=\"modal-1_label\">Sorry! Search is current disabled!</h2>\n				<button type=\"button\" class=\"button button--close\">\n					<span class=\"screen-reader-text\">Close</span>\n					<span class=\"bar bar-1\"></span>\n					<span class=\"bar bar-2\"></span>\n				</button>\n			</header>\n			<div id=\"modal-1_content\" class=\"modal-content__content\">\n				<img src=\"https://placekitten.com/500/350\" alt=\"\">\n				<p>Please enjoy this picture of a kitten instead. 😸</p>\n			</div>\n		</div>\n	</div>\n</section>\n";
},"useData":true});
templates['post'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<article id=\"post-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"post\">\n\n		<header class=\"post__header\">\n			<h1 class=\"post__title\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\n		</header>\n\n		<div class=\"post__content\">\n			"
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper)))
    + "\n		</div>\n	</article>\n\n	<aside class=\"sidebar\">\n		<div class=\"widget\">\n			<h3 class=\"widget__title\">All Articles</h3>\n			<ul class=\"article-list\">\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.articles : depth0),{"name":"with","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</ul>\n		</div>\n	</aside>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<li data-title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" data-content=\""
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper)))
    + "\"><a class=\"read-post\" href=\"#"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section id=\"post\" class=\"module module--post is-hidden\">\n	<button id=\"homeButton\" class=\"link link--left\">Return Home</button>\n"
    + ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0["3"] : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</section>\n";
},"useData":true});
templates['projects'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"module module--"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + " background--white-smoke\">\n	<div class=\"row\">\n		<header class=\"module__header\">\n			<h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n		</header>\n\n		<div class=\"module__content\">\n			<p class=\"intro text-center\">"
    + alias4(((helper = (helper = helpers.contentIntro || (depth0 != null ? depth0.contentIntro : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentIntro","hash":{},"data":data}) : helper)))
    + "</p>\n\n			<div id=\"tabs\" class=\"tabs\">\n				<ul class=\"tabs__nav\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.projects : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\n			\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.projects : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</div>\n	</div>\n</section>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "					<li "
    + ((stack1 = (helpers.position || (depth0 && depth0.position) || alias2).call(alias1,1,(data && data.index),{"name":"position","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n						<a id=\""
    + alias3((helpers.camelCase || (depth0 && depth0.camelCase) || alias2).call(alias1,(depth0 != null ? depth0.project : depth0),{"name":"camelCase","hash":{},"data":data}))
    + "Tab\" href=\"#"
    + alias3((helpers.camelCase || (depth0 && depth0.camelCase) || alias2).call(alias1,(depth0 != null ? depth0.project : depth0),{"name":"camelCase","hash":{},"data":data}))
    + "Panel\" class=\"tabs__tab\" role=\"tab\" aria-controls=\""
    + alias3((helpers.camelCase || (depth0 && depth0.camelCase) || alias2).call(alias1,(depth0 != null ? depth0.project : depth0),{"name":"camelCase","hash":{},"data":data}))
    + "Panel\"\n						 aria-selected=\""
    + ((stack1 = (helpers.position || (depth0 && depth0.position) || alias2).call(alias1,1,(data && data.index),{"name":"position","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\">"
    + alias3(((helper = (helper = helpers.project || (depth0 != null ? depth0.project : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"project","hash":{},"data":data}) : helper)))
    + "</a>\n					</li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "class=\"is-active\" ";
},"5":function(container,depth0,helpers,partials,data) {
    return "true";
},"7":function(container,depth0,helpers,partials,data) {
    return "false";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "				<div id=\""
    + alias3((helpers.camelCase || (depth0 && depth0.camelCase) || alias2).call(alias1,(depth0 != null ? depth0.project : depth0),{"name":"camelCase","hash":{},"data":data}))
    + "Panel\" class=\"tabs__content "
    + ((stack1 = (helpers.position || (depth0 && depth0.position) || alias2).call(alias1,1,(data && data.index),{"name":"position","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" aria-labelledby=\""
    + alias3((helpers.camelCase || (depth0 && depth0.camelCase) || alias2).call(alias1,(depth0 != null ? depth0.project : depth0),{"name":"camelCase","hash":{},"data":data}))
    + "Tab\">\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.images : depth0),{"name":"with","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n					<article class=\"project-card\">\n						<header class=\"project-card__header\">\n							<h2>Technologies Used:</h2>\n							<p class=\"intro\">"
    + alias3(((helper = (helper = helpers.technologies || (depth0 != null ? depth0.technologies : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"technologies","hash":{},"data":data}) : helper)))
    + "</p>\n						</header>\n					\n						<div class=\"project-card__content\">\n							<p>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n						</div>\n					\n						<footer class=\"project-card__footer\">\n							<a href=\""
    + alias3(((helper = (helper = helpers.demoURL || (depth0 != null ? depth0.demoURL : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"demoURL","hash":{},"data":data}) : helper)))
    + "\">\n								<i class=\"fa fa-desktop\" aria-hidden=\"true\"></i> View Demo</a>\n							<a href=\""
    + alias3(((helper = (helper = helpers.repoURL || (depth0 != null ? depth0.repoURL : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"repoURL","hash":{},"data":data}) : helper)))
    + "\">\n								<i class=\"fa fa-github\" aria-hidden=\"true\"></i> View Code</a>\n						</footer>\n					</article>\n				</div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "is-active";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					"
    + ((stack1 = (helpers.matches || (depth0 && depth0.matches) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.length : depth0),1,{"name":"matches","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n					<div>\n						<img src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper)))
    + "\">\n					</div>\n					";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n					\n					<div class=\"carousel\">\n						<nav class=\"carousel__dots\">\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						</nav>\n					\n						<nav class=\"carousel__arrows\">\n							<button type=\"button\" class=\"carousel__button carousel__button--previous\">\n								<i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\n								<span class=\"screen-reader-text\">Previous Slide</span>\n							</button>\n							<button type=\"button\" class=\"carousel__button carousel__button--next\">\n								<i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>\n								<span class=\"screen-reader-text\">Next Slide</span>\n							</button>\n						</nav>\n					\n						<div class=\"carousel__slides\">\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						</div>\n					</div>\n					";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "							<a href=\"#slide-"
    + alias3((helpers.add || (depth0 && depth0.add) || alias2).call(alias1,(data && data.index),1,{"name":"add","hash":{},"data":data}))
    + "\" "
    + ((stack1 = (helpers.position || (depth0 && depth0.position) || alias2).call(alias1,1,(data && data.index),{"name":"position","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n								<span class=\"screen-reader-text\">"
    + alias3(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper)))
    + "</span>\n							</a>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "							<div id=\"slide-"
    + alias3((helpers.add || (depth0 && depth0.add) || alias2).call(alias1,(data && data.index),1,{"name":"add","hash":{},"data":data}))
    + "\" class=\"carousel__slide "
    + ((stack1 = (helpers.position || (depth0 && depth0.position) || alias2).call(alias1,1,(data && data.index),{"name":"position","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n								<img src=\""
    + alias3(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper)))
    + "\">\n							</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0["1"] : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['skills'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"module module--"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"row\">\n		<header class=\"module__header\">\n			<h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n		</header>\n\n		<div class=\"module__content\">\n			<p class=\"intro text-center\">"
    + alias4(((helper = (helper = helpers.contentIntro || (depth0 != null ? depth0.contentIntro : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentIntro","hash":{},"data":data}) : helper)))
    + "</p>\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.charts : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</section>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return ((stack1 = (helpers.matches || (depth0 && depth0.matches) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"horizontal",{"name":"matches","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = (helpers.matches || (depth0 && depth0.matches) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"vertical",{"name":"matches","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<div class=\"chart chart--horizontal\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.skills : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n			";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "				<span class=\"bar--"
    + alias3((helpers.hyphenCase || (depth0 && depth0.hyphenCase) || alias2).call(alias1,(depth0 != null ? depth0.skill : depth0),{"name":"hyphenCase","hash":{},"data":data}))
    + "\" data-level=\""
    + alias3(((helper = (helper = helpers.level || (depth0 != null ? depth0.level : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"level","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.level || (depth0 != null ? depth0.level : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"level","hash":{},"data":data}) : helper)))
    + "%</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "\n			<div class=\"chart-wrapper chart--"
    + alias3((helpers.hyphenCase || (depth0 && depth0.hyphenCase) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"hyphenCase","hash":{},"data":data}))
    + "\">\n				<h3 class=\"chart__header\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n				<ul class=\"legend\">\n					<li>Learning</li>\n					<li>Competent</li>\n					<li>Proficient</li>\n					<li>Expert</li>\n				</ul>\n				<ul class=\"chart chart--vertical\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.skills : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\n			</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<li class=\"chart__data-point\">\n						<span class=\"bar\" data-level=\""
    + alias4(((helper = (helper = helpers.level || (depth0 != null ? depth0.level : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"level","hash":{},"data":data}) : helper)))
    + "\">\n							<span class=\"tooltip\">"
    + alias4(((helper = (helper = helpers.tooltip || (depth0 != null ? depth0.tooltip : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tooltip","hash":{},"data":data}) : helper)))
    + "</span>\n						</span>\n						<span class=\"chart__label\">"
    + alias4(((helper = (helper = helpers.skill || (depth0 != null ? depth0.skill : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"skill","hash":{},"data":data}) : helper)))
    + "</span>\n					</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0["2"] : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();