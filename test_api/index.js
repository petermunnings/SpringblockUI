var express = require('express');
var app = express();
var port = process.env.PORT || 8081;

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/getConfig', function(req, res) {
  res.json({
		blockchainType: 'Test Blockchain',
		defaultAddress: '0xaaaaaa',
		cashBalance: 10000,
		organisationName: 'Test Organisation'
	});
});

console.log('listening on port ' + port);
app.listen(port);
