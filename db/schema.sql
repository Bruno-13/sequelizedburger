CREATE DATABASE burgers_db;

USE burgers_db;


-- Table Creation
CREATE TABLE burgers(
id INTEGER AUTO_INCREMENT,
burger_name VARCHAR(100),
devoured BOOLEAN,
date TIMESTAMP,
PRIMARY KEY (id)
);