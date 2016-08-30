/*global angular window*/
(function withAngular(angular) {

'use strict';

angular.module('website', [
  'ngRoute',
  '720kb.fx',
  'ui.router'
])
.controller('Ctrl', ['$scope', '$location', '$window', '$state',
  function Ctrl($scope, $location, $window, $state) {
	
	var hash;
	$state.go('home');
	$scope.appsSliderType = 'music';

	if ($location.$$hash) {

		$scope.activeLink = $location.$$hash;
	} else {

		$scope.activeLink = 'hello';
	}

	$scope.setActiveLink = function setActiveLink(link) {
		$scope.activeLink = link;
	};
	$scope.setAppsSliderType = function setAppsSliderType(type) {
		$scope.appsSliderType = type;
	};
}]);
}(angular));
