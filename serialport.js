//serialport.js

// SerialPort Setup
// =============================================================================
  // serial port initialization:
  var serialport = require("serialport");
      serialPort = serialport;
      portName = "/dev/ttyACM0";
      portConfig = {
      baudRate: 9600,
      };

  var foward = new Buffer(1);
      foward.writeUInt8(0x46,0); // 0x46 is F in ASCII

  var backward = new Buffer(1);
      backward.writeUInt8(0x42,0); // 0x42 is B in ASCII

  var left = new Buffer(1);
      left.writeUInt8(0x4C,0); // 0x4C is L in ASCII

  var right = new Buffer(1);
      right.writeUInt8(0x52,0); // 0x52 is F in ASCII

  var stop = new Buffer(1);
      stop.writeUInt8(0x53,0); // 0x53 is F in ASCII


  //Serialport Server Open
  var port = new serialPort(portName, portConfig);
  port.on('open', openPort); // called when the serial port opens

  //test to check if connection is avaiable
    function openPort() {
      port.write('Success', function(err) {
          if (err) {
          return console.log('Error on write: ', err.message);
          }
          console.log('Serialport Connection Available');
      })
  };



  //Foward command
   function sendForward() {
       // convert the value to an ASCII string before sending it:
       port.write(foward, function(err) {
          if (err) {
          return console.log('Error on write: ', err.message);
          }
          console.log('forward');
      });
  }
  //Backward command
    function sendBackward() {
       // convert the value to an ASCII string before sending it:
       port.write(backward, function(err) {
          if (err) {
          return console.log('Error on write: ', err.message);
          }
          console.log('backward');
      });
  }
      //Left command
    function sendLeft() {
       // convert the value to an ASCII string before sending it:
       port.write(left, function(err) {
          if (err) {
          return console.log('Error on write: ', err.message);
          }
          console.log('left');
      });
  }
      //Right command
    function sendRight() {
       // convert the value to an ASCII string before sending it:
       port.write(right, function(err) {
          if (err) {
          return console.log('Error on write: ', err.message);
          }
          console.log('right');
      });
  }
  //Stop command
   var sendStop = function () {
       // convert the value to an ASCII string before sending it:
       port.write(stop, function(err) {
          if (err) {
          return console.log('Error on write: ', err.message);
          }
          console.log('stop');
      });
  }

  module.exports = {
  	sendForward: sendForward,
  	sendBackward: sendBackward,
  	sendLeft: sendLeft,
  	sendRight: sendRight,
  	sendStop: sendStop
  };




//it didn't matter on the syntax of the call function but, putting the functions into the module.exports list