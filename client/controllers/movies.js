var myApp = angular.module('myApp');

myApp.controller('MovieController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
  console.log("MovieController Loaded.");

  $scope.getMovies = function(){
    $http.get('/api/movies').then(function(response){
      $scope.movies = response.data;
    });
  }

}]);

