'use strict';

/**
 * @ngdoc function
 * @name driveAppApp.controller:loginCtrl
 * @description
 * # loginCtrl
 * Controller of the driveAppApp
 */
function LoginCtrl(LoginSrvc,$sessionStorage,$state) {
    var vm = this, isAuthenticated;
    // $sessionStorage.isAuthenticated = false;

    vm.login = function() {
        var promise = LoginSrvc.loginAuth();
        promise.then(function(response) {
            isAuthenticated = response.isAuthenticate;

            if(isAuthenticated){
                $sessionStorage.isAuthenticated = true;
                $sessionStorage.userName = vm.username;
                $state.go('home', {
                    userId: vm.username
                });
            }

        });

        // alert('called');
    };
}
angular.module('driveAppApp').controller('LoginCtrl', LoginCtrl);
LoginCtrl.$inject = ['LoginSrvc', '$sessionStorage','$state','$scope'];
