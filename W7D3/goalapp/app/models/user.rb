class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, length:{minimum: 6, allow_nil: true}  

    before_validation :ensure_session_token

    attr_reader :password

    #SPIRE
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def self.find_by_credentials(username, password) # return user if credentials correct
        user = User.find_by(username: username) 
        return nil unless user

        if user.is_password?(password)
            return user
        else
            return nil
        end
    end

end
