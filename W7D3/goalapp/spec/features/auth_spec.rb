require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
    background :each do  #background => before
        visit new_user_url
    end
    scenario 'has a new user page' do
        # save_and_open_page
        expect(page).to have_content('create new user') 
    end
    feature 'signing up a user' do

        scenario 'shows username on the homepage after signup' do
            fill_in 'user[username]', with: 'horserat'
            fill_in 'user[password]', with: 'roar123'
            click_button 'Submit'
            expect(page).to have_content('horserat')
            # save_and_open_page
        end

    end
end

feature 'logging in' do
  scenario 'shows username on the homepage after login'

end

feature 'logging out' do
  scenario 'begins with a logged out state'

  scenario 'doesn\'t show username on the homepage after logout'

end