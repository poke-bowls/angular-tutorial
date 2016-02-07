
"use strict";

angular.module('myApp')
.controller('myController', ['$scope', 'mainCharacter', 'CharacterVersionFactory', 'BookService', 'Movies', function($scope, mainCharacter, CharacterVersionFactory, BookService, Movies){
  $scope.myFirstName = "Micah";
  $scope.myModel = "Ready Player One";
  $scope.mainCharacter = mainCharacter;
  $scope.characterVersion = CharacterVersionFactory;
  $scope.BookService = BookService;

  $scope.movies = [];
  Movies.getMovies().success(function(movies){
    $scope.movies = movies;
  });

}]);