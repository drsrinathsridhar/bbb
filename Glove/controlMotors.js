var b = require('bonescript');

//var pins = [ "P9_11", "P9_12"
//	   , "P8_9", "P8_10" 
//	   , "P8_11", "P8_12"
//	   , "P8_13", "P8_14" 
//	   , "P8_15", "P8_16"
//	   ];

// 2014-08-31: Testing glove for first time
// 
var pins = [ "P9_12", "P8_12"
	   , "P8_9", "P8_10" 
	   , "P8_11", "P9_11"
	   , "P9_13", "P9_13", "P9_13"
	   ];
var nMotors = pins.length;
//nMotors = 2; // Overwrite previous
var intervalTime = 500;

for (var i = 0; i < nMotors; ++i) {
    b.pinMode(pins[i], b.OUTPUT, 7);
    b.digitalWrite(pins[i], b.LOW);
}

var currentpin = 0;
setInterval(nextpin, intervalTime);

function nextpin() {
    
    for (var i = 0; i < nMotors; ++i) {
        b.pinMode(pins[i], b.OUTPUT, 7);
        b.digitalWrite(pins[i], b.LOW);
    }
    b.digitalWrite(pins[currentpin], b.HIGH);
    currentpin += 1;

    if(currentpin == nMotors) {
        currentpin = 0;
    }
}
