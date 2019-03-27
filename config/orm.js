// Import MySQL connection object
var connection = require("./connection");

// Helper function for MySQL syntax generation
function objectToSql(object) {
    var arr = [];
    for (var key in object) {
        arr.push(key + '=' + object[key]);
    }
    return arr.toString();
}

// Another Helper for MySQL syntax
function printQuestion(num) {
    var arr = [];
    for (var i=0; i<num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        console.log('selectAll TEST: ' + queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table + ` (${cols.toString()}) VALUES (`;
        queryString += printQuestion(vals.length);
        queryString += ") ;";
        console.log('insertOne TEST: ' + queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objectToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log('updateOne TEST: ' + queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;