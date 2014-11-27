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

  private

  def flight_params
    params.require(:flight).permit(:number, :date, :destination, :origin, :plane)
  end


end