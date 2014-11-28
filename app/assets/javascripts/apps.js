App.airplanes = [];

App.airplanes = new App.Collections.Airplanes();

App.airplanes.fetch().done(function(){
  App.airplanes.each(function(airplane, index){
    var view = new App.Views.AirplaneItemView({ model: airplane });
    $('#airplaneDetails').append(view.render().el);
  });
}); // ends fetch

$('#newAirplane button').on('click', function(){

  var airplaneVal = $('#newAirplane #airplaneName').val();
  $('#newAirplane #airplaneName').val('');
  var row = $('#newAirplane #airplaneRow').val();
  $('#newAirplane #airplaneRow').val('');
  var col = $('#newAirplane #airplaneCol').val();
  $('#newAirplane #airplaneCol').val('');

  var airplane = new App.Models.Airplane({ name: airplaneVal, row: row, column: col });
  App.airplanes.create(airplane);
  var view = new App.Views.AirplaneItemView({ model: airplane });

  $('#airplaneDetails').empty().append(view.render().el);

  // renders the flights seats
  (function(){//your code here
  //grid width and height
  var bw = row * 10;
  var bh = col * 10;
  //padding around grid
  var p = 10;
  //size of canvas
  var cw = bw + (p*2) + 1;
  var ch = bh + (p*2) + 1;

  var canvas = $('<canvas/>').attr({width: cw, height: ch}).appendTo('body');

  // if canvas {
  //     return false;
  // }

  var context = canvas.get(0).getContext("2d");

  var drawBoard = function(){
      for (var x = 0; x <= bw; x += 40) {
          context.moveTo(0.5 + x + p, p);
          context.lineTo(0.5 + x + p, bh + p);
      }


      for (var x = 0; x <= bh; x += 40) {
          context.moveTo(p, 0.5 + x + p);
          context.lineTo(bw + p, 0.5 + x + p);
      }


      context.strokeStyle = "black";
      context.stroke();
  }

  drawBoard();
  })();
  // ends seats render




}); // ends button click





// hide create form to start
var $btn = $("#createBtn");
$('#createForm').hide();

$btn.on('click', function(){
  $('#createForm').toggle("slow");
});

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
  var flight_number = $('#newFlight #flight_number').val();
  $('#newFlight #flight_number').val('');

  var date = $('#newFlight #date').val();
  $('#newFlight #date').val('');

  var destination = $('#newFlight #destination').val();
  $('#newFlight #destination').val('');

  var origin = $('#newFlight #origin').val();
  $('#newFlight #origin').val('');

  var plane = $('#newFlight #plane').val();
  $('#newFlight #plane').val('');

  var flight = new App.Models.Flight({ number: flight_number, date: date, destination: destination, origin: origin, plane: plane });

  App.flights.create(flight);

  var view = new App.Views.FlightItemView({ model: flight });
  console.log(view);
  $('#flight_details').append(view.render().el);
})
