# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(username: 'TestUser', password: 'password', bio: 'Something interesting about test user', avatar: 'https://thumbs.dreamstime.com/b/image-smiling-man-who-has-idea-handsome-bearded-guy-sweater-just-came-up-great-thought-white-background-134071461.jpg')
