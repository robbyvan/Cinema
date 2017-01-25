//required models
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

//middleware
app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());

Movie = require('./models/movies.js');

//database connection
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log('Connectted to Cinema database.');
});

mongoose.connect("mongodb://localhost/cinema");

//homepage
app.get('/', function(req, res){
  res.send("hello world!");
});

//movie requests
//GET: get all movies
app.get('/api/movies', function(req, res){
  Movie.getMovies(function(err, movies){
    if(err){
      throw err;
    }
    res.json(movies);
  });
});

//GET: get movie by id
app.get('/api/movies/:_id', function(req, res){
  Movie.getMovieById(req.params._id, function(err, movie){
    if (err){
      throw err;
    }
    res.json(movie);
  });
});

//POST: add a new movie
app.post('/api/movies', function(req, res){
  var movie = req.body;
  Movie.addMovie(movie, function(err, movie){
    if(err){
      throw err;
    }
    res.json(movie);
  });
});

//PUT: update a movie
app.put('/api/movies/:_id', function(req, res){
  var id = req.params._id;
  var movie = req.body;
  Movie.updateMovie(id, movie, {}, function(err, movie){
    if (err){
      throw err;
    }
    res.json(movie);
  });
});

//DELETE: remove a movie
app.delete('/api/movies/:_id', function(req, res){
  var id = req.params._id;
  Movie.removeMovie(id, function(err, movie){
    if (err){
      throw err;
    }
    res.json(movie);
  });
});

app.listen(3000);
console.log("Server running on port 3000...");