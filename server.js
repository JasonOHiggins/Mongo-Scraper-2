var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

//setup port
var PORT = process.env.PORT || 3000;

//initiate Express app
var app = express();

//Express Router
var router = express.Router();

//routes file passes router object
require("./config/routes")(router);

app.use(express.static(__dirname + "/public"));

//connect handlebars to express
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));

//bodyparser
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

//if deployed use deployed DB, otherwise use local DB
var db = process.env.MONGO_URI || "mongodb://localhost/mongoHeadlines";

//connect mongoose to DB
mongoose.connect(db, function(error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("mongoose connection is successful");
    }
});


//listen on port
app.listen(PORT, () => {
    console.log('App running on port ' + PORT + '!');
});