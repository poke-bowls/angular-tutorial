
"use strict";

angular.module('myApp')
.controller('myController', ['$scope', 'mainCharacter', function($scope, mainCharacter){
  $scope.myFirstName = "Micah";
  $scope.myModel = "Ready Player One";
  $scope.mainCharacter = mainCharacter;
}]);