# Arrays

* A special type of object; Keys are whole numbers
* No need to provide type or length when creating an array

---

# Array literals

### An expressive notation for creating arrays

	!javascript
	var array = ['one', 'two', {number: 'three'}, function() {}];

---

# Array.length

.fx: runnable

	!javascript
	var a = ['one', 'two'];
	alert(a.length);

	a[100] = 'three';
	alert(a.length);

* `array.length` is always one more than the highest index
