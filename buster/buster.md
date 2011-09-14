# Buster.js

---

# Buster.js

	!javascript
	buster.testCase("Sample test", {
	    setUp: function () {
	        
	    },
		
		tearDown: function () {
			
		},
		
		"should pass simple assertion": function () {
	       buster.assert(true);
	    },

	    "should fail when test throws": function () {
	        throw new Error("Ooops!");
	    },

	    "should fail test": function () {
	        buster.assert.equals("Something", "Other");
	    },
		
		"should use sinon": function () {
	        var obj = { meth: function () {} };
	        this.spy(obj, "meth");
	        buster.assert.called(obj.meth);
	    }
	});
	
---

# Buster.js

	!html
	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <title>Buster.JS Test case</title>
	    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	    <link rel="stylesheet" media="all" type="text/css" href="buster-test.css">
	  </head>
	  <body>
		<!-- Include your .js files here -->
	    <script type="text/javascript" src="buster-test.js"></script>
	    <script type="text/javascript" src="test-case.js"></script>
	  </body>
	</html>
	
---

# Buster.js

<iframe src="buster/samples/test-case.html" width="830" height="500"></iframe>