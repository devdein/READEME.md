var express = require('express');

var app = express();

app.get("/", function(req, res){
    res.send("Welcome To Dev Einpunk Server");
});

app.listen(8000, function () {
    console.log("Dev Einpunk Server Listening On port 8000...");
});