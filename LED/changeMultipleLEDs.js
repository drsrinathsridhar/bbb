var b = require('bonescript');

var leds = [ "P8_7", "P8_8", "P8_9", "P8_10"
	   , "P8_11", "P8_12", "P8_13", "P8_14" 
	   , "P8_15", "P8_16", "P8_17", "P8_18"
	   , "P9_11", "P9_12", "P9_13"
	   ];
var nLEDs = leds.length;
//nLEDs = 2; // Overwrite previous
var intervalTime = 450;

for (var i = 0; i < nLEDs; ++i) {
    b.pinMode(leds[i], b.OUTPUT, 7);
    b.digitalWrite(leds[i], b.LOW);
}

var currentpin = 0;
var direction = 1;
setInterval(nextpin, intervalTime);

function nextpin() {
    if(direction == 1 && currentpin >= nLEDs - 1) {
        currentpin = nLEDs - 1;
        direction = -1;
    } else if(direction == -1 && currentpin <= 0) {
        currentpin = 0;
        direction = 1;
    }
    
    for (var i = 0; i < nLEDs; ++i) {
        b.pinMode(leds[i], b.OUTPUT, 7);
        b.digitalWrite(leds[i], b.LOW);
    }
    b.digitalWrite(leds[currentpin], b.HIGH);
    currentpin += direction;
    //b.digitalWrite(leds[currentpin], b.LOW);
}
