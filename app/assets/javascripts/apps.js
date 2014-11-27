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

//////////////////Add new flights/////////////////////////

App.flights = [];

App.flights = new App.Collections.Flights();

App.flights.fetch().done(function(){
  App.flights.each(function(flight, index){
    var view = new App.Views.FlightItemView({ model: airplane });
    $('#flightList ul').append(view.render().el);
  });

}); // ends fetch

$('#newFlight button').on('click', function(){
  var flightVal = $('#newFlight input').val();
  $('#newFlight input').val('');

  var flight = new App.Models.Flight({ body: flightVal });

  App.flights.create(flight);

  var view = new App.Views.FlightItemView({ model: flight });
  $('#flightList ul').append(view.render().el);
})