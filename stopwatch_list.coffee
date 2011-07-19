ListView = Backbone.View.extend(
  el: $('body')

  events:
    'click button#add': 'createStopwatch'
  
  initialize: ->
    _.bindAll(this, 'render', 'createStopwatch')
    @counter = 0
    @render()
  
  render: ->
    $(@el).append("<button id='add'>Add Stopwatch</button>")
    $(@el).append("<ul></ul>")
    
  createStopwatch: ->
    @counter++
    stopwatch = new window.Stopwatch({name:@counter})
    view = new window.StopwatchView({model:stopwatch})
    console.log(view.render().el)
    this.$("#stopwatches").append(view.render().el)    
)

jQuery ->
  listView = new ListView();      
