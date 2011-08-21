class window.DelayView extends Backbone.View
  template: "#delay-template"
  tagName: "section"
  
  events:
    "change input.delay": "setDelay"
    
  initialize: ->
    @template = _.template($(@template).html())
    
  render: =>
    $(@el).html(@template({}))
    @
    
  setDelay: =>
    @collection.setDelay(@.$("input.time").val())
  