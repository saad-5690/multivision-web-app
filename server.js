// Include dependencies
var express = require("express");
// Set the environment variable
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// Initiate the application
var app = express();

// Set app configurations
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

// Set a general route for all requests
app.get('/', function(req, res){
    res.render('index');
});

// Listening Server
var port = 8080;
app.listen(port);
console.log("Listening on port:" + port + "...");