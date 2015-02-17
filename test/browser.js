var Timex = require("../");
var timer = new Timex();

var div1 = document.createElement("div");
var div2 = document.createElement("div");

document.documentElement.appendChild(div1);
document.documentElement.appendChild(div2);

var updateDoc1 = function(time) {
  div1.textContent = "" + time;
}

var updateDoc2 = function(time) {
  div2.textContent = "" + time;
}

timer.register(updateDoc1)
timer.register(updateDoc2)

setTimeout(function() {
  timer.unregister(updateDoc2);
}, 2000);

timer.start();
