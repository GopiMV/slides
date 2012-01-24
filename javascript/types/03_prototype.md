# Prototype

* Every object is linked to a prototype object from which it can inherit properties
* All objects created from object literals are linked to `Object.prototype`

---

# Prototype

.fx: runnable

	!javascript
	var Person = function (name) {
	    this.name = name;
	};

	Person.prototype.sayHello = function () {
	    alert('Hello, my name is ' + this.name);
	};

	var thomas = new Person('Thomas');
	thomas.sayHello();

---

# Prototype

.fx: no-transition runnable

	!javascript
	var Person = function (name) {
	    this.name = name;
	};

	Person.prototype.sayHello = function () {
	    alert('Hello, my name is ' + this.name);
	};

	var thomas = new Person('Thomas');
	thomas.sayHello();

	Person.prototype.sayMyName = function () {
    	alert('Hello, my name is ' + this.name);
	};

	thomas.sayMyName();

---

# Prototype Chaining

.fx: runnable

	!javascript
	var Person = function () {
	};
	Person.prototype.sayHello = function () {
	    alert('Hello, my name is ' + this.name);
	};



	var Customer = function (name) {
	    this.name = name;
	};

	Customer.prototype = new Person();

	var customer = new Customer('Customer');
	customer.sayHello();