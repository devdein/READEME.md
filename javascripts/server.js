var express = require('express');

var server = express();
server.use(express.static(__dirname + '/public'));

var port = 10001;
server.listen(port, function() {
    console.log('Dev Einpunk Server Listening On port ' + port);
});