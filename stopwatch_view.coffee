class window.StopwatchView extends Backbone.View
  template: "#stopwatch-template"
  tagName: "section"
  className: "stopwatch"
    
  events:
    "click .start-stop" : "startStop"
  
  initialize: ->
    @template = _.template($(@template).html())
    @model.bind("change:time", @render)
  
  render: =>
    $(@el).html(@template(@model.toJSON()))
    @

  startStop: ->
    @model.startStop()
    