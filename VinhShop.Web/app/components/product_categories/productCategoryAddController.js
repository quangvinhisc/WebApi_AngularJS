/// <reference path="E:\MyProject\VinhShop.Web\Assets/admin/libs/angular/angular.js" />
(function (app) {
    app.controller('productCategoryAddController', productCategoryAddController);
    
    productCategoryAddController.$inject = ['apiService', '$scope', 'notificationService', '$state'];
    function productCategoryAddController(apiService, $scope, notificationService, $state) {
        $scope.productCategory = {
            CreateDate: new Date(),
            Status: true,
            Name: ""
        }

        $scope.AddProductCategory = AddProductCategory;
        function AddProductCategory() {
            apiService.post('api/productcategory/create', $scope.productCategory,
                function (result) {
                    notificationService.displaySuccess(result.data.Name + ' đã được thêm mới');
                    $state.go('productCategories');
                }, function (error) {
                    notificationService.displayError('Thêm mới không thành công.');
                })
        }

        function loadParentCategory() {
            apiService.get('api/productcategory/getallparents', null, function (result) {
                $scope.parentCategories = result.data;
            }, function () {
                console.log('cannot get list parent');
            })
        }
        loadParentCategory();
    }
})(angular.module('vinhshop.productCategories'));