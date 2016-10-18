(function(app){
    app.controller('rootController', rootController);
    rootController.$inject = ['$scope', '$state', 'authData', 'loginService', 'authenticationService', '$window', '$templateCache', 'apiService', '$http'];
    function rootController($scope, $state, authData, loginService, authenticationService, $window, $templateCache, apiService, $http) {
        $scope.logOut = function () {
            loginService.logOut();
            
            
            //$templateCache.remove();
            location.reload();
            //$state.go('login');
        }
        $scope.authentication = authData.authenticationData;
        //authenticationService.validateRequest();
    }
})(angular.module('vinhshop'));