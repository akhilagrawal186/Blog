'use strict';

/**
 * @ngdoc function
 * @name driveAppApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the driveAppApp
 */
angular.module('Lib_dev')
  .controller('HomeCtrl', function (LoginSrvc) {
    var vm = this,
    baseUrl = "http://52.91.160.34:9001/bdprs/api/",
    // endpoint = "instancelist/v1",
    serviceProvider = "bsft-connect",
    groupId = "mPortal inc";


    // HuntgroupService.config(baseUrl,serviceProvider, groupId);
    // function getInst() {
    //     // var defer = $q.defer();
    //
    //     // defer.resolve();
    //     // defer.promise;
    //     var promise = HuntgroupService.getAllInstants();
    //
    //     promise.then(function(response) {
    //         console.log(response.data);
    //     });
    // }
    // getInst();

    vm.msg = 'TO DO MAIN PAGE';

    console.log('this is home page');
  });
