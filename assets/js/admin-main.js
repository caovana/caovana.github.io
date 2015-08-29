var app = angular.module("vhh", ["firebase"]);
app.controller("plistCtrl", function($scope, $firebaseObject, $firebaseAuth) {
	var ref = new Firebase("https://viemhonghat.firebaseio.com/si");
	
	// download the data into a local object
	var syncObject = $firebaseObject(ref);
	syncObject.$bindTo($scope, "data");	
	syncObject.$loaded()
		.then(function() {
			console.log("First Time Data loading is finished!");
			$(".main-loading").hide();
			$(".patient-list").show();
			
		})
		.catch(function(err) {
			console.error(err);
		});
	$scope.signOut = function(){
		console.log('Going to Sign Out..');
		ref.unauth();
		$(location).attr('href','login.html');	
	}
});
