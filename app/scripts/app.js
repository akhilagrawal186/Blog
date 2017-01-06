'use strict';

/**
 * @ngdoc overview
 * @name blogWorkApp
 * @description
 * # blogWorkApp
 *
 * Main module of the application.
 */
angular
  .module('blogWorkApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("dashboard");
    $stateProvider
      .state('dashboard', {
          url: '/dashboard',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('about', {
          url:'/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    }).state('contact', {
          url:'/contact',
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      });
  }]);
