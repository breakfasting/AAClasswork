class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
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
