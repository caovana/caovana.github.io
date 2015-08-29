var app = angular.module("vhh", ["firebase"]);
var rootRef = 	new Firebase('https://viemhonghat.firebaseio.com/');
var authData = rootRef.getAuth();
if (authData) {
	$(location).attr('href','index.html');
} else {
  console.log("User is logged out");
}

app.controller("loginCtrl", ["$scope", "$rootScope", "$firebaseAuth", function($scope, $rootScope, $firebaseAuth) {
	$scope.authObj = $firebaseAuth(rootRef);
	$scope.paAuth = function(){
        console.log("Signing in with account: "+$scope.email+", "+$scope.password);
		rootRef.authWithPassword({
		  email    : $scope.email,
		  password : $scope.password
		}, function(error, authData) {
		  if (error) {
			console.log("Login Failed!", error);
		  } else {
			$authData = authData;
			console.log("Authenticated successfully with payload:", authData);
			$(location).attr('href','index.html');
		  }
		});
	}
	$scope.faAuth = function(){
		$scope.authObj.$authWithOAuthPopup("facebook").then(function(authData) {
		  console.log("Logged in as:", authData.uid);
			$(location).attr('href','index.html');
		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		});
	}
}]);
