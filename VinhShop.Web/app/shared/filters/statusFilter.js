﻿/// <reference path="E:\MyProject\VinhShop.Web\Assets/admin/libs/angular/angular.js" />
(function (app) {
    app.filter('statusFilter', function () {
        return function (input) {
            if (input == true) {
                return 'Kích hoạt';
            } else {
                return 'Khóa';
            }
        }
    })
})(angular.module('vinhshop.common'));