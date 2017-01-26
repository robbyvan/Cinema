var myApp = angular.module('myApp');

myApp.controller('MovieController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
  console.log("MovieController Loaded.");

  $scope.getMovies = function(){
    $http.get('/api/movies').then(function(response){
      $scope.movies = response.data;
    });
  }

  $scope.getMovie = function(){
    var id = $routeParams.id;
    $http.get('/api/movies/' + id).then(function(response){
      $scope.movie = response.data;
    });
  }

  $scope.addMovie = function(){
    $http.post('/api/movies/', $scope.movie).then(function(response){
      window.location.href = "#!/movies";
    });
  }

  $scope.updateMovie = function(){
    var id = $routeParams.id;
    $http.put('/api/movies/' + id, $scope.movie).then(function(response){
      window.location.href = "#!/movies";
    });
  }

  $scope.removeMovie = function(){
    var ask = confirm('Are you suere you want to delete this page?');
    if (ask){
      var id = $routeParams.id;
      $http.delete('/api/movies/' + id, $scope.movie).then(function(response){
        window.location.href = "#!/movies";
      });
    }
  }

}]);

