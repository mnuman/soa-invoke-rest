var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app.use(morgan('dev'));


app.post('/my-endpoint', jsonParser, (req, res) => {
  console.log('Logging some request data');
  console.log('=========================');
  console.log('Headers: ' + JSON.stringify(req.headers));
  console.log('URL    : ' + req.url);

  console.log('Payload: ' + JSON.stringify(req.body));

  var response = {}
//  res.status(201);
  res.send();
/* I was too lazy to code the response schema in SOA, so I removed the response object to
   prevent SOA Suite from failing the call ...
  
  response.status = 'OK';
  response.request = req.body;
  res.json(response);
*/
});

app.listen(port, function () {
  console.log('App listening on port ' + port);
});
