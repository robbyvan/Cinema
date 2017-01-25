//required models
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

//middleware
app.use(bodyParser.json());

//database connection
mongoose.connect("mongodb://localhost/cinema");
var db = mongoose.connection;

//homepage
app.get('/', function(req, res){
  res.send("hello world!");
});

app.listen(3000);
console.log("Server running on port 3000...");