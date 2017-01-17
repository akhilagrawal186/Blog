'use strict';

/**
 * @ngdoc function
 * @name practiceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the practiceApp
 */
angular.module('practiceApp')
  .controller('HomeCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log("Comming");
    $scope.abc = "akhil";
    $scope.tiles = [{
        'id':1,
        'title':'Feature',
        'description':'In March we gave you a first preview of the new Angular Material components Todays beta release of @angular/material includes',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016',
        'rating':4
    },{
        'id':2,
        'title':'Advantages',
        'description':'In March, we gave you a first preview of the new Angular Material components. Todays beta release of @angular/material includes',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016',
        'rating':4
    },{
        'id':3,
        'title':'Grunt',
        'description':'In March, we gave you a first preview of the new Angular Material components. Todays beta release of @angular/material includes',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016',
        'rating':4
    },{
        'id':4,
        'title':'Gulp',
        'description':'In March, we gave you a first preview of the new Angular Material components. Todays beta release of @angular/material includes',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016',
        'rating':4
    },{
        'id':5,
        'title':'Sass',
        'description':'In March, we gave you a first preview of the new Angular Material components. Todays beta release of @angular/material includesIn March, we gave you a first preview of the new Angular Material components. Todays beta release of @angular/material includes',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016',
        'rating':4
    },{
        'id':6,
        'title':'Scas',
        'description':'In March, we gave you a first preview of the new Angular Material components. Todays beta release of @angular/material includesIn March, we gave you a first preview of the new Angular Material components. Todays beta release of @angular/material includes',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016',
        'rating':4
    },{
        'id':1,
        'title':'Feature',
        'description':'In March, we gave you a first preview of the new Angular Material components. Todays beta release of @angular/material includes',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016',
        'rating':4
    },{
        'id':1,
        'title':'Feature',
        'description':'In March, we gave you a first preview of the new Angular Material components. Todays beta release of @angular/material includesIn March, we gave you a first preview of the new Angular Material components. Todays beta release of @angular/material includes',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016',
        'rating':4
    },{
        'id':1,
        'title':'Feature',
        'description':'In March, we gave you a first preview of the new Angular Material components. Todays beta release of @angular/material includesIn March, we gave you a first preview of the new Angular Material components. Todays beta release of @angular/material includes',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016',
        'rating':4
    },{
        'id':1,
        'title':'Feature',
        'description':'In March, we gave you a first preview of the new Angular Material components. Todays beta release of @angular/material includesIn March, we gave you a first preview of the new Angular Material components. Todays beta release of @angular/material includes',
        'brief':'gdshjgdshgfdshvhdvhjfhfdbvhjdfv',
        'date':'22-10-2016',
        'rating':4
    }];
  });
