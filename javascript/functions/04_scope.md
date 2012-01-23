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
	function foo() {
		var a = 10;
	}
	foo();
	alert(a);
	
	function foo() {
		a = 10;
	}
	foo();
	alert(a);
	
---

# GLOBAL VARIABLES ARE EVIL!

---

# Scope 

# Takeaway:

* JavaScript has **function scope**, not block scope
* If you forget the **var** keyword, you create a global reference
* **Never** forget the var keyword 