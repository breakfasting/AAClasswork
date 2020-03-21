# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



u1 = User.create(username: 'wayne')
u2 = User.create(username: 'darrick')
u3 = User.create(username: 'mike')
u4 = User.create(username: 'vanessa')

a1 = Artwork.create(title: 'mastapiece', image_url: '123.com', artist_id: u1.id)
a2 = Artwork.create(title: 'mastapiece', image_url: '123.com', artist_id: u2.id)
a3 = Artwork.create(title: 'MasterPiece3', image_url: '345.com', artist_id: u3.id)
a4 = Artwork.create(title: 'MasterPiece4', image_url: '345.com', artist_id: u4.id)

ArtworkShare.create(artwork_id: a2.id, viewer_id: u1.id)
ArtworkShare.create(artwork_id: a1.id, viewer_id: u2.id)
ArtworkShare.create(artwork_id: a4.id, viewer_id: u1.id)

c1 = Comment.create(body:"This is fantastic artwork", author_id: u1.id, artwork_id: a2.id)
c2 = Comment.create(body:"This is bad artwork", author_id: u2.id, artwork_id: a3.id)
c3 = Comment.create(body:"This is average artwork", author_id: u3.id, artwork_id: a4.id)

l1 = Like.create(user_id: u1.id , liked_item_id: a1.id, liked_item_type: 'Artwork')
l2 = Like.create(user_id: u2.id , liked_item_id: a1.id, liked_item_type: 'Artwork')
l3 = Like.create(user_id: u1.id , liked_item_id: c2.id, liked_item_type: 'Comment')
l4 = Like.create(user_id: u1.id , liked_item_id: c1.id, liked_item_type: 'Comment')
l5 = Like.create(user_id: u1.id , liked_item_id: c3.id, liked_item_type: 'Comment')
l6 = Like.create(user_id: u4.id , liked_item_id: a1.id, liked_item_type: 'Artwork')
