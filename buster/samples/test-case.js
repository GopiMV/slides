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