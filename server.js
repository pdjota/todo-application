var express = require('express');
var app = express();

app.get('/', function(req, res){
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log('Listening...');