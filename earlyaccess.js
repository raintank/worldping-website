var Sequelize = require("sequelize");
var async = require("async");
var https = require('https');
var config = require('./conf.json');
var mkdirp = require('mkdirp');

mkdirp.sync("./data");

// connect to our DB.
var sequelize = new Sequelize('raintank', null, null, {
	dialect: 'sqlite', 
	storage: 'data/raintank.sqlite',
	logging: false
});


var APPID = config.intercom.APPID;
var APIKEY = config.intercom.APIKEY;
var AUTOPILOTAPIKEY = config.autopilot.APIKEY;

// define or schema for signups queue.
var Signups = sequelize.define('Signups', {
  email: {
	type: Sequelize.STRING,
	validate: {
		isEmail: true
	}
  },
  source: {
	type: Sequelize.STRING
  },
  newsletter: {
	type: Sequelize.BOOLEAN
  },
  autopilotSessionId: {
	type: Sequelize.STRING
  },  
  meta: {
	type: Sequelize.STRING
  },
  userAgent: {
	type: Sequelize.STRING
  },
  clientIP: {
	type: Sequelize.STRING
  },
  state: {
	type: Sequelize.STRING,
  },
});

//make sure the table exists.
Signups.sync();


// add signups to the queue.
exports.enqueue = function(email, source, newsletter, autopilotSessionId, meta, ua, ip) {
	console.log("processing earlyaccess signup of: ", email);
	//create two entries in the db. One for tracking intercom and one for autopilot
	var signups = [{
                email: email,
                source: source,
                newsletter: newsletter,
                autopilotSessionId: "",
                meta: JSON.stringify(meta),
                clientIP: ip,
                userAgent: ua,
                state: "queued"
        }];
	if (autopilotSessionId) {
		signups.push({
			email: email,
			source: source,
			newsletter: newsletter,
			autopilotSessionId: autopilotSessionId,
			meta: JSON.stringify(meta),
			clientIP: ip,
			userAgent: ua,
			state: "queued"
		});
	} else {
		console.log("autopilotSessionId not set for %s", email);
	}
	return Signups.bulkCreate(signups);
}

var processIntercom = function(signup, next) {
	signup.set("state", "processing", {reset: true});
	signup.save().then(function() {
		//send the signup to intercom.
		var payload = {
			email: signup.email,
			signed_up_at: Math.floor(signup.createdAt.getTime()/1000),
			last_seen_ip: signup.clientIP,
			last_seen_user_agent: signup.userAgent,
			custom_attributes: {
				"signup_source": signup.source,
				"newsletter": signup.newsletter
			}
		};
		var meta = JSON.parse(signup.meta);
		Object.keys(meta).forEach(function(key) {
		  payload.custom_attributes["tracking_"+key] = meta[key];
		});

		var opts = {
			host: "api.intercom.io",
			port: 443,
			path: "/users",
			method: "POST", 
			headers: {
				'Content-Type': "application/json",
				'Accept': "application/json"
			},
			auth: APPID+":"+APIKEY
		};
		var request = https.request(opts, function(res) {
			if (res.statusCode == 200) {
				signup.state = 'complete';
				console.log("Added %s to Intercom successfully.", signup.email);
			} else {
				console.log("failed to register %s at intercom. status: ", signup.email, res.statusCode);
				if (signup.createdAt < new Date(new Date() - 10 * 60 * 1000)) {
					//we have tried too many times.
					console.log("unable to add %s after 10minutes. giving up.", signup.email);	
					signup.state = 'failed';
				} else {
					console.log("Intercom task for %s re-queued.", signup.email)
					signup.state = 'queued';
				}
			}
			signup.save().finally(function() {
				next();
			});
		});
		request.write(JSON.stringify(payload));
		request.on("error", function(err) {
			console.log(err);
			signup.state = 'queued';
			console.log("Intercom task for %s re-queued.", signup.email)
			signup.save().finally(function() {
				next();
			});
		});
		request.end();
	}, function(err) {
		console.log(err);
		//no need to return an error as the state never changed from queued.
		next();
	});
};

var processAutopilot = function(signup, next) {
	signup.set("state", "processing", {reset: true});
	signup.save().then(function() {
		// Autpilot signup
		var pilotPayload = {
			contact: {
				Email: signup.email,
				_autopilot_session_id: signup.autopilotSessionId
			}
		};

		var pilotOpts = {
			host: "api2.autopilothq.com",
			port: 443,
			path: "/v1/contact",
			method: "POST", 
			headers: {
				'autopilotapikey': AUTOPILOTAPIKEY,
				'Content-Type': "application/json",
				'Accept': "application/json"
			}
		};

		var pilotRequest = https.request(pilotOpts, function(res) {
			if (res.statusCode == 200) {
				signup.state = 'complete';
				console.log("Added %s to Autopilot successfully.", signup.email);
			} else {
				console.log("failed to register %s at autopilot. status: ", signup.email, res.statusCode);
				if (signup.createdAt < new Date(new Date() - 10 * 60 * 1000)) {
					//we have tried too many times.
					console.log("unable to add %s to autpilot after 10minutes. giving up.", signup.email);	
					signup.state = 'failed';
				} else {
					signup.state = 'queued';
					console.log("Autopilot task for %s re-queued.", signup.email)
				}
			}
			signup.save().finally(function() {
				next();
			});
		});
		pilotRequest.write(JSON.stringify(pilotPayload));
		pilotRequest.on("error", function(err) {
			console.log(err);
			signup.state = 'queued';
			console.log("Autopilot task for %s re-queued.", signup.email)
			signup.save().finally(function() {
				next();
			});
		});
		pilotRequest.end();
		// End Autopilot Section

	}, function(err) {
		console.log(err);
		//no need to return an error as the state never changed from queued.
		next();
	});
};

var process = function(signup, next) {
	if (signup.autopilotSessionId == "") {
		console.log("%s needs to be added to intercom", signup.email);
		return processIntercom(signup, next);
	} else {
		console.log("%s needs to be added to autopilot", signup.email);
		return processAutopilot(signup, next);
	}
};

setInterval(function() {
	var filter = {
		where: {
			$or: [
				{
					state: 'queued'
				},
				{
					state: "processing",
					updatedAt: {
						$lt: new Date(new Date() - 1 * 60 * 1000)
					}
				}
			]
		}
	}
	Signups.findAll(filter).then(function(signups) {
		if (signups.length > 0)
			console.log("%s signups queued for processing.", signups.length);

		async.each(signups, process, function(err) {
			if (err) {
				console.log(err);
			}
		});
	});
}, 2000);
