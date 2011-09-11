# function expression

* `function`
* optional name
* parameters
* body


---

# function expression

	!javascript
	function(param) {
		// body
	}
	
* Produces an instance of a function object 

---

# function statement

* `function`
* mandatory name
* parameters
* body
	
---

# function statement

	!javascript
	function foo() {}
	
	// expands to
	var foo = function foo() {}
	
	// expands to
	var foo = undefined;
	foo = function foo() {}

* The function statement is just a short-hand for a var statement with a function value

---

# function expression 
### vs 
# function statement
## If the first token in a statement is `function`, then it is a function statement.

---

# Functions are first class

* May be passed as an argument to a function
* May be returned from a function
* May be assigned to a variable
* May be stored in an object or array
