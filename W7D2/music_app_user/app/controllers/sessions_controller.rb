class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.validate_user_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      log_in_user!(user)
      redirect_to user_url(user)
    else
      redirect_to new_sessions_url
    end
  end

  def destroy
    log_out_user!
    redirect_to new_sessions_url
  end
end
