class ApplicationController < ActionController::Base
       # C R Lo Lo Lo
    def current_user #finding user using session token in cookie
      @current_user ||= User.find_by(session_token: session[:session_token])
    end

    # def require_login
    # end

    def log_in!(user)
        session[:session_token] = user.reset_session_token!
    end

    def log_out
        current_user.reset_session_token!   
        current_user = nil
        session[:session_token] = nil
    end  
    
    def logged_in?
        !!current_user
    end
    
end
