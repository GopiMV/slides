#Objects

## An object is a dynamic collection of properties. 

### Every property has a key string that is unique within that object.

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

### An expressive notation for creating objects.

	!javascript
	var myObject = {
		foo: bar
	};