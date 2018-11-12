//server.js 
// we will be using this to start our client

// modules =================================================
var serialport = require("./serialport.js")

var express        = require('express');
var app            = express();

var port = process.env.PORT || 8080; 


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
app.use('/', express.static('html'));

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});



// more routes for our API will happen here
router.get('/forward', function(req, res) {
    serialport.sendForward();   
    res.send('forward!');
});

router.get('/stop', function(req, res) {
    serialport.sendStop();
    res.send('stop!');   
});

router.get('/backward', function(req, res) {
    serialport.sendBackward();   
    res.send('backward!');
});

router.get('/left', function(req, res) {
    serialport.sendLeft();   
    res.send('left!');
});

router.get('/right', function(req, res) {
    serialport.sendRight();   
    res.send('right!');
});


// EXPRESS START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
