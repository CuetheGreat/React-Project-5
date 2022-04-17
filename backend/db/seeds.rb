# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# User.create(username: 'TestUser', password: 'password', bio: 'Something interesting about test user', avatar: 'https://thumbs.dreamstime.com/b/image-smiling-man-who-has-idea-handsome-bearded-guy-sweater-just-came-up-great-thought-white-background-134071461.jpg')
attributes = {
  name: 'TORONTO',
  description: 'This sophisticated cocktail is essentially an Old Fashioned emboldened with a touch of fernet.',
  ingredients_attributes:
  [
    { measure: '¼ oz', kind: 'Classic Gum Syrup' },
    { measure: '2 oz',  kind: 'rye whiskey' },
    { measure: '¼ oz',  kind: 'fernet' },
    { measure: '2 dashes', kind: 'aromatic bitters' }
  ],
  instructions_attributes: [
    { order: 1, step: 'Add all to a mixing glass with ice' },
    {  order: 2, step: 'Stir for 20 seconds and strain into a chilled coupe' },
    {  order: 3, step: 'Express an orange peel and garnish' }
  ],
  glass: 'coupe',
  garnish: 'orange peel',
  image: 'url'
}

drink = Drink.create(attributes)

puts drink.valid?
