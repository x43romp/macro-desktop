var express = require('express');
var robot = require('robotjs');
var test = require('./test');

var app = express();

app.listen(4300, serverListen);
app.get('/', getHome);
app.get('/test/:id', function(req, res){
   var id = req.params.id;
});
app.get('/tap/:id', function(req, res){
    robot.keyTap(req.params.id);
    res.send(req.params.id);
});


function serverListen() {
    console.log("app: start success - port 3000");
    // console.log(te.sayHelloEng());
}

function getHome(req, res) {
    res.send("Hello World!");
    robot.keyTap("audio_mute");
    console.log("get /");
}
