# Hoisting

.fx: runnable

	!javascript
	var myvar = 'my value';

	function bar() {
	  	alert(myvar);
	  	var myvar = 'local value';
	}

	bar();

---

# Hoisting

.fx: no-transition runnable

	!javascript
	var myvar = 'my value';

	function bar() {
		var myvar = undefined;
	  	alert(myvar); // undefined
	  	myvar = 'local value';
	}

	bar();

---

# Hoisting

.fx: runnable

# Function expression:

	!javascript
	alert(add(2, 3));
	var add = function(a, b) {
		return a + b;
	};

# Function declaration:

	!javascript
	alert(add(2, 3));
	function add(a, b) {
		return a + b;
	}

---

# Hoisting

.fx: no-transition runnable

# Function expression:

	!javascript
	var add = undefined;
	alert(add(2, 3)); // error
	add = function(a, b) {
		return a + b;
	};

# Function declaration:

	!javascript
	var add = function add(a, b) {
		return a + b;
	};
	alert(add(2, 3)); // 5

---

# Hoisting

# Takeaway:

* Declare **all** variables at the top of your function
* Declare **all** functions before you call them
