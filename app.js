var express = require('express');
var nopt = require('nopt');
var path = require('path');
var bodyParser = require('body-parser');
var earlyaccess = require("./earlyaccess");
var cookieSession = require('cookie-session');
var config = require('./config.json');
var querystring = require('querystring');

var staticPath = config.staticPath;
var port = config.port;

var app = express();

app.use(cookieSession({
  name: 'rt_session',
  secret: config.session.key,
  signed: true
}));

// User tracking middleware
// look for "source" query string which means this is an entry page.
// we then track the source, adwords, twitter, etc.. and all of the other
// params passed.
app.use(function(req, res, next) {
  if (req.query.source) {
    Object.keys(req.query).forEach(function(key) {
      req.session[key] = req.query[key];
    });
  }
  next();
});

app.use(express.static(staticPath));


var urlencodedParser = bodyParser.urlencoded({ extended: false })

//handle earlyaccess request.
app.post('/earlyaccess', urlencodedParser, function (req, res) {
  var email = req.body.EMAIL;
  var source = req.body.SOURCE;
  var newsletter = req.body.NEWSLETTER;
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var ua = req.headers['user-agent'];

  if (!email || !source) {
  	return res.status(400).send("invalid form data.");
  }
  //queue up the request for asynchronous processing.
  earlyaccess.enqueue(email, source, newsletter, req.session, ua, ip).then(function() {
	var queryParams = {
		email: email
	};
	Object.keys(req.session).forEach(function(key) {
		if (key === "_ctx") {
			return;
		}
		queryParams["tracking_"+key] = req.session[key];
	});
	var queryStr = querystring.stringify(queryParams);
  	res.redirect("https://raintank.typeform.com/to/jIHkbP?"+queryStr);
  }, function(err) {
  	return res.status(500).send(err);
  });
});

var server = app.listen(port, 'localhost', function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
