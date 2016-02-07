//SHORT HAND
// angular.module('myApp', [])
// .config(function(){
//   //config
// })
// .run(function(){
//   //intialize
// });

//Defining a module called "myApp" can differentiate becuase it has more than one argument
angular.module('myApp', []);

//Retrieval has only one argument
var myApp = angular.module('myApp');

myApp
.config(['MoviesProvider', function(MoviesProvider){
  //config
  MoviesProvider.setEndpoint('http://localhost:8888/api/movies');
}])
.run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION){
  //intialize
  $rootScope.APP_VERSION = APP_VERSION;
}]);

// myApp.controller('myController', ['$scope', function($scope){
//   $scope.myFirstName = "Micah";
//   $scope.myModel = "Ready Player";
// }]);

// myApp.controller('myController', ['$scope', 'MicahService', 'NickService',function($scope, MicahService, NickService){
// }]);