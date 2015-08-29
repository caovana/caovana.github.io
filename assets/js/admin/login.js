var app = angular.module("vhh", ["firebase"]);
var rootRef = 	new Firebase('https://viemhonghat.firebaseio.com/');
//var authData = rootRef.getAuth();
//if (authData) {
//  console.log("User " + authData.uid + " is logged in with " + authData.provider);
//} else {
//  console.log("User is logged out");
//}
var thirdPartyLogin = function (provider) {
	var deferred = $.Deferred();

	rootRef.authWithOAuthPopup(provider, function (err, user) {
		if (err) {
			deferred.reject(err);
		}

		if (user) {
			deferred.resolve(user);
		}
	});

	return deferred.promise();
};
function handleAuthResponse(promise, route) {
    $.when(promise)
		.then(function (authData) {
		console.log("Login Success!");
		// route
		//routeTo(route);

	}, function (err) {
		console.log(err);
		// pop up error
		//showAlert({
//			title: err.code,
//			detail: err.message,
//			className: 'alert-danger'
//		});

	});
}
app.controller("loginCtrl", ["$scope", "$rootScope", "$firebaseAuth", function($scope, $rootScope, $firebaseObject, $firebaseAuth) {
	$scope.authObj = $firebaseAuth(rootRef);
	$scope.signIn = function(){
		rootRef.authWithPassword({
		  email    : $scope.email,
		  password : $scope.password
		}, function(error, authData) {
		  if (error) {
			console.log("Login Failed!", error);
		  } else {
			$rootScope.authData = authData;
			console.log("Authenticated successfully with payload:", authData);
			$(location).attr('hrootRef','index.html');
		  }
		});
	}
	$scope.faAuth = function(){
		rootRef.$authWithOAuthRedirect("facebook").then(function(authData) {
		  console.log("Logged in as:", authData.uid);
		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		});
	}
//	rootRef.onAuth(authDataCallback);
//	rootRef.offAuth(authDataCallback);	
	function authDataCallback(authData) {
			console.log("User " + authData.uid + " is logged in with " + authData.provider);
		if (authData) {
			console.log("User " + authData.uid + " is logged in with " + authData.provider);
			$(location).attr('hrootRef','index.html');
		} else {
//			console.log("User is logged out");
//			$(location).attr('hrootRef','login.html');
		}
	}
}]);
