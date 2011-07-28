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
      return this.render();
    },
    render: function() {
      return $(this.el).append("<button id='add'>Add Stopwatch</button>");
    },
    createStopwatch: function() {
      var stopwatch, view;
      this.counter++;
      stopwatch = new window.Stopwatch({
        name: this.counter
      });
      view = new window.StopwatchView({
        model: stopwatch
      });
      this.collection.add(stopwatch);
      return console.log(this.collection);
    }
  });
  jQuery(function() {
    return window.mainView = new MainView();
  });
}).call(this);
