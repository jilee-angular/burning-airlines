var App = App || {};

App.Views.FlightItemView = Backbone.View.extend ({

  tagName: 'li',
  events: {
    // 'click': 'selectTodo',
    // 'click .del': 'deleteTodo',
    // 'click .list': 'accessList'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var template = $('#flightItemView').html();
    var flightItemHTML = Handlebars.compile(template);

    this.$el.html(flightItemHTML( this.model.toJSON() ));
    return this;
  },

  selectFlight: function() {
    this.$el.parent().find('li').removeClass('highlight');
    this.$el.addClass('highlight');
    // $('#todo').find('p').hide().html(this.model.get("body")).fadeIn();
  },

  deleteFlight: function(event) {
    event.preventDefault();
    this.model.destroy();
    this.$el.fadeOut(700, function(){
      this.remove();
    })
  },

  accessList: function(event) {
    event.preventDefault();
  }
});
