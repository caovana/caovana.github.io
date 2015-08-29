var app = angular.module("vhh", ["firebase"]);
var rootRef = new Firebase("https://viemhonghat.firebaseio.com/si");
var authData = rootRef.getAuth();
if (authData) {
	console.log("User " + authData.uid + " is logged in with " + authData.provider);
} else {
  $(location).attr('href','login.html');
}
app.controller("plistCtrl", function($scope, $firebaseObject, $firebaseAuth) {
	// download the data into a local object
	var syncObject = $firebaseObject(rootRef);
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
		rootRef.unauth();
		$(location).attr('href','login.html');
	}
});
