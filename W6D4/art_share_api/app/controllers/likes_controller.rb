class LikesController < ApplicationController

  def index
    # user = User.find(params[:user_id])
    
    # if params[:type] == 'Comment' 
    #   render json: user.liked_comments
    # elsif params[:type] == 'Artwork'
    #   render json: user.liked_artworks
    # else
    #   render string: 'must give a type of Comment or Artwork'
    # end

    if params[:type] == 'Comment'
      likes = Comment
        .joins(:likers)
        .where('liked_item_type = ? AND user_id = ?', 'Comment', params[:user_id])
    elsif params[:type] == 'Artwork'
      likes = Artwork
        .joins(:likers)
        .where('liked_item_type = ? AND user_id = ?', 'Artwork', params[:user_id])
    else
      render string: 'must give a type of Comment or Artwork'
    end
    
    render json: likes
  end

  # def index
  #   artwork_share = ArtworkShare.all
  #   render json: artwork_share
  # end

  def create
    # debugger
    like = Like.new(like_params)

    if like.save
      render json: like
    else
      render json: like.errors.full_messages, status: 422
    end
  end

  def destroy
    like = Like.find(params[:id])
    like.destroy

    render json: like
  end
  
  private
  def like_params
    params.require(:like).permit(:user_id, :liked_item_id, :liked_item_type)
  end
end
