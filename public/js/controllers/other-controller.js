
"use strict";

angular.module('myApp')
.controller('otherController', ['$scope', 'mainCharacter', 'CharacterVersionFactory', function($scope, mainCharacter, CharacterVersionFactory){
  $scope.myFirstName = "Micah";
  $scope.myModel = "Ready Player One";
  $scope.mainCharacter = mainCharacter;
  $scope.characterVersion = CharacterVersionFactory;

}]);