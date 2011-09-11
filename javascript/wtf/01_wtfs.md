# WTF JS

---
	!javascript
	Math.max(); // -Infinity
    Math.min();// Infinity

	Math.min() < Math.max(); // false

---
	!javascript
	new Array([],null,undefined,null) == ",,,";
	// true
	
---
	!javascript
	var foo = [0];
	console.log(foo == !foo); // true
	console.log(foo == foo); // true	

---
	!javascript
	var a = 012 // 10

---
	!javascript
	3 == "03" // true