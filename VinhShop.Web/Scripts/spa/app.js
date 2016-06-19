/// <reference path="../plugins/angular/angular.js" />
var App = angular.module("myModule", []);
App.controller("SchoolController", SchoolController);
App.service("Validation", Validation);
SchoolController.$inject = ["$scope", "Validation"];
function SchoolController($scope, Validation) {
    $scope.CheckNo = function () {
        $scope.message = Validation.CheckNumber($scope.num);
    }
}

function Validation($window) {
    return {
        CheckNumber: CheckNumber
    }
    function CheckNumber(input) {
        if (input % 2 == 0) {
            $window.alert("số chẵn");
        }
        else {
            $window.alert("số lẻ");
        }
    }
}