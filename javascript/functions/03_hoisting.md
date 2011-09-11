# Hoisting

	!javascript
	var myvar = 'my value';  

	function bar() {  
	  	alert(myvar);  
	  	var myvar = 'local value';  
	}
	
	bar();
	
---

# Hoisting

	!javascript
	var myvar = 'my value';  

	function bar() {  
	  	alert(myvar); // undefined  
	  	var myvar = 'local value';  
	}
	
	bar();
	
---

# Hoisting

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
## Takeaway:
### Declare **all** variables at the top of your function
### Declare **all** functions before you call them
