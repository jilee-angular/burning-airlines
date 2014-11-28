class ReservationsController < ApplicationController

  def index
    # @reservations = Reservation.all

    # respond_to do |format|
    #   format.html {}
    #   format.json { render :json => @reservations }
    # end
  end

  # def create
  #   @reservation = Reservation.new(flight_params)
  #   @reservation.save
  #   render :json => @reservation
  # end

  # private

  # def reservation_params
  #   params.require(:reservation).permit(:number, :date, ?????????????????????????)
  # end

end