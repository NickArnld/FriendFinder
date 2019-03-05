var express = require('express');
const path = require('path');

module.exports = (function() {
    var html = express.Router();

    html.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    html.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    return html;
})();