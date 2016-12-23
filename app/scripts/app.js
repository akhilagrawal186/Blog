'use strict';

/**
 * @ngdoc overview
 * @name blogAngular2App
 * @description
 * # blogAngular2App
 *
 * Main module of the application.
 */
angular
  .module('blogAngular2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');
    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/main.html'
      })
      .state('about', {
        url:'/about',
        templateUrl: 'views/about.html'

      });
      // .state('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   controllerAs: 'about'
      // })
      // .otherwise({
      //   url:"uuuu",
      //   templateUrl: 'views/about.html'
      // });

  });
