var b = require('bonescript');
var led = "P9_22";
var state = 0;

b.pinMode(led, 'out');
toggleLED = function() {
    state = state ? 0 : 1;
    b.digitalWrite(led, state);
};

timer = setInterval(toggleLED, 200);

stopTimer = function() {
    clearInterval(timer);
};

setTimeout(stopTimer, 30000);
