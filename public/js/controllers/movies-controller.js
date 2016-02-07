
"use strict";

angular.module('myApp')
.controller('MoviesController', ['$scope', 'Movies', function($scope, MovieService){
  $scope.movies = [];
  MovieService.getMovies().success(function(movies){
    $scope.movies = movies;
  });
}]);