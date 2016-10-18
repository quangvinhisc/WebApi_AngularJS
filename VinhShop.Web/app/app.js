(function () {
    var myapp =  angular.module('vinhshop',
        ['vinhshop.products',
         'vinhshop.productCategories',
         'vinhshop.common']);
    myapp.config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('base', {
                url: '',
                templateUrl: '/app/shared/views/baseView.html',
                abstract: true
            })
            .state('login', {
                url: "/login",
                templateUrl: "/app/components/login/loginView.html",
                controller: "loginController"
            })
            .state('home', {
                url: "/admin",
                parent: 'base',
                templateUrl: "/app/components/home/homeView.html",
                controller: "homeController"
            });
        $urlRouterProvider.otherwise('/login');
    }
    
    myapp.config(configAuthentication);
    function configAuthentication($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    }
    myapp.run(['authenticationService', function (authenticationService) {
        authenticationService.init();
    }]);
})();