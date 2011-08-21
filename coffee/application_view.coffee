MainView = Backbone.View.extend(
  el: $('body')

  events:
    'click button#add': 'createStopwatch'
  
  initialize: ->
    @collection = window.Circuit
    @counter = 0
    @collectionView = new window.StopwatchCollectionView({el:$("#stopwatches"),collection:@collection})
    window.delayView = new window.DelayView({collection:@collection})
    @render()
    window.Circuit.bind('reset', @renderStored);
    window.Circuit.fetch()
  
  render: ->
    $(@el).append("<button id='add'>Add Stopwatch</button>")
    
  renderStored: =>
    window.Circuit.each (stopwatch) =>
      stopwatchView = new window.StopwatchView({model:stopwatch})  
      @.$("#stopwatches").append(stopwatchView.render().el)    
    @.$("#stopwatches").append(window.delayView.render().el)
      
  createStopwatch: ->
    @counter++
    stopwatch = new window.Stopwatch({name:@counter})
    delay = new window.Stopwatch({name:'delay'+@counter, view:window.delayView})
    view = new window.StopwatchView({model:stopwatch})
    @collection.add(stopwatch)
    @collection.add(delay)
    stopwatch.save()
    delay.save()
)

jQuery ->
  window.Circuit = new window.StopwatchCollection
  window.mainView = new MainView
  
