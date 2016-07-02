/// <reference path="E:\MyProject\VinhShop.Web\Assets/admin/libs/angular/angular.js" />
(function (app) {
    app.controller('productCategoryEditController', productCategoryEditController);

    productCategoryEditController.$inject = ['apiService', '$scope', 'notificationService', '$state', '$stateParams'];
    function productCategoryEditController(apiService, $scope, notificationService, $state, $stateParams) {
        $scope.productCategory = {
            CreateDate: new Date(),
            Status: true,
            
        }

        function loadProductCategoryDetail() {
            apiService.get('api/productcategory/getbyId/' + $stateParams.id, null, function (result) {
                $scope.productCategory = result.data;
            }, function (error) {
                notificationService.displayError(error.data);
            })
        }

        $scope.UpdateProductCategory = UpdateProductCategory;
        function UpdateProductCategory() {
            apiService.put('api/productcategory/update', $scope.productCategory,
                function (result) {
                    notificationService.displaySuccess(result.data.Name + ' đã được cập nhật.');
                    $state.go('productCategories');
                }, function (error) {
                    notificationService.displayError('cập nhật không thành công.');
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
        loadProductCategoryDetail();
    }
})(angular.module('vinhshop.productCategories'));