var myAppModule = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);
myAppModule.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/home.html'
	})
	.when('/couple',{
		templateUrl:'partials/couple.html'
	})
	.when('/theparty',{
		templateUrl:'partials/theparty.html'
	})
	.when('/lodging',{
		templateUrl:'partials/lodging.html'
	})
	.when('/gallery',{
		templateUrl:'partials/gallery.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
