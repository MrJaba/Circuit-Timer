(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.StopwatchCollectionView = (function() {
    function StopwatchCollectionView() {
      this.render = __bind(this.render, this);;      StopwatchCollectionView.__super__.constructor.apply(this, arguments);
    }
    __extends(StopwatchCollectionView, Backbone.View);
    StopwatchCollectionView.prototype.events = {
      'click button#startCircuit': 'startCircuit',
      'click button#resetCircuit': 'resetCircuit'
    };
    StopwatchCollectionView.prototype.initialize = function() {
      this.collection.bind("add", __bind(function(stopwatch) {
        console.log(stopwatch);
        return $(this.el).append(stopwatch.view.render().el);
      }, this));
      return this.render();
    };
    StopwatchCollectionView.prototype.render = function() {
      $(this.el).append("<button id='startCircuit'>Start Circuit</button>");
      $(this.el).append("<button id='resetCircuit'>Reset Circuit</button>");
      return this;
    };
    StopwatchCollectionView.prototype.startCircuit = function() {
      return this.collection.startCircuit($("#delay").val());
    };
    StopwatchCollectionView.prototype.resetCircuit = function() {
      return this.collection.resetAll();
    };
    return StopwatchCollectionView;
  })();
}).call(this);
