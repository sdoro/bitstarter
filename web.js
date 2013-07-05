var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(16);
buffer.realFileSync("index.html");

app.get('/', function(request, response) {
    responde.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
