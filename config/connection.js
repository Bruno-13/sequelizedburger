// require mysql
var mysql = require("mysql");

// set up the connection
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "W!nch3st3r", //insert your mysql password
  database: "burgers_db"
});

// connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// export connection
module.exports = connection;