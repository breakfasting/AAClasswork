class CommentsController < ApplicationController

  def index
    comments = Comment.where(comment_params)
    render json: comments
  end

  def create
    comment = Comment.new(new_comment_params)

    if comment.save
      render json: comment
    else
      render json: comment.errors.full_messages, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])

    comment.destroy
    render json: comment
  end
  
  private
  def new_comment_params
    params.require(:comment).permit(:body, :author_id, :artwork_id) 
  end

  def comment_params

    raise "Cannot pass both artwork_id AND author_id" if params[:artwork_id] && params[:author_id]
    return params.permit(:artwork_id) if params[:artwork_id]
    return params.permit(:author_id) if params[:author_id]
    raise "Need to pass in either an artwork_id or author_id."
    
  end
  
end
