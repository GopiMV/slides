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
	
---

# Function invocation patterns

* Method invocation pattern
* Function invocation pattern
* Constructor invocation pattern
* Apply invocation pattern

# These patterns differ in how `this` is initialized

---

# Method invocation pattern

* When a function is stored as a property of an object, it is called a method
* When a method is invoked, `this` is bound to that object (late binding)

# Example:

	!javascript
	var myObject = {
		value: 0,
		increment: function(inc) {
			this.value += inc;
		}
	}

	myObject.increment(2);
	
---

# Function invocation pattern

* When the function is **not** the property of an object, it is called a function
* When a function is invoked, `this` is bound to the global object

# Example:
	
	!javascript
	var foo = function() {
		alert(this); // Window in the browser
	};
	
	foo();
	
# Presenter Notes
This was a design mistake in the language.
A consequence is that a method cannot employ an inner function to help it do its work because the inner function does not share the method's access to the object as its `this` is bound to the wrong value
	
---

# Function invocation pattern

# Example 2:

	!javascript
	myObject.double = function() {
		var that = this; // workaround
		
		var helper = function() {
			that.value = add(that.value, that.value);
		};
		
		helper(); // invoke helper as a function
	};
	
	myObject.double(); // invoke double as a method

---

# Constructor invocation pattern
	
* If a function is invoked with the `new` prefix, a new object will be created with a hidden link to the value of the function's `prototype` member
* `this` is bound to that new object
* By convention, they are kept in variables with a capitalized name
* Use of constructor functions is **not** recommended

# Example: 

	!javascript
	// Create a constructor function called Foo
	var Foo = function(string) {
		this.value = string;
	};

	// Make an instance of Foo
	var myFoo = new Foo('confused');

---

# Apply invocation pattern
	
* The `apply` method lets us construct an array of arguments to use to invoke a function
* It lets us choose the value of `this`

# Example: 
	
	!javascript
	var array = [3, 4];
	var sum = add.apply(null, array);
	
---

# arguments

* When a function is invoked, in addition to its parameters, it also gets a special parameter called `arguments`
* It contains all of the arguments from the invocation
* It is an array-like object
* `arguments.length` is the number of arguments passed

# Example:

	!javascript
	function calcAverage() { 
		var sum = 0; 
	   	for(var i = 0; i < arguments.length; i++) {
	      sum = sum + arguments[i];
		}
	   	var average = sum/arguments.length;
	   	return average;
	} 
	
	var average = calcAverage(400, 600, 83);
