/// <reference path="E:\MyProject\VinhShop.Web\Assets/admin/libs/angular/angular.js" />
(function (app) {
    app.controller('homeController', homeController);
    homeController.$inject = ['$scope', '$state', 'authData', 'loginService', 'authenticationService', '$window'];
    function homeController($scope, $state, authData, loginService, authenticationService, $window) {
        //if ($window.localStorage["TokenInfo"]) {
        //    tokenInfo = JSON.parse($window.localStorage["TokenInfo"]);
        //    if (tokenInfo != null) {
        //        authData.authenticationData.IsAuthenticated = true;
        //        authData.authenticationData.userName = tokenInfo.userName;
        //    }
        //} else {
        //    loginService.logOut();
        //    $state.go('login');
        //}
        //$scope.authentication = authData.authenticationData;
        //authenticationService.validateRequest();
    }
})(angular.module('vinhshop'));