'use strict';

/**
 * @ngdoc function
 * @name practiceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the practiceApp
 */
angular.module('practiceApp')
  .controller('DashboardCtrl', function ($scope) {
    //   var ref = $firebaseObject.database().ref();
    //   $scope.name = $firebaseObject(ref);
    //   console.log($scope.name);
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.tiles = [{
        'id':1,
        'title':'Feature Technology',
        'description':'This is about The Feature',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016'
    },{
        'id':2,
        'title':'Advantages Of AngularJS',
        'description':'This is about The Advantages',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016'
    },{
        'id':3,
        'title':'Grunt Task Runner',
        'description':'This is about The Grunt',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016'
    },{
        'id':4,
        'title':'Gulp Task Runner',
        'description':'This is about The Gulp',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016'
    },{
        'id':5,
        'title':'Sass Technology',
        'description':'This is about The Sass',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016'
    },{
        'id':6,
        'title':'Scas Technology',
        'description':'This is about The Scas',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016'
    },{
        'id':1,
        'title':'Feature Technology',
        'description':'This is about The Feature',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016'
    },{
        'id':1,
        'title':'Feature Technology',
        'description':'This is about The Feature',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016'
    },{
        'id':1,
        'title':'Feature Technology',
        'description':'This is about The Feature',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016'
    },{
        'id':1,
        'title':'Feature Technology',
        'description':'This is about The Feature',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016'
    }];
  });
