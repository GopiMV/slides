# Objects

* An object is a dynamic, mutable collection of properties
* Every property has a key string that is unique within that object
* Prototype linkage feature, that allows one object to inherit properties of another

---

# get, set, and delete

	!javascript
	// get
	var name = object.name;
	var name = object['name'];

	// set
	object.name = value;
	object['name'] = value;

	// delete
	delete object.name;
	delete object['name'];

---

# Object literals

### An expressive notation for creating objects:

	!javascript
	var emptyObject = { };

	var myObject = {
		'some property': 'some value',
		foo: bar,
		method: function(param) {
			// do stuff
		}
	};