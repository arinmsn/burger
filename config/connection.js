require("dotenv").config();
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Mespapisyoung.....mysql",
        database: "burgers_db"
    });
};

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting:  " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId + `\n http://localhost: 8080/`);
});

module.exports = connection;