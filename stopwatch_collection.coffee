class window.StopwatchCollection extends Backbone.Collection
  model:Stopwatch
  #localStorage: new Store("stopwatches")
  
  initialize: ->
    @current = 0
    
  startCircuit: (delayTime) ->
    @delayTime = delayTime
    @startNext()
    
  startNext: ->
    @next().start() if @current < @size()
    
  next: ->
    @at(@current++)
    
  setDelay: (delay) ->
    @each (stopwatch) ->
      console.log(stopwatch, stopwatch.isDelay())
      stopwatch.set({"time": delay}) if stopwatch.isDelay()
        