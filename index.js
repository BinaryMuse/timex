var raf = require("raf"),
    now = require("performance-now");

function Timer() {
  this.running = false;
  this.currentTime = 0;
  this.lastTick = null;
  this.callbacks = [];

  this._tick = this._tick.bind(this);
}

Timer.prototype.start = function(startAtMs) {
  if (this.running) return;
  this.running = true;

  if (typeof startAtMs !== "undefined") {
    this.set(startAtMs);
  }

  this._startTimer();
};

Timer.prototype.set = function(ms) {
  this.lastTick = null;
  this.currentTime = ms;
};

Timer.prototype.pause = function() {
  if (!this.running) return;
  this.lastTick = null;
  this.running = false;
};

Timer.prototype._startTimer = function() {
  this._tick();
};

Timer.prototype._tick = function() {
  if (!this.running) return;

  if (this.lastTick === null) {
    this.lastTick = now();
  } else {
    var thisTick = now(),
        delta = thisTick - this.lastTick;
    this.currentTime = this.currentTime + delta;
    this.lastTick = thisTick;
  }

  this.callbacks.forEach(function(callback) {
    callback(this.currentTime);
  }.bind(this));

  raf(this._tick);
};

Timer.prototype.register = function(fn) {
  this.callbacks.push(fn);
};

Timer.prototype.unregister = function(fn) {
  var idx = this.callbacks.indexOf(fn);
  if (idx > -1) this.callbacks.splice(idx, 1);
};

module.exports = Timer;
