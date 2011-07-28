(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.StopwatchCollection = (function() {
    function StopwatchCollection() {
      StopwatchCollection.__super__.constructor.apply(this, arguments);
    }
    __extends(StopwatchCollection, Backbone.Collection);
    StopwatchCollection.prototype.model = Stopwatch;
    StopwatchCollection.prototype.initialize = function() {
      return this.current = 0;
    };
    StopwatchCollection.prototype.startCircuit = function() {
      return this.startNext();
    };
    StopwatchCollection.prototype.startNext = function() {
      if (this.current < this.size()) {
        return this.next().start();
      }
    };
    StopwatchCollection.prototype.next = function() {
      return this.at(this.current++);
    };
    return StopwatchCollection;
  })();
}).call(this);
