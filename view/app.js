
var app = angular.module('app',['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	
	$stateProvider
	.state('home',{
		url : '/home',
		templateUrl : 'view/home.html',
		controller : 'homeCtr'
	})
	.state('game',{
		url : '/game',
		templateUrl : 'view/game.html',
		controller : 'gameCtr'
	})
	.state('some',{
		url : '/some',
		templateUrl : 'view/some.html',
		controller : 'someCtr'
	})
	.state('my',{
		url : '/my',
		templateUrl : 'view/my.html',
		controller : 'myCtr'
	})
	.state('detail',{
		url : '/detail',
		templateUrl : 'view/detail.html',
		controller : 'detailCtr'
	});
	$urlRouterProvider.otherwise('home');
}]);
