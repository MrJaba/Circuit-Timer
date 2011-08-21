class window.StopwatchCollectionView extends Backbone.View
  
  events:
    'click button#startCircuit': 'startCircuit'
  
  initialize: ->
    @collection.bind("add", (stopwatch) => 
      console.log(stopwatch)
      $(@el).append(stopwatch.view.render().el))
    @render()
  
  render: =>
    $(@el).append("<button id='startCircuit'>Start Circuit</button>")
    @
    
  startCircuit: ->
    @collection.startCircuit($("#delay").val())