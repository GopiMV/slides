# Numbers

* Only one number type
* double-precision 64-bit format IEEE 754 values
* Math namespace for advanced operations

---

# parseInt

.fx: runnable

	!javascript
	alert(parseInt('123'));
	alert(parseInt('010'));

---

# parseInt

.fx: no-transition

	!javascript
	parseInt('123'); // 123
	parseInt('010'); // 8


# ?!?

---

# parseInt

.fx: no-transition

	!javascript
	parseInt('123'); // 123
	parseInt('010'); // 8


# ?!?

	!javascript
	parseInt('010', 10);
	parseInt('11', 2);

---

# parseInt

.fx: no-transition

	!javascript
	parseInt('123'); // 123
	parseInt('010'); // 8


# ?!?

	!javascript
	parseInt('010', 10); // 10
	parseInt('11', 2); // 3

# ALWAYS SPECIFY THE BASE