(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cart'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"modal-container is-hidden\">\n	<div id=\"modal\" class=\"modal\" role=\"dialog\" aria-labelledby=\"modal_label\" aria-describedby=\"modal-1_content\" aria-modal=\"true\">\n		<div class=\"modal-inner\">\n			<header class=\"modal-inner__header\">\n				<h2 id=\"modal-1_label\">Shopping Cart</h2>\n				<button type=\"button\" id=\"closeModal\" class=\"button button--close button--close-modal bg--primary\">\n					<span class=\"hide-text\">Close</span>\n					<span class=\"close close--1 bg--white\"></span>\n					<span class=\"close close--2 bg--white\"></span>\n				</button>\n			</header>\n			<section id=\"cart\" class=\"cart poppins\">\n				<header class=\"cart__header cart__row\">\n					<h3 class=\"cart-col--1\">Product</h3>\n					<h3 class=\"cart-col--2\">Price</h3>\n					<h3 class=\"cart-col--3\">Quantity</h3>\n					<h3 class=\"cart-col--4\">Total</h3>\n					<h3 class=\"cart-col--5 hide-text\">Remove</h3>\n				</header>\n				<div class=\"cart__content\"></div>\n				<footer class=\"cart__footer cart__row\">\n					<form class=\"cart__coupon\">\n						<label for=\"coupon\">Coupon</label>\n						<input type=\"text\" id=\"coupon\" class=\"coupon\">\n						<button type=\"button\" id=\"applyCoupon\" class=\"button\">Apply Coupon</button>\n					</form>\n					<span id=\"cartTotal\" class=\"cart__total cart-col--4 text--black\">$total</span>\n				</footer>\n			</section>\n			<footer class=\"modal-inner__footer\">\n				<button type=\"button\" id=\"continueShopping\" class=\"button button--outline text--primary\">Continue Shopping</button>\n				<button type=\"button\" id=\"checkout\" class=\"button\" \"disabled\">Checkout</button>\n			</footer>\n		</div>\n	</div>\n</section>\n";
},"useData":true});
templates['footer'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "				<li id=\""
    + alias3((helpers.camelCase || (depth0 && depth0.camelCase) || alias2).call(alias1,depth0,{"name":"camelCase","hash":{},"data":data}))
    + "\">\n					<a href=\"#"
    + alias3((helpers.camelCase || (depth0 && depth0.camelCase) || alias2).call(alias1,depth0,{"name":"camelCase","hash":{},"data":data}))
    + "\" class=\"text--aluminum\">"
    + alias3(container.lambda(depth0, depth0))
    + "</a>\n				</li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "				<li id=\""
    + alias3((helpers.camelCase || (depth0 && depth0.camelCase) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"camelCase","hash":{},"data":data}))
    + "\">\n					<a href=\"#"
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"text--black\">"
    + ((stack1 = ((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n				</li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "			<li id=\""
    + alias3((helpers.camelCase || (depth0 && depth0.camelCase) || alias2).call(alias1,depth0,{"name":"camelCase","hash":{},"data":data}))
    + "\">\n				<a href=\"#"
    + alias3((helpers.camelCase || (depth0 && depth0.camelCase) || alias2).call(alias1,depth0,{"name":"camelCase","hash":{},"data":data}))
    + "\">"
    + alias3(container.lambda(depth0, depth0))
    + "</a>\n			</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<footer id=\"siteFooter\" class=\"site-footer\">\n	<div>\n		<svg class=\"logo\">\n			<use xlink:href=\"assets/icons/svg-defs.svg#frey-logo\">\n		</svg>\n	</div>\n\n	<div class=\"widgets\">\n		<div class=\"widget\">\n			<h3 class=\"widget__title\">About us</h3>\n			<ul class=\"nav-menu list-reset\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.about_menu : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</ul>\n		</div>\n\n		<div class=\"widget\">\n			<h3 class=\"widget__title\">Connect</h3>\n			<div class=\"widget__content\">\n				<address>"
    + ((stack1 = ((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"address","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</address>\n				<p><a href=\"mailto:"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</a></p>\n				<p><a href=\"tel:"
    + alias4(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
    + "</a></p>\n			</div>\n		</div>\n\n		<div class=\"widget\">\n			<h3 class=\"widget__title\">Follow us</h3>\n			<ul class=\"nav-menu list-reset\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.social_networks : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</ul>\n		</div>\n	</div>\n\n	<div class=\"footer-bottom flex align-center justify-between\">\n		<ul class=\"nav-menu flex list-reset\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.footer_menu : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</ul>\n		<p>&copy; 2017 Frey Theme. All rights reserved.</p>\n	</div>\n</footer>\n";
},"useData":true});
templates['header'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "				<li id=\""
    + alias3((helpers.camelCase || (depth0 && depth0.camelCase) || alias2).call(alias1,depth0,{"name":"camelCase","hash":{},"data":data}))
    + "\" class=\"poppins\"><a href=\"#"
    + alias3((helpers.camelCase || (depth0 && depth0.camelCase) || alias2).call(alias1,depth0,{"name":"camelCase","hash":{},"data":data}))
    + "\" class=\"text--black\">"
    + alias3(container.lambda(depth0, depth0))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<header id=\"site-header\" class=\"site-header flex align-center justify-between\">\n	<div id=\"site-info\" class=\"site-info\">\n		<svg class=\"logo\">\n			<use xlink:href=\"assets/icons/svg-defs.svg#frey-logo\">\n		</svg>\n		<p class=\"hide-text\">Frey</p>\n	</div>\n	<button id=\"mobileMenu\" class=\"button button--light button--hamburger\">\n		<span class=\"hide-text\">Menu</span>\n		<span class=\"burger burger--top-bun\"></span>\n		<span class=\"burger burger--patty\"></span>\n		<span class=\"burger burger--bottom-bun\"></span>\n	</button>\n	<nav id=\"primary-nav\" class=\"primary-nav poppins\">\n		<ul class=\"flex nav-menu\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.main_menu : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</ul>\n	</nav>\n	<button type=\"button\" class=\"button button--light button--cart\" onclick=\"openModal('modal')\">\n		<span class=\"hide-text\">Cart</span>\n		<i class=\"fa fa-shopping-bag text--black\" aria-hidden=\"true\"></i>\n		<span id=\"cartCount\" class=\"cart-count\"></span>\n	</button>\n</header>\n";
},"useData":true});
templates['product'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"product\" id=\"product"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-type=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.sale : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n	<header class=\"product__header\">\n		<img src=\"assets/images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" class=\"product__image\" alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n		<h2 class=\"product__heading\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n		"
    + alias4(((helper = (helper = helpers.productBadge || (depth0 != null ? depth0.productBadge : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"productBadge","hash":{},"data":data}) : helper)))
    + "\n	</header>\n	<div class=\"product__content poppins text--iron\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.sale : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "	</div>\n	<footer class=\"product__footer bg--white\">\n		"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\n		<div class=\"increment flex justify-between\">\n			<button class=\"button button--outline minus\" type=\"button\">&minus;</button>\n			<label for=\"prod"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"hide-text\">Quantity</label>\n			<input class=\"qty\" type=\"number\" id=\"prod"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\"prod"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\"1\">\n			<button class=\"button button--outline plus\" type=\"button\">&plus;</button>\n		</div>\n		<button class=\"button button--add-to-cart\">Add to cart</button>\n	</div>\n</article>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "sale";
},"4":function(container,depth0,helpers,partials,data) {
    return "normal";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "			<span class=\"price price--on-sale price__sale text--danger\">$"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.price : depth0)) != null ? stack1.sale : stack1), depth0))
    + "</span>\n			&ndash;\n			<span class=\"price price--on-sale price__regular\">$"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.price : depth0)) != null ? stack1.regular : stack1), depth0))
    + "</span>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<span class=\"price price__regular text--primary\">$"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.price : depth0)) != null ? stack1.regular : stack1), depth0))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();