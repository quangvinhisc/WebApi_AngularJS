(function (app) {
    'use strict';
    app.service('authInterceptorService', ['$q', '$injector', '$location', '$window', 'localStorageService', 'notificationService',
    function ($q, $injector, $location, $window, localStorageService, notificationService) {
        var authInterceptorServiceFactory = {};

        var _request = function (config) {

            config.headers = config.headers || {};
            var authData = localStorageService.get('TokenInfo');
            //var authData = $window.localStorage["TokenInfo"];
            if (authData) {
                config.headers.Authorization = 'Bearer ' + authData.token;
            }

            return config;
        }

        var _requestError = function (rejection) {
            return $q.reject(rejection);
        };

        var _responseError = function (rejection) {
            if (rejection.status === 401) {
                var authService = $injector.get('loginService');
                var authData = localStorageService.get('TokenInfo');
                //var authData = $window.localStorage["TokenInfo"];

                //if (authData) {
                //    if (authData.useRefreshTokens) {
                //        $location.path('/refresh');
                //        return $q.reject(rejection);
                //    }
                //}
                notificationService.displayWarning("your rule isn't allowed to access. please contact admin to be supported");
                authService.logOut();
                $location.path('/login');
            }
            return $q.reject(rejection);
        }

        authInterceptorServiceFactory.request = _request;
        authInterceptorServiceFactory.requestError = _requestError;
        authInterceptorServiceFactory.responseError = _responseError;
        return authInterceptorServiceFactory;
    }]);
})(angular.module('vinhshop.common'));