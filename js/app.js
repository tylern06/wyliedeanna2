var myAppModule = angular.module('myApp', ['ngRoute', 'ngAnimate']);
myAppModule.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/home',{
		templateUrl: 'partials/home.html'
	})
	.when('/gallery',{
		templateUrl:'partials/gallery.html'
	})

	.otherwise({
		redirectTo: '/home'
	});
});
