'use strict';
var app = angular.module('app',['ui.router'])
angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	  $stateProvider.state('home', {
	    url: '/home',
	    templateUrl: 'template/home.html',
	    controller: 'homeCtr'
	  }).state('news', {
	    url: '/news',
	    templateUrl: 'template/news.html',
	    controller: 'newsCtr'
	  }).state('mes', {
	    url: '/mes',
	    templateUrl: 'template/mes.html',
	    controller: 'mesCtr'
	  }).state('my', {
	    url: '/my',
	    templateUrl: 'template/my.html',
	    controller: 'myCtr'
	  });
		$urlRouterProvider.otherwise('home');
}])
