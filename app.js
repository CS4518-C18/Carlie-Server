var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ref = require('./firebase')

//var requestTrip = require('./routes/requestTrip');


const MAX_SHUTTLE = 3
const MAX_SEAT = 2
var num_shuttle = 0
var shuttle_list = {}


ref.child('shuttles').once("value", function(snap) {
	// initialize
	shuttle_list['shuttle1'] = {passengers: {}, num: 0}
	shuttle_list['shuttle2'] = {passengers: {}, num: 0}
	shuttle_list['shuttle3'] = {passengers: {}, num: 0}

	num_shuttle = snap.numChildren();
	snap.forEach(shuttle => {
		shuttle_list[shuttle.key] = {passengers: shuttle.child('trips').val(), num: shuttle.child('trips').numChildren()}
	})
	//console.log(shuttle_list)
	//test()
});



function test () {
	requestTrip('p1', null)
	requestTrip('p3', null)
	requestTrip('p6', null)
}

function requestTripHandler(req, res) {
  	res.send(requestTrip(req.params['passengerId']))
}

function requestTrip (passengerId) {
	var shuttleId = tripExist(passengerId)
	if (shuttleId != null) {
		return {
			shuttleId,
			status: 'exist'
		}
	}
	shuttleId = assignTrip()
	if (shuttleId != null) {
		return {
			shuttleId,
			status: 'new'
		}
	}
	return null
}

function tripExist(passengerId) {
	var finished = false
	var shuttleId = null

	Object.keys(shuttle_list).forEach(key => {
		let value = shuttle_list[key];
		if (finished) {
			return
		}
		if ((value.passengers != null) && (value.passengers[passengerId] != null)) {
			shuttleId = key
			finished = true
		}
	})
	return shuttleId
}

function assignTrip() {
	var finished = false
	var shuttleId = null

	Object.keys(shuttle_list).forEach(key => {
		let value = shuttle_list[key];
		if (finished) {
			return
		} 
		if (value.num < MAX_SEAT) {
			shuttleId = key
			shuttle_list[key] = value + 1
			finished = true
		}
	})
	return shuttleId
}


var app = express();

//app.use(express.static(path.join(__dirname, 'public')));

app.get('/passengers/:passengerId/trips/new', requestTripHandler);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.end()
  // res.render('error');
});

module.exports = app;
