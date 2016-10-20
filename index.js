var express = require('express');

var app = express();
var port = 5454;
app.use('/', express.static(__dirname + '/'));

app.listen(port, function () {
    console.log("Started listening on localhost:" + port)
});