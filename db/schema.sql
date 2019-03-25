-- DROP the database if it exists
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(75) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);