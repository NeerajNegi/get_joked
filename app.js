var app = angular.module('jokeApp', ["ui.router","ngToast"]);

app.run(function(){

});

app.config(function($stateProvider,$locationProvider,$urlRouterProvider){
	$locationProvider.hashPrefix('');
	$stateProvider
	.state('home', {
		url:'/',
		templateUrl: "template/home.html",
		controller: "HomeCtrl"
	})
	.state('getJoked',{
		url: '/getJoked',
		templateUrl: "template/getJoked.html",
		controller: "GetJokedCtrl"
	});
	$urlRouterProvider.otherwise("/");
});

app.controller('MainCtrl',function($rootScope, $scope, ngToast, $timeout, $http){
	
});

app.controller('HomeCtrl',function($rootScope, $scope, ngToast, $timeout, $http, $state){
	$scope.name = {};
	//joke will contain values arrays of size 10
	$rootScope.joke = {};
	$scope.showJokes = function(){
		if($scope.name.first && $scope.name.last){
			$scope.destin = "https://api.icndb.com/jokes/random/10?firstName="+$scope.name.first+"&lastName="+$scope.name.last;
			$http.get($scope.destin)
			.then(function(res){
				console.log(res);
				$rootScope.joke = res.data.value;
				console.log($rootScope.joke);
				$state.go("getJoked");
			}, function(err){
				console.log(err);
			});
		} else {
			$timeout(function(){
				ngToast.create("Please Enter All The Fields!");
			});
		}
	}
});

app.controller('GetJokedCtrl',function($rootScope, $scope, ngToast, $timeout, $http){

});