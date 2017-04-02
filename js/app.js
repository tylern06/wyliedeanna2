var myAppModule = angular.module('myApp', ['ngRoute', 'ngAnimate']);
myAppModule.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/home.html'
	})
	.when('/gallery',{
		templateUrl:'partials/gallery.html'
	})
	// .when('/lodging',{
	// 	templateUrl:'partials/lodging.html'
	// })
	.otherwise({
		redirectTo: '/'
	});
});
