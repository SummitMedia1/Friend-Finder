// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
// var PORT = 3000;
var PORT = process.env.PORT || 3000;

//-- establishes bodyParser will parse all data entry
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(bodyParser.text());
app.use(express.static(__dirname + '/app/public'));
//-- establishes the routes data will take - all files talk to eachother.

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//-- Listening statement

app.listen(PORT, function(){
  console.log("The app is listening on port " + PORT);
});
