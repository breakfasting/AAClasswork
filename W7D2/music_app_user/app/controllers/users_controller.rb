class UsersController < ApplicationController

  def show
    @user = User.find_by(id: params[:id])

    render :show
  end

  def new
    render :new
  end

  def create
    user = User.new(params.require(:user).permit(:username, :password))

    if user.save
      log_in_user!(user)
      redirect_to user_url(user)
    else
      redirect_to new_user
    end
  end
end
