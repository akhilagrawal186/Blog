'use strict';

angular.module('Lib_dev')
.config(function ($stateProvider, $urlRouterProvider, JS_REQUIRES){

    function loadSequence() {
        var _args = arguments;
        return {
            deps: ['$ocLazyLoad', '$q', function ($ocLL, $q) {
                var promise = $q.when(1);
                function requiredData(name) {
                    if (JS_REQUIRES.modules){
                        for (var m in JS_REQUIRES.modules){
                            if (JS_REQUIRES.modules[m].name && JS_REQUIRES.modules[m].name === name){
                                return JS_REQUIRES.modules[m];
                            }
                        }
                    }
                    return JS_REQUIRES.scripts && JS_REQUIRES.scripts[name];
                }
                function promiseThen(_arg) {
                    if (typeof _arg === 'function'){
                        return promise.then(_arg);
                    }
                    else{
                        return promise.then(function () {
                            var nowLoad = requiredData(_arg);
                            if (!nowLoad){
                                return $q.error('Route resolve: Bad resource name [' + _arg + ']');
                            }
                            return $ocLL.load(nowLoad);
                        });
                    }
                }
                for (var i = 0, len = _args.length; i < len; i++) {
                    promise = promiseThen(_args[i]);
                }
                return promise;
            }]
        };
    }

    $urlRouterProvider.otherwise('home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'modules/main/view/home.html',
            resolve: loadSequence('HomeCtrl', 'HomeSrvc'),
            controller: 'HomeCtrl',
            controllerAs: 'home'
        });

});
