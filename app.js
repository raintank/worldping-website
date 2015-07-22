var express = require('express');
var nopt = require('nopt');
var path = require('path');
var bodyParser = require('body-parser');
var earlyaccess = require("./earlyaccess");


// default static path.
var staticPath = "build/dist";

var parsedOpts = nopt({"path": path}, {"p": ["--path"]}, process.argv, 2)

if (parsedOpts["path"]) {
  staticPath = parsedOpts['path'];
}

var app = express();

app.use(express.static(staticPath));
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//handle earlyaccess request.
app.post('/earlyaccess', urlencodedParser, function (req, res) {
  var email = req.body.EMAIL;
  var source = req.body.SOURCE;
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var ua = req.headers['user-agent'];

  if (!email || !source) {
  	return res.status(400).send("invalid form data.");
  }
  //queue up the request for asynchronous processing.
  earlyaccess.enqueue(email, source, ua, ip).then(function() {
  	res.redirect("/");
  }, function(err) {
  	return res.status(500).send(err);
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
