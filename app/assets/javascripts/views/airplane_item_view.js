var App = App || {};

App.Views.AirplaneItemView = Backbone.View.extend({

  tagName: 'li',
  events: {
    'click': 'selectAirplane',
    'click .del': 'deleteAirplane'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  deleteAirplane: function(event) {
    event.preventDefault();

    this.model.destroy();
    this.remove();
  },

  render: function() {
    var template = $('#airplaneItemView').html();
    var airplaneItemHTML = Handlebars.compile(template);

    this.$el.html(airplaneItemHTML( this.model.toJSON() ));
    return this;
  },

  selectAirplane: function() {
    this.$el.parent().find('li').removeClass('highlight');
    this.$el.addClass('highlight');
    $('#airplane').find('p').hide().html(this.model.get("name")).fadeIn();
  }
});