var connection = require('./connection');

// create orm object
var orm = {
    selectAll: function(table, cb) {
        // create select all sql query
        var queryString = 'select * from ??';
        // run the query
        connection.query(queryString, [table], function(err, res) {
            if (err) throw err;
            // if no error, return the query result to the callback function
            cb(res);
        });
    },
    insertOne: function(table, burger, cb) {
        // create the sql query
        var queryString = 'insert into ' + table;
        queryString += ' (??) values (?);';
        // run the query
        connection.query(queryString, ['burger_name', burger], function(err, res) {
            if (err) throw err;
            // if no error, return the query result to the callback function
            cb(res);
        });
    },
    updateOne: function(table, newSetting, condition, cb) {
        // create the query string
        var queryString = 'update ' + table + ' set ' + newSetting + ' where ' + condition + ';';
        // run the query
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            // if no error, return the query result to the callback function
            cb(res);
        });
    }
};

module.exports = orm;