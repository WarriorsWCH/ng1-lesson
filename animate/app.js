
var app = angular.module('app',['ngRoute','ngAnimate']);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl :'animate/home.html',
		controller : 'homeCtr'
	})
	.when('/news',{
		templateUrl :'animate/news.html',
		controller : 'newsCtr'
	})
	.when('/mes',{
		templateUrl :'animate/mes.html',
		controller : 'mesCtr'
	})
	.when('/my',{
		templateUrl :'animate/my.html',
		controller : 'myCtr'
	});
	$routeProvider.otherwise({redirectTo:'/home'});
	
}]);
app.controller('homeCtr',['$scope',function($scope){
	$scope.pageClass = 'page-home';
}])
app.controller('newsCtr',['$scope',function($scope){
	$scope.pageClass = 'page-news';
}])
app.controller('mesCtr',['$scope',function($scope){
	$scope.pageClass = 'page-mes';
}])
app.controller('myCtr',['$scope',function($scope){
	$scope.pageClass = 'page-my';
}])


















