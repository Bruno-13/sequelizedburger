// import the ORM
var orm = require('../config/orm.js');

// create the burger object
var burger = {
  // zelect all burger table entries
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  // the variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(res) {
      cb(res);
    });
  },

  // specifying columns as object keys with associated values
  updateOne: function(newSetting, condition, cb) {
    orm.updateOne('burgers', newSetting, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;