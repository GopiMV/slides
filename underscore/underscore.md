# Underscore.js

---

# Underscore.js

Underscore.js is a utility-belt library for JavaScript that:

* provides 60-odd functions that support both the usual functional suspects: `map`, `select`, `invoke` — as well as more specialized helpers: function binding, javascript templating, deep equality testing, and so on
* delegates to built-in functions, if present, so modern browsers will use the native implementations of `forEach`, `map`, `reduce`, `filter`, `every`, `some` and `indexOf`

---

# Underscore.js

**Collections** 
`each`, `map`, `reduce`, `reduceRight`, `detect`, `select`, `reject`, `all`, `any`, `include`, `invoke`, `pluck`, `max`, `min`, `sortBy`, `groupBy`, `sortedIndex`, `toArray`, `size`

**Arrays** 
`first`, `rest`, `last`, `compact`, `flatten`, `without`, `union`, `intersection`, `difference`, `uniq`, `zip`, `indexOf`, `lastIndexOf`, `range`

**Functions** 
`bind`, `bindAll`, `memoize`, `delay`, `defer`, `throttle`, `debounce`, `once`, `after`, `wrap`, `compose`

**Objects** 
`keys`, `values`, `functions`, `extend`, `defaults`, `clone`, `tap`, `isEqual`, `isEmpty`, `isElement`, `isArray`, `isArguments`, `isFunction`, `isString`, `isNumber`, `isBoolean`, `isDate`, `isRegExp`, `isNaN`, `isNull`, `isUndefined`

**Utility** 
`noConflict`, `identity`, `times`, `mixin`, `uniqueId`, `template`

**Chaining** 
`chain`, `value`

---

# _.extend(destination, *sources)

* Copy all of the properties in the **source** objects over to the **destination** object
* It's in-order, to the last source will **override** properties of the same name in previous arguments

# Example:
	
	!javascript
	_.extend({name : 'moe'}, {age : 50});
	=> {name : 'moe', age : 50}
	
---

# _.template(templateString, [context])

* Compiles JavaScript templates into functions that can be evaluated for rendering
* Useful for rendering complicated bits of HTML from JSON data sources
* Template functions can both interpolate variables, using `<%= … %>`, as well as execute arbitrary JavaScript code, with `<% … %>`
* When you evaluate a template function, pass in a context object that has properties corresponding to the template's free variables

# Example: 

	!javascript
	var compiled = _.template("hello: <%= name %>");
	compiled({name : 'moe'});