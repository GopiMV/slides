# Function invocation patterns

* Method invocation pattern
* Function invocation pattern
* Constructor invocation pattern
* Apply invocation pattern

# These patterns differ in how `this` is initialized

---

# Method invocation pattern

.fx: runnable

* When a function is stored as a property of an object, it is called a method
* When a method is invoked, `this` is bound to that object (late binding)

# Example:

    !javascript
    var myObject = {
        value: 0,
        increment: function(inc) {
            this.value += inc;
            alert(this);
        }
    }

    myObject.increment(2);

---

# Function invocation pattern

.fx: runnable

* When the function is **not** the property of an object, it is called a function
* When a function is invoked, `this` is bound to the global object

# Example:

    !javascript
    var foo = function() {
        alert(this); // Window in the browser
    };

    foo();

# Presenter Notes
This was a design mistake in the language.
A consequence is that a method cannot employ an inner function to help it do its work because the inner function does not share the method's access to the object as its `this` is bound to the wrong value

---

# Function invocation pattern

# Example 2:

    !javascript
    myObject.double = function() {


        var helper = function() {
            this.value = add(this.value, this.value); // this.value
                                                      // is undefined
        };

        helper(); // invoke helper as a function
    };

    myObject.double(); // invoke double as a method

---

# Function invocation pattern

.fx: no-transition

# Example 2:

    !javascript
    myObject.double = function() {
        var that = this; // workaround

        var helper = function() {
            that.value = add(that.value, that.value);
        };

        helper(); // invoke helper as a function
    };

    myObject.double(); // invoke double as a method

---

# Constructor invocation pattern

.fx: runnable

* If a function is invoked with the `new` prefix, a new object will be created with a hidden link to the value of the function's `prototype` member
* `this` is bound to that new object
* By convention, they are kept in variables with a capitalized name
* Use of constructor functions is **not** recommended

# Example:

    !javascript
    // Create a constructor function called Foo
    var Foo = function(string) {
        this.value = string;
        alert(this);
    };

    // Make an instance of Foo
    var myFoo = new Foo('confused');
    // Call Foo as an function
    var myFoo = Foo('confused');

---

# Apply invocation pattern

* The `apply` method lets us construct an array of arguments to use to invoke a function
* It lets us choose the value of `this`

# Example:

    !javascript
    var context = {};

    var args = [3, 4];
    var sum = add.apply(context, args); // this === context inside
                                         // the add function

    var sum = add.call(context, 3, 4); // this === context inside
                                       // the add function
