var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider.when('/', {
    controller: 'MovieController',
    templateUrl: 'views/movies.html'
  })
  .when('/movies', {
    controller: 'MovieController',
    templateUrl: 'views/movies.html'
  })
  .when('/movies/details/:id', {
    controller: 'MovieController',
    templateUrl: 'views/movie_detail.html'
  })
  .when('/movies/add', {
    controller: 'MovieController',
    templateUrl: 'views/add_movie.html'
  })
  .when('/movies/edit/:id', {
    controller: 'MovieController',
    templateUrl: 'views/edit_movie.html'
  })
  .otherwise({
    redirectTo: '/'
  });

});
