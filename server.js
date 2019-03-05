const express = require('express');
const path = require('path');
const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', htmlRoutes);

app.post('/api/friends', function(req, res){    
    var newUser = req.body;
    var newUserScores = newUser.scores;

    console.log("New User", newUser);

    //All Users are pulled from friends.js file
    //Then compared to the new users scores
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});