# Prototype

	!javascript
	function Pet(name, species, hello)
	{
	    this.name = name;
	    this.species = species;
	    this.hello = hello;
	}

	Pet.prototype.sayHello = function()
	{
	    alert(this.hello);
	}

	var rufus = new Pet("Rufus", "cat", "miaow");
	rufus.sayHello();
	
---

# Prototype Chaining

	!javascript
	function Cat(name, hello, breed, whiskerLength)
	{
	    this.name = name;
	    this.species = species;
	    this.hello = hello;
	    this.breed = breed;
	    this.whiskerLength = whiskerLength;
	}

	Cat.prototype = new Pet();
	var rufus = new Cat("rufus", "miaow", "Maine Coon", 7);
	rufus.sayHello();
