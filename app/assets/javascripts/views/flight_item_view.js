var App = App || {};

App.Views.FlightItemView = Backbone.View.extend ({

  tagName: 'li',
  events: {


  initialize: function() {
    // this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var template = $('#flightItemView').html();
    var flightItemHTML = Handlebars.compile(template);

    this.$el.html(flightItemHTML( this.model.toJSON() ));
    return this;
  },


