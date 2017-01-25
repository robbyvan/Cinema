var mongoose = require('mongoose');

//Movie Schema
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
    type: Number
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
  releaseYear: "2008",
  stars: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
  director: "Jon Favreau",
  description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
  rate: "7.9/10",
  duration: "2h 6min",
  poster_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  imdb_url: "http://www.imdb.com/title/tt0371746/?ref_=nv_sr_1"
});

ironMan.save(function(err, ironMan){
  if(err){
    return console.error(err);
  }
  console.dir(ironMan);
});