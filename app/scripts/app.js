'use strict';

/**
 * @ngdoc overview
 * @name driveAppApp
 * @description
 * # driveAppApp
 *
 * Main module of the application.
 */
angular.module('driveAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'oc.lazyLoad',
    'ngMaterial',
    'ngStorage'
  ])
  .run(function($sessionStorage) {
      $sessionStorage.isAuthenticated = false;
      $sessionStorage.userName = '';
  });
