var mongoose = require('mongoose');

//Movie Schema
//name and description are required.
var movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  director: {
    type: String
  },
  stars: {
    type: String
  },
  genre: {
    type: String,
  },
  releaseYear: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  rate: {
    type: String
  },
  duration: {
    type: String
  },
  poster_url: {
    type: String
  },
  imdb_url: {
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;

//default displays
var ironMan = new Movie({
  name: "Iron Man",
  genre: "Action",
  releaseYear: "2008",
  stars: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
  director: "Jon Favreau",
  description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
  rate: "7.9/10",
  duration: "2h 6min",
  poster_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  imdb_url: "http://www.imdb.com/title/tt0371746/?ref_=nv_sr_1"
});
var spiritedAway = new Movie({
  name: "Spirited Away",
  genre: "Animation",
  releaseYear: "2001",
  stars: " Daveigh Chase, Suzanne Pleshette, Miyu Irino",
  director: "Hayao Miyazaki",
  description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
  rate: "8.6/10",
  duration: "2h 5min",
  poster_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BNmU5OTQ0OWQtOTY0OS00Yjg4LWE1NDYtNDRhYWMxYWY4OTMwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR3,0,182,268_AL_.jpg",
  imdb_url: "http://www.imdb.com/title/tt0245429/?ref_=nv_sr_1"
});

/* 

//If you are running this app for the first time, plese uncomment the following code to initialize your database.

ironMan.save(function(err, ironMan){
  if(err){
    return console.error(err);
  }
  console.dir(ironMan);
});
spiritedAway.save(function(err, spiritedAway){
  if(err){
    return console.error(err);
  }
  console.dir(spiritedAway);
});

*/

//Movie Requests

//GET: get [limit] movies
module.exports.getMovies = function(callback, limit){
  Movie.find(callback).limit(limit);
}

//GET: get a certain movie by its _id
module.exports.getMovieById = function(id, callback){
  Movie.findById(id, callback);
}

//POST: add a new movie
module.exports.addMovie = function(movie, callback){
  Movie.create(movie, callback);
}

//PUT: update a movie
module.exports.updateMovie = function(id, movie, options, callback){
  var query = {_id: id};
  var update = {
    name: movie.name,
    genre: movie.genre,
    releaseYear: movie.releaseYear,
    stars: movie.stars,
    director: movie.director,
    description: movie.description,
    rate: movie.rate,
    duration: movie.duration,
    poster_url: movie.poster_url,
    imdb_url: movie.imdb_url,
  };
  Movie.findOneAndUpdate(query, update, options, callback);
}

//DELETE: delete a movie
module.exports.removeMovie = function(id, callback){
  var query = {_id: id};
  Movie.remove(query, callback);
}