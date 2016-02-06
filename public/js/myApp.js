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
.config(function(){
  //config
})
.run(function(){
  //intialize
});

// myApp.controller('myController', ['$scope', function($scope){
//   $scope.myFirstName = "Micah";
//   $scope.myModel = "Ready Player";
// }]);

// myApp.controller('myController', ['$scope', 'MicahService', 'NickService',function($scope, MicahService, NickService){
// }]);