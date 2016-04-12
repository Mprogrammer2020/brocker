console.log("Login file");
angular.module('App').controller('LoginCtrl', function ($scope, $http, $timeout, $ionicModal, $ionicLoading, $ionicPopup, $location) {
console.log("Login controller");
  $scope.login = function () {
  	$scope.error_message= "";
		console.log("logined clicked");
		var email= $("#userEmail").val();
		var password= $("#userPassword").val();
		console.log($("#userEmail").val());
		console.log($("#userPassword").val());
		if(email == "test@email.com"){
			console.log("logined");
			$location.url('/home_page');
		}else{
			console.log("creds not work");	
			$scope.error_message= "Wrong username and password";
		}
  }
});
