class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :liked_item_id, null: false
      t.string :liked_item_type, null: false
      t.timestamps
    end
    add_index :likes, :user_id
    add_index :likes, [:liked_item_id, :liked_item_type]
    add_index :likes, [:user_id, :liked_item_id, :liked_item_type], unique: true
  end
end
