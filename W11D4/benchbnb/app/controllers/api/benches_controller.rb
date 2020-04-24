class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
    render :index
  end

  def create
    @bench = Bench.new(params.require(:bench).permit(:description, :lat, :lng))

    if @bench.save
      render :show
    else
      render json: ['error creating position']
    end
  end
end
