var express = require("express");

//setup port
var PORT = process.env.PORT || 3000;

//initiate Express app
var app = express();

//Express Router
var router = express.Router();

app.use(express.static(_dirname + "/public"));

app.use(router);


//listen on port
app.listen(PORT, () => {
    console.log('App running on port ' + PORT + '!');
});