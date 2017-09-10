
var app = angular.module('app',['ngRoute']);
//配置路由
app.config(['$routeProvider',function($routeProvider){
	
	$routeProvider
	.when('/home',{
		templateUrl : 'template/home.html',
		controller : 'homeCtr'
	})
	.when('/news',{
		templateUrl : 'template/news.html',
		controller : 'newsCtr'
	})
	.when('/mes',{
		templateUrl : 'template/mes.html',
		controller : 'mesCtr'
	})
	.when('/my',{
		templateUrl : 'template/my.html',
		controller : 'myCtr'
	})
	.otherwise({redirectTo:'/home'});
	//其他路由都没有匹配成功，就会调用otherwise，转到redirectTo设置的路由
}]);