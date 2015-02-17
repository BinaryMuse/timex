Timex
=====

Timex is a small timer module that uses `requestAnimationFrame` and `performance.now()` for high-accuracy timing when possible. The timer can be paused and resumed, and set to an arbitrary time.

Installation
------------

Timex is available on npm:

    npm install [--save] timex

You can then require it as normal:

    var Timex = require("timex");
    var timer = new Timex();

Timex works with browser module bundlers like Browserify and webpack.

Usage
-----

**`new Timex()`**

Creates a new timer.

**`Timex#start([startAt])`**

Starts the timer. `startAt` can optionally be passed to set the timer to a given time (in milliseconds) before starting.

**`Timex#pause()`**

Pauses the timer.

**`Timex#set([ms])`**

Sets the timer's current time (in milliseconds).

**`Timex#register(function(time){})`**

Registers a callback that gets called each time the timer ticks. The callback receives the current time of the timer as its only argument.

**`Timex#unregister(function(time){})`**

Unregisters a previously registered callback. Uses `===` to compare the functions.

**`Timex#currentTime`**

The current time of the timer.

**`Timex#running`**

Whether or not the timer is currently ticking.
