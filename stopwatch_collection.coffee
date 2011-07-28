class window.StopwatchCollection extends Backbone.Collection
  model:Stopwatch
  #localStorage: new Store("stopwatches")
  
  initialize: ->
    @current = 0
    
  startCircuit: ->
    @startNext()
    
  startNext: ->
    @next().start() if @current < @size()
    
  next: ->
    @at(@current++)