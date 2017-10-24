//-- this JSON gets and posts friend data and then compares the data to other user responses.

var friends = require('../data/friends.js');
var path = require('path');
var express = require('express');
var app = express();
var friendCompare = 0;

//-- API gets data from Friends.js

module.exports = function(app){
  app.get('/api/friends', function(req, res){
    res.json(friends);

});

  app.post('/', function(req, res){

    var matchMe = {
          name: '',
          image: '',
          matchMaker: 1000
        };

        var userData = req.body;
        var userName = matchMe.name;
        var userImage = matchMe.image;
        var userScores = matchMe.scores;
        var friendCompare = 0;

      //-- Here's where we loop thru the userData to begin the comparison phase of the data.

      for (var i = 0; i < friends.length; i++){
        console.log(friends[i].name);
        friendCompare = 0;


      //-- Here's where the question data comparison is calculated.

      for (var j = 0; j < 11; j++){
        // friendCompare += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[i]));


friendCompare += Math.abs(parseInt(friends[i].scores[j]) - (parseInt(userData[j])));
        if (friendCompare <= matchMe.friendsDifference){
          matchMe.name = friends[i].name;
          matchMe.image = friends[i].image;
          matchMe.matchMaker = friendCompare;
        }
      }
    }
          friends.push(userData);
            console.log(userData);
          res.json(matchMe);
            console.log(matchMe);
            console.log(friendCompare);


      });
    };
