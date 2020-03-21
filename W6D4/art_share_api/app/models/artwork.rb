class Artwork < ApplicationRecord
  validates :title, :image_url, :artist_id, presence: true
  validates :artist_id, uniqueness: { scope: :title, message: "should have unique artist title combination" }

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User

  has_many :shared_artworks,
    foreign_key: :artwork_id,
    class_name: :ArtworkShare

  has_many :shared_viewers,
    through: :shared_artworks,
    source: :viewer

  has_many :comments,
    foreign_key: :artwork_id,
    class_name: 'Comment',
    dependent: :destroy

  has_many :likes, 
    as: :liked_item

  has_many :likers,
    through: :likes,
    source: :user
end
