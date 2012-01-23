# arguments

* When a function is invoked, in addition to its parameters, it also gets a special parameter called `arguments`
* It contains all of the arguments from the invocation
* It is an array-like object
* `arguments.length` is the number of arguments passed

# Example:

    !javascript
    function calcAverage() {
        var sum = 0;
        for(var i = 0; i < arguments.length; i++) {
          sum = sum + arguments[i];
        }
        var average = sum/arguments.length;
        return average;
    }

    var average = calcAverage(400, 600, 83);