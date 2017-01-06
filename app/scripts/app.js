'use strict';

/**
 * @ngdoc overview
 * @name blogWorkApp
 * @description
 * # blogWorkApp
 *
 * Main module of the application.
 */
var app=angular
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
app.controller("deshBoardCtrl",function(){
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

// Initialize Share-Buttons
$.contactButtons({
  effect  : 'slide-on-scroll',
  buttons : {
    'facebook':   { class: 'facebook', use: true, link: 'https://www.facebook.com/akhilagrawal014', extras: 'target="_blank"' },
    'linkedin':   { class: 'linkedin', use: true, link: 'https://www.linkedin.com/in/akhil-agrawal-7912a85b?trk=nav_responsive_tab_profile',extras: 'target="_blank"' },
    'google':     { class: 'gplus',    use: true, link: 'https://plus.google.com/u/0/' ,extras: 'target="_blank"'},
    'twitter':    { class: 'twitt'  ,use :true,link:'https://twitter.com/AkhilAgrawal18',extras: 'target="_blank"'},
    'phone':      { class: 'phone separated',    use: true, link: '+000' },
    'email':      { class: 'email',    use: true, link: 'akhilmangal186@gmail.com' }
  }
});
});