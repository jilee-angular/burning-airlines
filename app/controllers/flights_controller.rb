class FlightsController < ApplicationController

  def index
    @flights = Flight.all

    respond_to do |format|
      format.html {}
      format.json { render :json => @quotes }
    end
  end

  def create
    @flight = Flight.new(flight_params)
    @flight.save
    render :json => @flight
  end

end