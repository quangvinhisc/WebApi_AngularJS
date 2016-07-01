/// <reference path="E:\MyProject\VinhShop.Web\Assets/admin/libs/angular/angular.js" />
(function () {
    angular.module('vinhshop.productCategories', ['vinhshop.common']).config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        //$stateProvider.html5Mode(true);
        $stateProvider.state('productCategories', {
            url: "/productCategories/",
            templateUrl: "/app/components/product_categories/productCategoryListView.html",
            controller: "productCategoryListController"
        }).state('addProductCategory', {
            url: "/addProductCategory/",
            templateUrl: "/app/components/product_categories/productCategoryAddView.html",
            controller: "productCategoryAddController"
        });
        //$locationProvider.html5Mode(true);
    }
})();