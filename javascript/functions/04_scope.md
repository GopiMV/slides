# Scope

.fx: runnable

	!javascript
	var foo = 1;
	function bar() {
	    if (!foo) {
	        var foo = 10;
	    }
	    alert(foo);
	}
	bar();

---

# Scope

.fx: no-transition runnable

	!javascript
	var foo = 1;
	function bar() {
		var foo = undefined;
	    if (!foo) { // true
	        foo = 10;
	    }
	    alert(foo); // 10
	}
	bar();

---

# Global Scope

.fx: runnable

	!javascript
	function bar() {
		x = 10;
	}
	bar();
	alert(x);

	function foo() {
		var y = 10;
	}
	foo();
	alert(y);

---

# Global Scope

.fx: no-transition

	!javascript
	function bar() {
		x = 10; // Creates a global variable
	}
	bar();
	alert(x); // 10

	function foo() {
		var y = 10; // Creates a local variable
	}
	foo();
	alert(y); // y is undefined

---

# GLOBAL VARIABLES ARE EVIL!

---

# Scope

# Takeaway:

* JavaScript has **function scope**, not block scope
* If you forget the **var** keyword, you create a global reference
* **Never** forget the var keyword