(function () {
    angular.module('vinhshop',
        ['vinhshop.products',
         'vinhshop.productCategories',
         'vinhshop.common'])
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider.state('home', {
            url: "/admin",
            templateUrl: "/app/components/home/homeView.html",
            controller: "homeController"
        });
        $urlRouterProvider.otherwise('/admin');
        $locationProvider.html5Mode(true);
    }
})();