/// <reference path="../plugins/angular/angular.js" />
var App = angular.module("myModule", []);
App.controller("myController", myController);
myController.$inject = ["$scope"];

function myController($scope) {
    $scope.message = "Example 1";
}