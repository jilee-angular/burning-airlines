var App = App || {};

App.Collections.Airplanes = Backbone.Collection.extend({
  model: App.Models.Airplanes,
  url: '/airplanes'
});