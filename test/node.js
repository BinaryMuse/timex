var Timex = require("../");
var timer = new Timex();

var log1 = function(time) {
  console.log("Timer 1: " + time);
};

var log2 = function(time) {
  console.log("Timer 2: " + time);
};

timer.register(log1);
timer.register(log2);

setTimeout(function() {
  timer.unregister(log2);
}, 2000);

timer.start();
