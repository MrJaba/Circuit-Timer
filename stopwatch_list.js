(function() {
  var ListView;
  ListView = Backbone.View.extend({
    el: $('body'),
    events: {
      'click button#add': 'createStopwatch'
    },
    initialize: function() {
      _.bindAll(this, 'render', 'createStopwatch');
      this.counter = 0;
      return this.render();
    },
    render: function() {
      $(this.el).append("<button id='add'>Add Stopwatch</button>");
      return $(this.el).append("<ul></ul>");
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
      console.log(view.render().el);
      return this.$("#stopwatches").append(view.render().el);
    }
  });
  jQuery(function() {
    var listView;
    return listView = new ListView();
  });
}).call(this);
