class ArtworkSharesController < ApplicationController

    def index
      artwork_share = ArtworkShare.all
      render json: artwork_share
    end
  
    def create
      shared = ArtworkShare.create(artwork_share_params)

      if shared.save
        render json: shared
        # redirect_to artwork_url(shared.artwork_id)
        # redirect_to "/artworks/#{shared.artwork_id}"
      else
        render json: shared.errors.full_messages, status: 422
      end
    end

    def destroy
      artwork_share = ArtworkShare.find(params[:id])
      artwork_share.destroy

      render json: artwork_share
    end
    
    private
    def artwork_share_params
      params.require(:shared).permit(:artwork_id, :viewer_id)
    end

end
