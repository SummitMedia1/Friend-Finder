// This page will route all data and establish all required node modules
//-----------------------------------------------------------------------------

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");


//-- sets up the express app and port location
var app = express();
var PORT = 3000;

//-- establishes bodyParser will parse all data entry
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/html'}));

//-- establishes the routes data will take - all files talk to eachother.

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//-- Listening statement

app.listen(PORT, function(){
  console.log("The app is listening on port "+ PORT);
});
