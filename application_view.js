(function() {
  var MainView;
  MainView = Backbone.View.extend({
    el: $('body'),
    events: {
      'click button#add': 'createStopwatch'
    },
    initialize: function() {
      this.counter = 0;
      this.collection = new window.StopwatchCollection;
      this.collectionView = new window.StopwatchCollectionView({
        el: $("#stopwatches"),
        collection: this.collection
      });
      this.delayView = new window.DelayView({
        collection: this.collection
      });
      this.delayView.render();
      return this.render();
    },
    render: function() {
      return $(this.el).append("<button id='add'>Add Stopwatch</button>");
    },
    createStopwatch: function() {
      var stopwatch, view;
      this.counter++;
      stopwatch = new window.Stopwatch({
        name: this.counter,
        collection: this.collection
      });
      view = new window.StopwatchView({
        model: stopwatch
      });
      this.collection.add(stopwatch);
      return this.collection.add(new window.Stopwatch({
        name: 'delay' + this.counter,
        view: this.delayView,
        collection: this.collection
      }));
    }
  });
  jQuery(function() {
    return window.mainView = new MainView();
  });
}).call(this);
