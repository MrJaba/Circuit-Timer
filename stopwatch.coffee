class window.Stopwatch extends Backbone.Model
  defaults:
    time:30
    running:false
  
  initialize: ->
    @set("time":@defaults.time) unless @get("time")?
    @set("elapsed":0, "remaining": @get("time"))
    @set("running":false) unless @get("running")?
    @view = @attributes.view if @attributes.view?
    
  time: ->
    new Date().getTime() - @startTime
    
  timeLeft: ->
    @get("time") - @get("elapsed")
    
  tick: =>
    @set("elapsed":(@time()/1000).toFixed(1))
    @set("remaining": @timeLeft())
    $(".time", @view.el).val(@get("remaining").toFixed(1))
    console.log(@get("remaining").toFixed(1))
    if @get("remaining") <= 0
      @stop()
      @collection.startNext()
    
  start: ->
    @running = true
    @startTime = new Date().getTime()
    @timer = setInterval @tick , 100
    
  stop: ->
    @running = false
    window.clearInterval @timer
    
  reset: ->
    @startTime = null
    @set({"elapsed":0,"remaining":0})
    
  startStop: ->
    if @running
      @stop()
    else
      @start()
      
  isDelay: ->
    console.log(@get("name"))
    @get("name").toString().match(/delay/)