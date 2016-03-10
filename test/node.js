var Timex = require("../");
var timer = new Timex();
var timer2 = new Timex();

var log1 = function(time) {
  console.log("Timer 1: " + time);
};

var log2 = function(time) {
  console.log("Timer 2: " + time);
};

var log3 = function(time) {
  console.log("Timer 3: " + time);
};

timer.register(log1);
timer.register(log2);

timer2.register(log3);

setTimeout(function() {
  timer.unregister(log2);
}, 2000);

timer2.setRate(0.5);

timer.start();
timer2.start();
