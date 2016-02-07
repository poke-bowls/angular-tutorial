//SHORT HAND
// angular.module('myApp', [])
// .config(function(){
//   //config
// })
// .run(function(){
//   //intialize
// });

//Defining a module called "myApp" can differentiate becuase it has more than one argument
angular.module('myApp', ['ngRoute', 'ngAnimate']);

//Retrieval has only one argument
var myApp = angular.module('myApp');

myApp
.config(['MoviesProvider', '$routeProvider', '$locationProvider', function(MoviesProvider, $routeProvider, $locationProvider){
  //config
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  MoviesProvider.setEndpoint('http://localhost:8888/api/movies');
  $routeProvider
    .when('/', {
      templateUrl : 'views/default.html'
      })
    .when('/books', {
      templateUrl : 'views/books.html',
      controller : 'BooksController'
    })
    .when('/movies', {
      templateUrl : 'views/movies.html',
      controller : 'MoviesController'
    })
    .when('/other', {
      templateUrl : 'views/other.html',
      controller : 'otherController'
    });


}])
.run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION){
  //intialize
  $rootScope.APP_VERSION = APP_VERSION;
}]);