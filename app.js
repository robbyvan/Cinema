//required models
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

//middleware
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

app.listen(3000);
console.log("Server running on port 3000...");