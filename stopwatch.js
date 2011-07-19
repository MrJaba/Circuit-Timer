(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  }, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Stopwatch = (function() {
    function Stopwatch() {
      Stopwatch.__super__.constructor.apply(this, arguments);
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
      if (this.get("running") == null) {
        return this.set({
          "running": false
        });
      }
    };
    Stopwatch.prototype.time = function() {
      return new Date().getTime() - this.startTime;
    };
    Stopwatch.prototype.start = function() {
      var updater;
      this.running = true;
      this.startTime = new Date().getTime();
      updater = __bind(function() {
        return this.set({
          "time": (this.time() / 1000).toFixed(2)
        });
      }, this);
      return this.timer = setInterval(updater, 10);
    };
    Stopwatch.prototype.stop = function() {
      this.running = false;
      this.startTime = null;
      return clearInterval(this.timer);
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
