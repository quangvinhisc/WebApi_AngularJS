/// <reference path="E:\MyProject\VinhShop.Web\Assets/admin/libs/angular/angular.js" />
(function () {
    angular.module("vinhshop.products", ['vinhshop.common']).config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('products', {
                url: "/products/",
                parent: 'base',
                templateUrl: "/app/components/products/productListView.html",
                controller: "productListController"
            })
            .state('productAdd', {
                url: "/productAdd/",
                parent: 'base',
                templateUrl: "/app/components/products/productAddView.html",
                controller: "productAddController"
            })
            .state('productEdit', {
                url: "/productEdit/:id",
                parent: 'base',
                templateUrl: "/app/components/products/productEditView.html",
                controller: "productEditController"
            })

    }
})();