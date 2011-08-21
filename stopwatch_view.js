(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.StopwatchView = (function() {
    function StopwatchView() {
      this.setTime = __bind(this.setTime, this);;
      this.startStop = __bind(this.startStop, this);;
      this.render = __bind(this.render, this);;      StopwatchView.__super__.constructor.apply(this, arguments);
    }
    __extends(StopwatchView, Backbone.View);
    StopwatchView.prototype.template = "#stopwatch-template";
    StopwatchView.prototype.tagName = "section";
    StopwatchView.prototype.className = "stopwatch";
    StopwatchView.prototype.events = {
      "click button.start-stop": "startStop",
      "change input.time": "setTime"
    };
    StopwatchView.prototype.initialize = function() {
      if (this.model) {
        this.model.view = this;
      }
      return this.template = _.template($(this.template).html());
    };
    StopwatchView.prototype.render = function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    };
    StopwatchView.prototype.startStop = function() {
      return this.model.startStop();
    };
    StopwatchView.prototype.setTime = function() {
      return this.model.set({
        "time": this.$("input.time").val()
      });
    };
    return StopwatchView;
  })();
}).call(this);
