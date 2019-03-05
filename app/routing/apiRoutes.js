var express = require('express');
const path = require('path');

module.exports = function() {
    var api = express.Router();

    api.get('/api/friends', function(req, res) {
        
    });

    api.post('/api/friends', function(req, res){
        console.log(req.body);
    });

    return api;
};