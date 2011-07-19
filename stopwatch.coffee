class window.Stopwatch extends Backbone.Model
  defaults:
    time:30
    running:false
  
  initialize: ->
    @set("time":@defaults.time) unless @get("time")?
    @set("running":false) unless @get("running")?
    
  time: ->
    new Date().getTime() - @startTime
    
  start: ->
    @running = true
    @startTime = new Date().getTime()
    updater = () => 
      @set("time":(@time()/1000).toFixed(2))
    @timer = setInterval updater , 10
    
  stop: ->
    @running = false
    @startTime = null
    clearInterval @timer
    
  startStop: ->
    if @running
      @stop()
    else
      @start()