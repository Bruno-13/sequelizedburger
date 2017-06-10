var express = require('express');
var burger = require('../models/burger');
var models = require('../models');
var router = express.Router();
var sequelizeConnection = models.sequelize;

// root route
router.get('/', function (req, res) {
  res.redirect('/index');
});

// get all burgers
router.get('/burgers', function(req, res) {
    // call model function to get all burgers
    models.burger.findAll().then(function(data) {
        // create object for handlebars
        var hbsObj = {
            title: 'Burger-Da-Sequel!',
            burgers: data
        };
        // render page
        res.render('index', hbsObj);
    });
});

// add a burger route
router.post('/burgers/create', function(req, res) {
    // call the model function to add a new burger
    models.burger.create({
        name: req.body.burger, 
        devoured: false
    }).then(function(data) {
        // redirect to root
        res.redirect('/');
    });
});

// update a burger route
router.put('/burgers/devour/:id', function(req, res) {
    // create update string to update devoured to true
    models.burger.findById(req.params.id).then(function(data) {
        data.update({
            devoured: true
        }).then(function() {
            res.redirect("/");
    })
});

router.get('/burgers/deleteAll', function(req, res) {

        models.burger.destroy({truncate:true
        }).then(function(){
            res.redirect("/burgers")
        })
});

//route for delete
router.delete('/burgers/clear/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    models.burger.findById(req.params.id).then(function(data) {
        data.destroy().then(function(){
            res.redirect("/burgers");
        })
    })
});

module.exports = router;
})