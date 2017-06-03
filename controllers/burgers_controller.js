var express = require('express');
var burger = require('../models/burger');

var router = express.Router();

// root route
router.get('/', function(req, res) {
    // call model function to get all burgers
    burger.selectAll(function(data) {
        // create object for handlebars
        var hbsObj = {
            title: 'Eat-Da-Burger!',
            burgers: data
        };
        // render page
        res.render('index', hbsObj);
    });
});

// add a burger route
router.post('/', function(req, res) {
    // call the model function to add a new burger
    burger.insertOne(req.body.burger, function(data) {
        // redirect to root
        res.redirect('/');
    });
});

// update a burger route
router.put('/:id', function(req, res) {
    // create update string to update devoured to true
    var newSetting = 'devoured = true';
    var condition = 'id = ' + req.params.id;
    // call model function to update a burger
    burger.updateOne(newSetting, condition, function(data) {
        // redirect to root
        res.redirect('/');
    });
});

module.exports = router;