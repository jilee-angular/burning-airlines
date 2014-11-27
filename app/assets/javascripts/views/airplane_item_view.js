var App = App || {};

App.Views.AirplaneItemView = Backbone.View.extend ({

  tagName: 'li',
  events: {
    'click': 'selectAirplane'
    // 'click .save': 'saveAirplane'
    // 'click .del': 'deleteAirplane',
    // 'click .list': 'accessList'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
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
  },

  deleteAirplane: function(event) {
    event.preventDefault();
    this.model.destroy();
    this.$el.fadeOut(700, function(){
      this.remove();      
    })
  },

  saveAirplane: function(event) {
    event.preventDefault();
  },

  accessList: function(event) {
    event.preventDefault();
  }
});
