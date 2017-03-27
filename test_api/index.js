var express = require('express');
var app = express();
var port = process.env.PORT || 8081;

app.get('/blockchainType', function(req, res) {
  res.json({'blockchainType': 'Test Blockchain'});
});

app.get('/defaultAddress', function(req, res) {
  res.json({'defaultAddress': '0xaaaaaa'});
});

app.get('/cashBalance', function(req, res) {
  res.json({'cashBalance': 10000});
});

app.get('/organisationName', function(req, res) {
  res.json({'organisationName': 'Test Organisation'});
});

console.log('listening on port ' + port);
app.listen(port);
