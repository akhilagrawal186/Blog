'use strict';

/**
 * @ngdoc overview
 * @name practiceApp
 * @description
 * # practiceApp
 *
 * Main module of the application.
 */
angular
  .module('practiceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("dashboard/home");
  $stateProvider
    .state('dashboard', {
        url: '/dashboard',
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl',
      controllerAs: 'dashboard'
    })
    .state('dashboard.home', {
        url:'/home',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl',
      controllerAs: 'home'
    })
    .state('dashboard.about', {
        url:'/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
  }).state('dashboard.angularjs', {
        url:'/angularjs',
      templateUrl: 'views/angularjsTiles.html',
      controller: 'AngularjsTilesCtrl',
      controllerAs: 'angularjstiles'
    });
  }]);
