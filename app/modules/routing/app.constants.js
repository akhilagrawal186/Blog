'use strict';

angular.module('driveAppApp')
.constant('JS_REQUIRES', {
    // Load Scripts here
    scripts : {
        "LoginCtrl": "modules/auth/login/controller/loginCtrl.js",
        "LoginSrvc": "modules/auth/login/service/loginSrvc.js",
        "SignupCtrl": "modules/auth/signup/controller/signupCtrl.js",
        "SignupSrvc": "modules/auth/signup/service/signupSrvc.js",
        "HomeCtrl": "modules/main/controller/homeCtrl.js",
        "HomeSrvc": "modules/main/service/homeSrvc.js"
    }
});
