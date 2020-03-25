class User < ApplicationRecord
    validates :user_name, :password_digest, :session_token, presence: true
    validates :user_name, :session_token, uniqueness: true
    after_initialize :create_session_token


    def reset_session_token!
        new_session_token = SecureRandom.urlsafe_base64
        self.update(session_token: new_session_token)
        new_session_token
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(username, password)
       user = User.find_by(user_name: username)
       return nil unless user
       if user.is_password?(password)
        return user
       else
        return nil
       end
    end

    def create_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
