// 'Get' route with url /api/friends. display JSON of all friends
// 'POST' routes /api/friends handle incoming survey result

// linking friends routes to a series of "data" sources.
var friends = require('../data/friends.js');
var path = require('path');

module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendsArray);
  });
  app.post('/', function (req, res) {
    // to compare the scores
    var matchMe = {
              name: '',
              image: '',
              matchMaker: 100
          };

    var userData = req.body;
    var userName = matchMe.name;
    var userImage = matchMe.image;
    var userScores = matchMe.scores;
    var scoresArray = [];
    var bestMatch = 0;
    var scoreDiff = 0;
    // for current friend
    for(var i = 0; i < friends.length; i++){

// compare the friend with existing friend
    for (var j = 0; j < 10; j++){
      scoreDiff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userData[j]));
      }
      // then add the json the user sent to the friendsData array
      scoresArray.push(scoreDiff);
    }
     // find best match after comparision  with all friends
    for (var i = 0; i < scoresArray.length; i++){
      if (scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }
    //return data
    var yourMatch = friends[bestMatch];
    res.json(yourMatch);
    friends.push(req.body);
});

};
