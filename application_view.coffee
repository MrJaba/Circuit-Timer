MainView = Backbone.View.extend(
  el: $('body')

  events:
    'click button#add': 'createStopwatch'
  
  initialize: ->
    @counter = 0
    @collection = new window.StopwatchCollection
    @collectionView = new window.StopwatchCollectionView({el:$("#stopwatches"),collection:@collection})
    @delayView = new window.DelayView({collection:@collection})
    @delayView.render()
    @render()
  
  render: ->
    $(@el).append("<button id='add'>Add Stopwatch</button>")
    
  createStopwatch: ->
    @counter++
    stopwatch = new window.Stopwatch({name:@counter, collection:@collection})
    view = new window.StopwatchView({model:stopwatch})
    @collection.add(stopwatch)
    @collection.add(new window.Stopwatch({name:'delay'+@counter, view:@delayView, collection:@collection}))
)

jQuery ->
  window.mainView = new MainView();      
