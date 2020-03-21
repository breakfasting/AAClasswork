class Like < ApplicationRecord
  validates :user_id, uniqueness: {scope: [:liked_item_id, :liked_item_type], message: "Liked item for this user already exists!"}
  validates :user_id, :liked_item_type, :liked_item_id, presence: true


  belongs_to :liked_item,
    polymorphic: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

end
