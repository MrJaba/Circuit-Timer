class window.StopwatchCollection extends Backbone.Collection
  model:Stopwatch
  #localStorage: new Store("stopwatches")
  
  initialize: ->
    @current = 0
    
  startCircuit: (delayTime) ->
    @delayTime = delayTime
    @startNext()
    
  resetAll: ->
    @current = 0
    @trigger("resetAll")
    
  startNext: ->
    if @current < @size()
      @next().start() 
    else
      @resetAll()
    
  next: ->
    @at(@current++)
    
  setDelay: (delay) ->
    @each (stopwatch) ->
      stopwatch.set({"time": delay}) if stopwatch.isDelay()
        