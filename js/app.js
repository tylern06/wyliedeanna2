var myAppModule = angular.module('myApp', ['ngRoute', 'ngAnimate','timer']);
myAppModule.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/home',{
		templateUrl: 'partials/home.html'
	})
	.when('/gallery',{
		templateUrl:'partials/gallery.html'
	})
	// .when('/lodging',{
	// 	templateUrl:'partials/lodging.html'
	// })
	.otherwise({
		redirectTo: '/home'
	});
});
