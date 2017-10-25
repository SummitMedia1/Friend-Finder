
var path = require('path');
var bodyParser = require('body-parser');

// Import the list of friend entries
var friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {
	// console.log('___ENTER apiRoutes.js___');

	// Total list of friend entries
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Add new friend entry
	app.post('/api/friends', bodyParser.json(),function(req, res) {
		// Capture the user input object

				var bestMatch = {
					name: "",
					image: "",
					matchDifference: 1000
				};
				var userData 	= req.body;
				var userName 	= userData.name;
				var userImage 	= userData.image;
				var userScores 	= userData.scores;
				var diff = 0;

		console.log(req.body);
		// console.log(JSON.stringify(userData));

		// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
			console.log('friend = ' + JSON.stringify(friends[i]));
			diff = 0;
			// Compute differenes for each question

			for (var j = 0; j < userScores.length; j++) {
				diff += Math.abs(parseInt(userScores[j]) - (parseInt(friends[i].scores[j])));
			}
			console.log('The difference is ' + diff);
			// If lowest difference, record the friend match
			if (diff < bestMatch.matchDifference) {

				bestMatch.matchDifference = diff;
				bestMatch.name = friends[i].name;
				bestMatch.image = friends[i].image;
			}
		}

		// Add new user
		friends.push(userData);

		// Send appropriate response
		res.status(200).json(bestMatch);
	});
};
