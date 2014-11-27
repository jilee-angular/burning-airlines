App.airplanes = [];

App.airplanes = new App.Collections.Airplanes();

App.airplanes.fetch().done(function(){
  App.airplanes.each(function(airplane, index){
    var view = new App.Views.AirplaneItemView({ model: airplane });
    $('#airplaneList ul').append(view.render().el);
  });

}); // ends fetch

$('#newAirplane button').on('click', function(){
  var airplaneVal = $('#newAirplane input').val();
  $('#newAirplane input').val('');

  var airplane = new App.Models.Airplane({ body: airplaneVal });

  App.airplanes.create(airplane);

  var view = new App.Views.AirplaneItemView({ model: airplane });
  $('#airplaneList ul').append(view.render().el);
})