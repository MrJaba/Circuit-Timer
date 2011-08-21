(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.DelayView = (function() {
    function DelayView() {
      this.setDelay = __bind(this.setDelay, this);;
      this.render = __bind(this.render, this);;      DelayView.__super__.constructor.apply(this, arguments);
    }
    __extends(DelayView, Backbone.View);
    DelayView.prototype.template = "#delay-template";
    DelayView.prototype.tagName = "section";
    DelayView.prototype.events = {
      "change input.delay": "setDelay"
    };
    DelayView.prototype.initialize = function() {
      this.template = _.template($(this.template).html());
      return this.collection.bind("resetAll", this.render);
    };
    DelayView.prototype.render = function() {
      var _ref;
      $(this.el).html(this.template({
        remaining: (_ref = this.delay) != null ? _ref : ""
      }));
      return this;
    };
    DelayView.prototype.setDelay = function() {
      this.delay = this.$("input.time").val();
      return this.collection.setDelay(this.delay);
    };
    return DelayView;
  })();
}).call(this);
