'use strict';

angular.module('Lib_dev')
.constant('JS_REQUIRES', {
    // Load Scripts here
    scripts : {
        "HomeCtrl": "modules/main/controller/homeCtrl.js",
        "HomeSrvc": "modules/main/service/homeSrvc.js"
    }
});
