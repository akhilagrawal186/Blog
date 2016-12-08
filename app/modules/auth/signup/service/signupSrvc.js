'use strict';

 function LoginSrvc($http) {
    var vm = this;

    vm.loginAuth = function(){
        return $http.get('data/authenticate.json')
        .then(function(data){
            return data.data;
        });
    };
 }
angular.module('driveAppApp').service('LoginSrvc',LoginSrvc);
LoginSrvc.$inject = ['$http'];
