require 'rails_helper'

RSpec.describe User, type: :model do
    it {should validate_presence_of(:username)}
    it {should validate_presence_of(:password_digest)}
    # it {should validate_presence_of(:session_token)} # its gona fail
    it 'should ensure session token if null' do 
      expect(user.session_token).to_not be_nil
    end
    it {should validate_uniqueness_of(:username)} # needs a :user instance 
    it {should validate_uniqueness_of(:session_token)}

    subject(:user) {
      User.create(
        username: 'test1',
        password: 'password'
      )
    }

    it 'does not save passwords to the datebase' do
       test2 = User.create(username:'test2', password:'password2')
       expect(test2.password).to_not be('password2')
    end

    it 'encrypts password using BCrypt' do
      expect(BCrypt::Password).to receive(:create).with('password3')
      User.new(username:'test3', password:'password3')
    end



end