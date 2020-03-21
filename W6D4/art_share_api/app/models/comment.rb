class Comment < ApplicationRecord
  validates :author_id, :body, :artwork_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :artwork,
    foreign_key: :artwork_id,
    class_name: 'Artwork'

  has_many :likes, 
    as: :liked_item

  has_many :likers,
    through: :likes,
    source: :user
end
