(function () {
    buster.assertions.on("pass", function () {
       	//alert("pass");
    });
	buster.assertions.on("failure", function () {
		//alert("fail");
    });
	buster.assertions.on("ignored", function () {
		//alert("deferred");
    });
	buster.assertions.on("error", function () {
		//alert("error");
    });
		
	buster.testRunner.onCreate(function (runner) {
	

	runner.on("test:success", function () {
		//alert("test:start");
	});
    });
}());
