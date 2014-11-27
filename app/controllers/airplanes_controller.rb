class AirplanesController < ApplicationController

  def index
    @airplanes = Airplane.all

    respond_to do |format|
      format.html {}
      format.json { render :json => @airplanes }
    end
  end

  def create
    @airplane = Airplane.new(airplane_params)
    @airplane.save
    render :json => @airplane
  end

  def destroy
    @airplane = Airplane.find(params[:id])
    @airplane.destroy
    render :json => @airplane
  end

  private

  def airplane_params
    params.require(:airplane).permit(:name, :row, :column)
  end

end