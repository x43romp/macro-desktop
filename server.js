var express = require('express');
var robot = require('robotjs');


var app = express();

app.listen(3000, serverListen);
app.get('/', getHome);


function serverListen() {
    console.log("app: start success - port 3000");
}

function getHome(req, res) {
    res.send("Hello World!");
}
