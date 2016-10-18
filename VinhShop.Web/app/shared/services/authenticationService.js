(function (app) {
    'use strict';
    app.service('authenticationService', ['$http', '$q', '$window', 'authData', 'localStorageService',
        function ($http, $q, $window, authData, localStorageService) {
            var tokenInfo;

            this.setTokenInfo = function(data){
                tokenInfo = data;
                localStorageService.set('TokenInfo', { token: data.accessToken, userName: data.userName });
                //$window.localStorage["TokenInfo"] = JSON.stringify(tokenInfo);
            }
            this.getTokenInfo = function(){
                return tokenInfo;
            }
            this.removeToken = function () {
                tokenInfo = null;
                localStorageService.remove('TokenInfo');
                //$window.localStorage["TokenInfo"] = null;
                //$window.localStorage.clear();
            }
            this.init = function () {
                var tokenInfo = localStorageService.get('TokenInfo');
                if (tokenInfo) {
                    authData.authenticationData.IsAuthenticated = true;
                    authData.authenticationData.userName = tokenInfo.userName;
                } else {
                    this.removeToken();
                    authData.authenticationData.IsAuthenticated = false;
                    authData.authenticationData.userName = "";
                }
                //if ($window.localStorage["TokenInfo"]) {
                //    tokenInfo = JSON.parse($window.localStorage["TokenInfo"]);
                //    if (tokenInfo != null) {
                //        authData.authenticationData.IsAuthenticated = true;
                //        authData.authenticationData.userName = tokenInfo.userName;
                //    }
                //}
            }
            this.setHeader = function () {
                delete $http.defaults.headers.common['X-Requested-With'];
                if ((tokenInfo != undefined) && (tokenInfo.accessToken != undefined) && (tokenInfo.accessToken != null) && (tokenInfo.accessToken != "")) {
                    $http.defaults.headers.common['Authorization'] = 'Bearer ' + tokenInfo.accessToken;
                    $http.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
                }
            }

        }
    ])
})(angular.module('vinhshop.common'));