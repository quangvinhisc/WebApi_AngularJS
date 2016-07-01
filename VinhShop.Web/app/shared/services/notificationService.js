/// <reference path="E:\MyProject\VinhShop.Web\Assets/admin/libs/angular/angular.js" />
(function (app) {
    app.factory('notificationService', notificationService);
    function notificationService() {
        toastr.option = {
            "debug": false,
            "positionClass": "toast-top-right",
            "onclick": null,
            "fadeIn": 300,
            "fadeOut": 1000,
            "timeOut": 30,
            "extendedTimeOut": 60
        };
        function displaySuccess(message) {
            toastr.success(message);
        }
        function displayError(error) {
            if (Array.isArray(error)) {
                error.each(function (err) {
                    toastr.error(err);
                });
            }
            else {
                toastr.error(error);
            }
        }
        function displayWarning(message) {
            toastr.warning(message);
        }
        function displayInfo(message) {
            toastr.info(message);
        }
        return {
            displaySuccess: displaySuccess,
            displayError: displayError,
            displayWarning: displayWarning,
            displayInfo: displayInfo
        }
    }
})(angular.module('vinhshop.common'));