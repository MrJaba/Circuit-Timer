MainView = Backbone.View.extend(
  el: $('body')

  events:
    'click button#add': 'createStopwatch'
  
  initialize: ->
    @counter = 0
    @collection = new window.StopwatchCollection
    @collectionView = new window.StopwatchCollectionView({el:$("#stopwatches"),collection:@collection})
    @render()
  
  render: ->
    $(@el).append("<button id='add'>Add Stopwatch</button>")
    
  createStopwatch: ->
    @counter++
    stopwatch = new window.Stopwatch({name:@counter})
    view = new window.StopwatchView({model:stopwatch})
    @collection.add(stopwatch)
    console.log(@collection)
)

jQuery ->
  window.mainView = new MainView();      
