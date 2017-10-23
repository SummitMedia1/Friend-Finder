//-- this JSON gets and posts friend data and then compares the data to other user responses.

var friends = require('../data/friends.js');
var path = require('path');
var express = require('express');
var app = express();
var friendCompare = 0;

//-- API gets data from Friends.js

module.exports = function(app){
  app.get('../data/friends.js', function(req, res){
    res.json(friends);

});

  app.post('/', function(req, res){

    var matchMe = {
          name: '',
          image: '',
          matchMaker: 1000
        };

        var userData = req.body;
        var userName = userData.name;
        var userImage = userData.image;
        var userScores = userData.scores;
        var friendCompare = 0;

      //-- Here's where we loop thru the userData to begin the comparison phase of the data.

      for (var i = 0; i < [friends[i]].length -1; i++){
        console.log(friends[i].name);
        friendCompare = 0;


      //-- Here's where the question data comparison is calculated.

      for (var j = 0; j < 10; j++){
        friendCompare += Math.abs(parseInt(userScores[j]) - parseInt(friends[i]-scores[j]));

        if (friendCompare <= matchMe.friendsDifference){
          matchMe.name = friends[i].name;
          matchMe.image = friends[i].image;
          matchMe.matchMatch = friendCompare;
        }
      }
    }
          friends.push(userData);

          res.json(matchMe);


      });
    };
