# Backbone.js

---

# Backbone.js

Backbone.js supplies structure to JavaScript-heavy applications by providing:

* **models** with key-value binding and custom events
* **collections** with a rich API of enumerable functions
* **views** with declarative event handling

---

# Backbone.Events

**Events** is a module that can be mixed in to any object, giving the object the ability to bind and trigger custom named events.

# Example:

	!javascript
	var object = {};

	_.extend(object, Backbone.Events);

	object.bind("alert", function(msg) {
	  	alert("Triggered " + msg);
	});

	object.trigger("alert", "an event");
	
---

# Backbone.Model

**Models** are the heart of any JavaScript application, containing the interactive data as well as a large part of the logic surrounding it: conversions, validations, computed properties, and access control.

# Example:

	!javascript
	var Sidebar = Backbone.Model.extend({
	  	promptColor: function() {
	    	var cssColor = prompt("Please enter a CSS color:");
	    	this.set({color: cssColor});
	  	}
	});

	window.sidebar = new Sidebar;

	sidebar.bind('change:color', function(model, color) {
	  	$('#sidebar').css({background: color});
	});

	sidebar.set({color: 'white'});

	sidebar.promptColor();
	
---

# Backbone.Collection

**Collections** are ordered sets of models. You can to bind "change" events to be notified when any model in the collection has been modified, listen for "add" and "remove" events, fetch the collection from the server, and use a full suite of Underscore.js methods.

# Example:

	!javascript
	var Library = Backbone.Collection.extend({
	  	model: Book
	});
	
---

# Backbone.View

**Views** are almost more convention than they are code — they don't determine anything about your HTML or CSS for you, and can be used with any JavaScript templating library. The general idea is to organize your interface into logical views, backed by models, each of which can be updated independently when the model changes, without having to redraw the page.

# Example:

	!javascript
	var DocumentRow = Backbone.View.extend({
	  	tagName: "li",
	  	className: "document-row",
	
	  	events: {
	  		"click .icon":          "open",
	    	"click .button.edit":   "openEditDialog",
	    	"click .button.delete": "destroy"
	  	},

	  	render: function() {
	    	 // ...
	  	}
	});

---

# $ (jQuery or Zepto)

If jQuery or Zepto is included on the page, each view has a $ function that runs queries scoped within the view's element.

# Example:

	!javascript
	ui.Chapter = Backbone.View.extend({
	  	serialize : function() {
	    	return {
	      		title: this.$(".title").text(),
	      		start: this.$(".start-page").text(),
	      		end:   this.$(".end-page").text()
	    	};
	  	}
	});
	
---

# Backbone.View Templating

# Example:

	!javascript
	TravelPriceView: Backbone.View.extend({
		id: 'travel-price-view',
		template: _.template(
		'Pris pr måned: <span id="price-per-month"><%= pricePerMonth %></span><br />' +
		'Pris pr år: <span id="price-per-year"><%= pricePerYear %></span<br />' +
		'Forutsetninger: <span id="prerequisites">Alder <%= age %>år<br />Type <%= risk %></span><br />' +
		'Forsikringen dekker: <span id="coverages"><%= coverages %></span>'),

		render: function () {
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		}
	})

---

# Backbone.Router

**Router** provides methods for routing client-side pages, and connecting them to actions and events. For browsers which don't yet support the History API, the Router handles graceful fallback and transparent translation to the fragment version of the URL.

# Example:

	!javascript
	var Workspace = Backbone.Router.extend({

	  	routes: {
	    	"help":                 "help",    // #help
	    	"search/:query":        "search",  // #search/kiwis
	    	"search/:query/p:page": "search"   // #search/kiwis/p7
	  	},

	  	help: function() {
	    	// ...
	  	},

	  	search: function(query, page) {
	     	// ...
	  	}
	});
	
---

# Backbone.History

**History** serves as a global router (per frame) to handle hashchange events or pushState, match the appropriate route, and trigger callbacks.

# Example:

	!javascript
	$(function(){
	  	new WorkspaceRouter();
	  	new HelpPaneRouter();
	  	Backbone.history.start({pushState: true});
	});
