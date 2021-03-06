class SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    
    if user
      log_in_user!(user)
      redirect_to user_url(user)
    else
      redirect_to new_sessions_url
    end
  end

  def new
    render :new
  end

  def destroy
    log_out_user!
    redirect_to new_sessions_url
  end
end
