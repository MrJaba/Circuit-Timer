class window.DelayView extends Backbone.View
  template: "#delay-template"
  tagName: "section"
  
  events:
    "change input.delay": "setDelay"
    
  initialize: ->
    @template = _.template($(@template).html())
    @collection.bind("resetAll", @render)
    
  render: =>
    $(@el).html(@template({remaining:@delay ? ""}))
    @
    
  setDelay: =>
    @delay = @.$("input.time").val()
    @collection.setDelay(@delay)
  