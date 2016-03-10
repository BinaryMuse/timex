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

**`Timex#getRate()`**

Returns the timer's current rate. Defaults to `1  `.

**`Timex#setRate(rate)`**

Sets the timer's rate. The rate affects how the time is calculated, not how often the timer ticks. For example, setting `rate` to `0.5` makes the timer increment time twice as slowly, but the ticks will occur just as often as before.

**`Timex#register(function(time){})`**

Registers a callback that gets called each time the timer ticks. The callback receives the current time of the timer as its only argument.

Note that the time will be a float when high-precision times are available (e.g. when using `performance.now`).

**`Timex#unregister(function(time){})`**

Unregisters a previously registered callback. Uses `===` to compare the functions.

**`Timex#currentTime`**

The current time of the timer.

**`Timex#running`**

Whether or not the timer is currently ticking.

License
-------

Timex is licensed under the [MIT license](LICENSE).

> The MIT License (MIT)
>
> Copyright (c) 2015 Michelle Tilley
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.
