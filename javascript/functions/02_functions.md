# Functions are first class objects

* May be passed as an argument to a function
* May be returned from a function
* May be assigned to a variable
* May be stored in an object or array

---

# Function literals

# A function literal has four parts:

* the reserved word `function`
* optional name (which can be used to call itself in recursion)
* optional parameters
* set of statements wrapped in curly braces

# Example:

	!javascript
	// Create a variable called add and store a function
	// in it that adds two numbers
	var add = function(a, b) {
		return a + b;
	};

	// alternatively (but not quite the same as we'll see later)
	function add(a, b) {
		return a + b;
	}

