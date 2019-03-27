var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

var expbhs = require("express-handlebars");

app.engine("handlebars", expbhs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var routes = require("./controllers/burgers_controller");

app.use("/", routes);

app.listen(port, function() {
    console.log("Listening on PORT:  " + port);
});