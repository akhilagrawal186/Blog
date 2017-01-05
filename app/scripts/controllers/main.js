'use strict';

/**
 * @ngdoc function
 * @name blogWorkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blogWorkApp
 */
angular.module('blogWorkApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.tiles = [{
        'id': 1,
        'title': 'Angular2 Feature',
        'description': "To know this tutorial",
        'date': "12-1-2016"
    },{
        'id': 2,
        'title': 'Angular2 Advantages',
        'description': "To know this tutorial",
        'date': "12-1-2016"
    },{
        'id': 3,
        'title': 'Angular2 Architecture',
        'description': "To know this tutorial",
        'date': "12-1-2016"
    },{
        'id': 4,
        'title': 'Angular2 Components',
        'description': "To know this tutorial",
        'date': "12-1-2016"
    }];
  });
