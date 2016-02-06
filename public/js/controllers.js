
"use strict";

angular.module('myApp')
.controller('myController', ['$scope', 'mainCharacter', 'CharacterVersionFactory', function($scope, mainCharacter, characterVersion){
  $scope.myFirstName = "Micah";
  $scope.myModel = "Ready Player One";
  $scope.mainCharacter = mainCharacter;
  $scope.characterVersion = characterVersion;
}]);
