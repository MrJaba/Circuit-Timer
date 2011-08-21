(function() {
  var MainView;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  MainView = Backbone.View.extend({
    el: $('body'),
    events: {
      'click button#add': 'createStopwatch'
    },
    initialize: function() {
      this.collection = window.Circuit;
      this.counter = 0;
      this.collectionView = new window.StopwatchCollectionView({
        el: $("#stopwatches"),
        collection: this.collection
      });
      window.delayView = new window.DelayView({
        collection: this.collection
      });
      this.render();
      window.Circuit.bind('reset', this.renderStored);
      return window.Circuit.fetch();
    },
    render: function() {
      return $(this.el).append("<button id='add'>Add Stopwatch</button>");
    },
    renderStored: __bind(function() {
      window.Circuit.each(__bind(function(stopwatch) {
        var stopwatchView;
        stopwatchView = new window.StopwatchView({
          model: stopwatch
        });
        return this.$("#stopwatches").append(stopwatchView.render().el);
      }, this));
      return this.$("#stopwatches").append(window.delayView.render().el);
    }, this),
    createStopwatch: function() {
      var delay, stopwatch, view;
      this.counter++;
      stopwatch = new window.Stopwatch({
        name: this.counter
      });
      delay = new window.Stopwatch({
        name: 'delay' + this.counter,
        view: window.delayView
      });
      view = new window.StopwatchView({
        model: stopwatch
      });
      this.collection.add(stopwatch);
      this.collection.add(delay);
      stopwatch.save();
      return delay.save();
    }
  });
  jQuery(function() {
    window.Circuit = new window.StopwatchCollection;
    return window.mainView = new MainView;
  });
}).call(this);
