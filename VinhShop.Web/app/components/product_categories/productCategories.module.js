/// <reference path="E:\MyProject\VinhShop.Web\Assets/admin/libs/angular/angular.js" />
(function () {
    var myapp = angular.module('vinhshop.productCategories', ['vinhshop.common']);
    myapp.config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
        .state('productCategories', {
            url: "/productCategories/",
            parent: 'base',
            templateUrl: "/app/components/product_categories/productCategoryListView.html",
            controller: "productCategoryListController"
        })
        .state('addProductCategory', {
            url: "/addProductCategory/",
            parent: 'base',
            templateUrl: "/app/components/product_categories/productCategoryAddView.html",
            controller: "productCategoryAddController"
        })
        .state('editProductCategory', {
            url: "/editProductCategory/:id",
            parent: 'base',
            templateUrl: "/app/components/product_categories/productCategoryEditView.html",
            controller: "productCategoryEditController"
        });
    }
    myapp.run(['authenticationService', function (authenticationService) {
        authenticationService.init();
    }]);
})();