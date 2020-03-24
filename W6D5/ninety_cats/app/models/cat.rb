class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper

  CAT_COLORS = ['black', 'brown', 'grey', 'white']
  
  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :color, inclusion: { in: CAT_COLORS, message: "please select a valid cat color" }
  validates :sex, inclusion: { in: %w(M F), message: "please select M or F" }

    def age
        time_ago_in_words(self.birth_date)
    end

    def all_colors
        CAT_COLORS
    end
end

