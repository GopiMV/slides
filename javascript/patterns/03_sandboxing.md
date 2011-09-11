# Sandboxing

	!javascript
	(function(window, undefined) {
		var document = window.document,
			navigator = window.navigator,
			location = window.location;
		
		// ....
		
		window.jQuery = window.$ = jQuery;
	})(window);  