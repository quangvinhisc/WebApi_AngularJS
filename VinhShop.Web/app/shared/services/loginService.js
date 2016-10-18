(function (app) {
    'use strict';
    app.service('loginService',['$http', '$q', 'authenticationService', 'authData',
    function ($http, $q, authenticationService, authData) {
        var userInfo;
        var deferred;

        this.login = function (userName, password) {
            
            var data = "grant_type=password&username=" + userName + "&password=" + password;
            deferred = $q.defer();
            $http.post('/oauth/token', data, {
                headers:
                   { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function (response) {
                userInfo = {
                    accessToken: response.access_token,
                    userName: userName
                };
                authenticationService.setTokenInfo(userInfo);
                authData.authenticationData.IsAuthenticated = true;
                authData.authenticationData.userName = userName;
                deferred.resolve(response);
            })
            .error(function (err, status) {
                authenticationService.removeToken();
                authData.authenticationData.IsAuthenticated = false;
                authData.authenticationData.userName = "";
                deferred.resolve(err);
            });
            return deferred.promise;
        }

        this.logOut = function () {
            authenticationService.removeToken();
            authData.authenticationData.IsAuthenticated = false;
            authData.authenticationData.userName = "";
            //deferred = $q.defer();
            //$http.post('/api/account/logout', null).then(function (result) {
            //    if (result.data.success) {
            //        $state.go('login');
            //        deferred.resolve(response);
            //    }
            //}, function () {
            //    console.log('log out failed');
            //    deferred.resolve(null);
            //})
            //return deferred.promise;
        }
    }]);
})(angular.module('vinhshop.common'));