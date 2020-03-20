# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



u1 = User.create(username: 'wayne')
u2 = User.create(username: 'darrick')

a1 = Artwork.create(title: 'mastapiece', image_url: '123.com', artist_id: u1.id)
a2 = Artwork.create(title: 'mastapiece', image_url: '123.com', artist_id: u2.id)

ArtworkShare.create(artwork_id: a2.id, viewer_id: u1.id)
ArtworkShare.create(artwork_id: a1.id, viewer_id: a2.id)
