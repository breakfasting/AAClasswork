class SubsController < ApplicationController

    before_action :require_login, only: [:create]
    before_action :require_moderator, only: [:update, :edit]

    def edit
        @sub = Sub.find(params[:id])

        render :edit
    end

    def update
        @sub = Sub.find(params[:id])

        if @sub.update(sub_params)
            redirect_to sub_url(@sub)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :edit
        end
    end

    def show
        @sub = Sub.find(params[:id])
        render :show
    end

    def new
        render :new
    end

    def create
        sub = Sub.new(sub_params)
        sub.user_id = current_user.id
        if sub.save
            redirect_to subs_url
        else
            flash.now[:errors] = sub.errors.full_messages
            render :new
        end
    end

    def index
        @subs = Sub.all
        render :index
    end


    private
    def sub_params
        params.require(:sub).permit(:title, :description)
    end

    def require_moderator
        sub = Sub.find(params[:id])
        redirect_to subs_url unless current_user.moderated_subs.include?(sub)        
    end
end
