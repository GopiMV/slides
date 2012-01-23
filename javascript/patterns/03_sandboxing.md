# Sandboxing

	!javascript
	(function (window, undefined) {
		var document = window.document,
			$ = jQuery = window.jQuery.noConflict(),
			_ = window._.noConflict(),
			Backbone = window.Backbone.noConflict();

		var root = {};

		// ...

		window.root = root;
	} (window));