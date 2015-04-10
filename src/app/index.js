'use strict';

angular.module('materialMedia', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial','com.2fdevs.videogular'])
  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
  	$mdThemingProvider.theme('default')
	    .primaryPalette('pink')
	    .accentPalette('orange');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as vm'
      })
      .state('video', {
        url: '/video',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });
