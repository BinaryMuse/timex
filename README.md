Timex
=====

Timex is a small timer module that uses `requestAnimationFrame` and `performance.now()` (or `process.hrtime` in Node) for high-accuracy timing when possible. The timer can be paused and resumed, and set to an arbitrary time.

Installation
------------

Timex is available on npm:

    npm install [--save] timex

You can then require it as normal:

    var Timex = require("timex");
    var timer = new Timex();

Timex is also available on Bower:

    bower install [--save] timex

**Note:** You should *only* use the Bower version in the browser.

Timex also works with browser module bundlers like Browserify and webpack.

Usage
-----

**`new Timex()`**

Creates a new timer.

**`Timex#start([startAt])`**

Starts the timer. `startAt` can optionally be passed to set the timer to a given time (in milliseconds) before starting.

**`Timex#pause()`**

Pauses the timer.

**`Timex#set(ms)`**

Sets the timer's current time (in milliseconds).

**`Timex#register(function(time){})`**

Registers a callback that gets called each time the timer ticks. The callback receives the current time of the timer as its only argument.

Note that the time will be a float when high-precision times are available (e.g. when using `performance.now`).

**`Timex#unregister(function(time){})`**

Unregisters a previously registered callback. Uses `===` to compare the functions.

**`Timex#currentTime`**

The current time of the timer.

**`Timex#running`**

Whether or not the timer is currently ticking.
