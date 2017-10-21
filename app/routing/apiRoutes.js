//-- this JSON gets and posts friend data and then compares the data to other user responses.

var friendFinder = require('../data/friends.js');
var path = require('path');
var express = require('express');
var app = express();
var friendCompare = 0;

//-- API gets data from Friends.js

module.exports = function(app){
  app.get('../data/friends.js', function(req, res){
    res.json(friends);

});

// -- API posts data from Friends.js

  app.post('../data/friends.js', function(req, res){

    var match = {
          name: '',
          image: '',
          matchMatch: 1000
        };

        var userBodyEntry = req.body;
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

        if (friendCompare <= match.friendDifference){
          match.name = friends[i].name;
          match.image = friends[i].image;
          match.matchMatch = friendCompare;
        }
      }
    }
          friends.push(userBodyEntry);
          res.json(match);


      });
    };
