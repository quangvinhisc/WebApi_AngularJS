/// <reference path="../plugins/angular/angular.js" />
var App = angular.module("myModule", []);
App.controller("StudentController", StudentController);
App.controller("TeacherController", TeacherController);
App.controller("SchoolController", SchoolController);

function SchoolController($scope)
{
    $scope.message = "Example 1 from school";
}

function StudentController($scope) {
    $scope.message = "Example 1 from Student";
    //$rootScope.message = "Example 1 from Student";
}
function TeacherController($scope) {
    $scope.message = "Example 1 from Teacher";
}