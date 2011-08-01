class window.StopwatchView extends Backbone.View
  template: "#stopwatch-template"
  tagName: "section"
  className: "stopwatch"
    
  events:
    "click button.start-stop" : "startStop"
    "change input.time": "setTime"
  
  initialize: ->
    @model.view = @
    @template = _.template($(@template).html())
  
  render: =>
    $(@el).html(@template(@model.toJSON()))
    @

  startStop: =>
    @model.startStop()
    
  #Note the @.$ this scopes the jquery selector to the current element
  setTime: =>
    @model.set("time": @.$("input.time").val())