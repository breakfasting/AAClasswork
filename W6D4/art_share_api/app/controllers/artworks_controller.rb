class ArtworksController < ApplicationController
  # def index
  #   artworks = Artwork.all
  #   render json: artworks
  # end
  def index
    debugger
    artworks = Artwork #left_outer_join is correct
    .joins(:shared_artworks)
    .where('artist_id = ? OR viewer_id = ?', params[:user_id], params[:user_id])
    # .or(Artwork.where())
    #ORDERING?

    # my_artworks = Artwork
    # .joins(:shared_artworks)
    # .where('artist_id = ?', params[:user_id])

    # shared_works = Artwork
    # .joins(:shared_artworks)
    # .where('viewer_id = ?', params[:user_id])

    # render json: my_artworks.as_json + shared_works.as_json
    render json: artworks
  end

  def create
    artwork = Artwork.new(artwork_params)
    if artwork.save
      # render json: artwork
      redirect_to "/artworks/#{artwork.id}"
    else
      render json: artwork.errors.full_messages, status: 422
    end
    # render json: params
  end

  def show
    artwork = Artwork.find(params[:id])
    render json: artwork
  end
  
  def update
    artwork = Artwork.find(params[:id])
    
    if artwork.update(artwork_params)
      redirect_to "/artworks/#{artwork.id}"
      # render json: artwork
    else
      render json: artwork.errors.full_messages, status: 422
    end
  end

  def destroy
    artwork = Artwork.find(params[:id])
    artwork.destroy
    render json: artwork
  end
  
  private
  def artwork_params
    params.require(:artwork).permit(:title, :image_url, :artist_id)
  end
    
end
