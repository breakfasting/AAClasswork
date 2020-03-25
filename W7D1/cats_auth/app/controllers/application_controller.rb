class ApplicationController < ActionController::Base
    helper_method :current_user
    
    def current_user
        token = session[:session_token]
        @current_user ||= User.find_by(session_token: token)
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

end
