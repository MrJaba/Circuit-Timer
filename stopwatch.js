(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.Stopwatch = (function() {
    function Stopwatch() {
      this.tick = __bind(this.tick, this);;      Stopwatch.__super__.constructor.apply(this, arguments);
    }
    __extends(Stopwatch, Backbone.Model);
    Stopwatch.prototype.defaults = {
      time: 30,
      running: false
    };
    Stopwatch.prototype.initialize = function() {
      if (this.get("time") == null) {
        this.set({
          "time": this.defaults.time
        });
      }
      this.set({
        "elapsed": 0,
        "remaining": this.get("time")
      });
      if (this.get("running") == null) {
        return this.set({
          "running": false
        });
      }
    };
    Stopwatch.prototype.time = function() {
      return new Date().getTime() - this.startTime;
    };
    Stopwatch.prototype.timeLeft = function() {
      return this.get("time") - this.get("elapsed");
    };
    Stopwatch.prototype.tick = function() {
      this.set({
        "elapsed": (this.time() / 1000).toFixed(1)
      });
      this.set({
        "remaining": this.timeLeft()
      });
      $(".time", this.view.el).val(this.get("remaining").toFixed(1));
      if (this.get("remaining") <= 0) {
        this.stop();
        return this.collection.startNext();
      }
    };
    Stopwatch.prototype.start = function() {
      this.running = true;
      this.startTime = new Date().getTime();
      return this.timer = setInterval(this.tick, 100);
    };
    Stopwatch.prototype.stop = function() {
      this.running = false;
      return window.clearInterval(this.timer);
    };
    Stopwatch.prototype.reset = function() {
      this.startTime = null;
      return this.set({
        "elapsed": 0,
        "remaining": 0
      });
    };
    Stopwatch.prototype.startStop = function() {
      if (this.running) {
        return this.stop();
      } else {
        return this.start();
      }
    };
    return Stopwatch;
  })();
}).call(this);
