# jQuery

---

# jQuery

jQuery is a fast and concise JavaScript Library that focuses on the interaction between HTML and JavaScript.

jQuery is well behaved:

* does not hijack your global namespace
* plays well with other libraries


Almost every operation boils down to:

* find some stuff
* do something to it




---

# jQuery

The features most relevant for our project:

* DOM element selections
* DOM traversing and manipulation
* Ajax


# Presenter Notes

---

# ready event

Specify a function to execute when the DOM is fully loaded.

	!javascript
	$(document).ready(function () {
		alert('The DOM is now loaded and can be manipulated');
	});
	
	// short hand
	$(function() {
		alert('The DOM is now loaded and can be manipulated');
	});
	
# Presenter Notes

---

# Selectors

jQuery offers a powerful set of tools for matching a set of elements in a document

# Examples of basic selectors:

	!javascript
	$('*');				// all elements
	$('.myClass'); 		// by class name
	$('#myDiv');		// by id
	$('div');			// all div elements
	$('div', 'span');	// all div and span elements

	
# Presenter Notes

---

# Selectors

# Example of filters:

	!javascript
	$('tr:first');				 // first tr element
	$('tr:last');				 // last tr element
	$('tr:not'); 				 // elements that are not tr elements
	$('div span:first-child');   // first span in each div.
	$('div span:nth-child(1)');  // same as above
	$('div:has(p)');			 // div elements that has at least one p child element
	$('div:contains("hello")');  // div elements that contains the text "hello".

	
# Presenter Notes
contains does a case-sensitive lookup.

---

# Selectors

# Examples of forms selectors:

	!javascript
	$(':input'); 
	$(':button'); 
	$('input:text');
	$('input:enabled');

# Example of attribute selectors:

	!javascript
	$('input[name*="myName"]');  	// Elements that have the specified attribute with 
									// a value containing the given substring
									
	$('input[name!="myName"]');  	// not equal
	$('input[name="myName"]');   	// equal
	$('input[name^="myName"]');  	// starts with
	$('input[name$="myName"]');  	// ending exactly with

	
# Presenter Notes
For å oppnå best ytelse når en bruker :input eller :button, finn elementet først med rein css selectors - så bruk .filter(":input")


---

# Traversing

# Examples:

	!javascript
	$('div').children()
	$('div').parents()
	$('div').siblings()
	
	$('li.third-item').next();
	
	$('li').first();
	
	$('body').find('li');
	
	$('li').each(function (index) {
		alert(index + ': ' + $(this).text());
	});
	
# Presenter Notes
	
---

# Manipulation

# Examples:

	!javascript
	$('p').addClass('myClass yourClass');		// Adds two classes to all p elements

	$('h2').appendTo($('#myDiv'));				// Appends an h2 element to 'myDiv'

	$('#myDiv').html();							// Gets the html
	$('#myDiv').html('<p>new content</p>');		// Sets the html

	$('li').text(function (index) {				// Sets the text of all li elements
		return 'item number ' + (index + 1);
	});
	
	
# Presenter Notes
			
---

# Ajax

Perform an asynchronous HTTP (Ajax) request.

	!javascript
	$.ajax({
		type: 'POST', 					
		url: 'PriceEngine/Calculate', 	
		data: {username: 'charlie'}, 	
		dataType: 'json', 				
		processData: true,
		contentType: 'application/x-www-form-urlencoded',
		contents: '',
		async: true,
		cache: false,
		
		crossDomain: false,
		global: true,	
		headers: {'Accepts':'text/javascript'},
		ifModified: true,
		mimeType: '',	
		username: 'Ola Nordmann',
		password: 'pa55ord',
		timeout: 30000,
		xhr: {},
		xhrFields: {withCredentials: true}
	});

# Presenter Notes
dataType = type data som forventes tilbake fra server. Available types are: "xml", "html", "script", "json", "jsonp", "text"
prosessData true = data blir transformert til query string, passende for content-type.
content-type = data blir alltid sendt til server med UTF-8 encoding, dette må dekodes på serveren.
contents = string/regular-expression pairs that determines how jQuery will parse the response, given its contentType.
cache = false vil tvinge browser til ikkje å cache sidene. timestamp vil bli lagt til som parameter i URLen
crossDomain =
global = Whether to trigger global Ajax event handlers for this request	
headers = map of additional key/value pairs to send along with the request.
ifModified = Allow the request to be successful only if the response has changed since the last request. Default is false
mimeType = A mime type to override the XHR mime type
username = To be used in response to an HTTP access authentication request
xhr = callback for creating the request object. Defaults to the ActiveXObject when available (IE), the XMLHttpRequest otherwise
xhrFields = set fields on the native XHR object.

---

# Ajax

# Example of callback hooks:

	!javascript
	$.ajax({
		
		success: function (data, textStatus, jqXhr) {}, 
		error: function (jqXhr, textStatus, errorThrown) {},
		complete: function (jqXhr, textStatus) {},
		
		statusCode: {
			404: function() {
				alert('page not found');
			}
		}
	});


		
# Presenter Notes
beforeSend
dataFilter - kalt rett etter suksessfylt mottak av response data. Må returnere data til success handler
context - kontekst til alle ajax-relaterte callbacks

	
---

# Ajax

# Shorthand methods:


	!javascript
	$.get(url, params, success);
	$.post(url, params, success);
	$.getJSON(url, params, success)
	
# Presenter Notes

---

# Ajax

# Global settings for ajax requests:

	!javascript
	$.ajaxSetup({
		url: "someUrl/test",
		global: false,
		type: "POST"
	});

# Global ajax event handler:

`.ajaxComplete`, `.ajaxError`, `.ajaxSuccess`, `.ajaxSend`, `.ajaxStart`, `.ajaxStop`

	!javascript
	$("div.log").ajaxError(function () {
		$(this).text("Triggered ajaxError handler.");
	});

# Presenter Notes

---


# Ajax

	!javascript
	$.ajax({
		type: 'POST', 					
		url: 'PriceEngine/Calculate', 	
		data: {username: 'charlie'}, 	
		dataType: 'json',
		success: function (data, textStatus, jqXhr) {
			alert('success');
		}, 
		error: function (jqXhr, textStatus, errorThrown) {
			alert('error');
		},
		complete: function (jqXhr, textStatus) {
			alert('complete');
		},
		
		statusCode: {
			404: function() {
				alert('page not found');
			}
		} 				
	});
 
	
# Presenter Notes

---


# Ajax

# Another solution:
 
Use $.ajax(), but wrap all the ajax related code in a facade, and translate the error 
thrown from the server into something the client can understand.

Advantages:

* All complex ajax code gathered in one place
* Translation between server and client happens in only one place
* Enhanced testability
	
# Presenter Notes


---

# Example facade

	!javascript
	ffshop.calculator.getPrice(insuranceModel, {
		error: function() { ... },
		exploitAttack: function() { ... }
		accessDenied: function() { ... }
	});
	
		
---


		
# Example facade

	!javascript
	ffshop.calculator = (function(){
		return {
			getPrice: function(model, callbacks) {
				ffshop.ajaxWrapper.postJSON("http://bit.ly/calc", model, callbacks);
			}
		};
	}());

	
---

# Example facade

	!javascript
	ffshop.ajaxWrapper = (function () {

		var errorCode = {
			400: 'accessDenied',
			500: 'internalServerError'
		};

		function successHandler(callbacks){ ..};
		function errorHandler(callbacks){ .. };

		return {
			postJSON: function(url, data, callbacks) {
				var opts = {
					type: 'POST',
					dataType: 'json',
					url: url,
					data: data
				};
				opts.success = successHandler(callbacks);
				opts.error = errorHandler(callbacks);

				$.ajax(opts);
			}
		};
}());


	
---

# jQuery

* API -  [http://api.jquery.com/](http://api.jquery.com/)
* Tutorials  -  [http://docs.jquery.com/Tutorials](http://docs.jquery.com/Tutorials)
