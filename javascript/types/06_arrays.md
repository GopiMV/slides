# Arrays

* A special type of object; Keys are whole numbers
* No need to provide type or length when creating an array

---

# Array literals

	!javascript
	var array = ['one', 'two', 'three'];
	
---

# Array.length

	!javascript
	var a = ['one', 'two'];
	a.length // 2
	a[100] = 'three';
	a.length // 101

* `array.length` is always one more than the highest index
	