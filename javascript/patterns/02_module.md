# Module Pattern

	!javascript
	(function () { 
		var privateVariable; 
		function privateFunction(x) { 
			// access privateVariable
		} 
		
		GLOBAL.firstMethod = function (a, b) { 
			// access privateVariable
		}; 
		
		GLOBAL.secondMethod = function (c) { 
			// call privateFunction()
		};
	}());

---

# Revealing Module Pattern

	!javascript
	var singleton = (function () { 
		var privateVariable; 
		function privateFunction(x) { 
			 // access privateVariable
		} 
		
		return { 
			firstMethod: function (a, b) {
				 // access privateVariable
			},
			
			secondMethod: function (c) {
				// call privateFunction()
			}
		};
	}());