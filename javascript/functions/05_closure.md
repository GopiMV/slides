# Closure

.fx: runnable

	!javascript
	function foo(x) {
		var tmp = 3;
	  	function bar(y) {
	    	alert(x + y + (++tmp));
	  	}
	  	bar(10);
	}
	foo(2);
	foo(2);
	foo(2);

# Presenter Notes
Whenever you see the function keyword within another function, the inner function has access to variables in the outer function.
This will always alert 16, because bar can access the x which was defined as an argument to foo, and it can also access tmp from foo.

---

# Closure

.fx: no-transition runnable

	!javascript
	function foo(x) {
	  	var tmp = 3;
	  	function bar(y) {
	    	alert(x + y + (++tmp)); // 2 + 10 + 4 = 16
	  	}
	  	bar(10);
	}
	foo(2);
	foo(2);
	foo(2);

# THIS IS NOT A CLOSURE

# Presenter Notes
That is not a closure. A closure is when you return the inner function. The inner function will close-over the variables of foo before leaving.

---

# Closure

.fx: runnable

	!javascript
	function foo(x) {
	  	var tmp = 3;
	  	return function (y) {
	    	alert(x + y + (++tmp));
	  }
	}
	var bar = foo(2); // bar is now a closure
	bar(10);
	bar(10);
	bar(10);
	bar(10);

# Presenter Notes
This function will also alert 16, because bar can still refer to x and tmp, even though it is no longer directly inside the scope.
However, since tmp is still hanging around inside bar's closure, it is also being incremented. It will be incremented each time you call bar.

---

# Closure

# Takeaway:

* A closure in JavaScript is like keeping a copy of the all the local variables, just as they were when a function exited.