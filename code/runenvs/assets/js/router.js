'use strict';
angular.module('website').config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
function ($locationProvider, $stateProvider, $urlRouterProvider) {
	$stateProvider.state("home", {
		url: "",
		templateUrl: 'assets/main.html',
		controller: 'MainController'
	});
	$urlRouterProvider.otherwise(''); 
	$locationProvider.html5Mode({
		'enabled': true,
		'requireBase': false
	}).hashPrefix('!');
}])