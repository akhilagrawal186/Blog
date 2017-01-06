'use strict';
angular.module('blogWorkApp').controller('ContactCtrl', function ($scope) {
    //--- Initialize the Form Fields
     $scope.contactForm = {
         'name':'',
         'email':'',
         'subject':'',
         'message':''
     };
     //---Click On Send Button For Contact Request
    $scope.contactRequest = function (data) {
        console.log(data);
    };
});
