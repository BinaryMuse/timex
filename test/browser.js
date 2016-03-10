var Timex = require("../");
var timer = new Timex();
var timer2 = new Timex();

var div1 = document.createElement("div");
var div2 = document.createElement("div");
var div3 = document.createElement("div");

document.documentElement.appendChild(div1);
document.documentElement.appendChild(div2);
document.documentElement.appendChild(div3);

var updateDoc1 = function(time) {
  div1.textContent = "" + time;
};

var updateDoc2 = function(time) {
  div2.textContent = "" + time;
};

var updateDoc3 = function(time) {
  div3.textContent = "" + time;
};

timer.register(updateDoc1)
timer.register(updateDoc2)

timer2.register(updateDoc3)

setTimeout(function() {
  timer.unregister(updateDoc2);
}, 2000);

timer2.setRate(0.5);

timer.start();
timer2.start();
