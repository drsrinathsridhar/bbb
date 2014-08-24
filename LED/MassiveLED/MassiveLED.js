var b = require('bonescript');

// Using P8 pins starting from 3 (1 and 2 are ground)
var leds = [ "P8_3", "P8_4", "P8_5", "P8_6" ];
// var leds = [ "P8_13", "P8_14", "P8_15", "P8_16" ];

for (var i = 0; i < leds.length; ++i) {
    b.pinMode(leds[i], b.OUTPUT, 7);
    b.digitalWrite(leds[i], b.LOW);
}

var currentpin = 0;
var direction = 1;
setInterval(nextpin, 300);

function nextpin() {
    if(direction == 1 && currentpin >= leds.length - 1) {
        currentpin = leds.length - 1;
        direction = -1;
    } else if(direction == -1 && currentpin <= 0) {
        currentpin = 0;
        direction = 1;
    }
    
    for (var i = 0; i < leds.length; ++i) {
        b.pinMode(leds[i], b.OUTPUT, 7);
        b.digitalWrite(leds[i], b.LOW);
    }
    b.digitalWrite(leds[currentpin], b.HIGH);
    currentpin += direction;
    //b.digitalWrite(leds[currentpin], b.LOW);
}
