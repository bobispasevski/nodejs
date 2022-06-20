var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('This is the homepage')
});

app.get('/contact', function(req, res){
    res.send('This is thecontact page')
});

app.get('/profile/:name', function(req, res){
    res.send('You are viewing the profile of ' +  req.params.name);
});

app.listen(3000);