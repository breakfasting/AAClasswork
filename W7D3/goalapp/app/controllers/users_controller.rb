class UsersController < ApplicationController
    def new
        render :new
    end

    def create
        user = User.new(params.require(:user).permit(:username,:password))
        if user.save
            redirect_to user_url(user)
        else  
            render :new 
        end
    end

    def show 
        # debugger
        @user = User.find_by(id: params[:id])  
    end
end
