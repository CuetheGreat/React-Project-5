# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# User.create(username: 'TestUser', password: 'password', bio: 'Something interesting about test user', avatar: 'https://thumbs.dreamstime.com/b/image-smiling-man-who-has-idea-handsome-bearded-guy-sweater-just-came-up-great-thought-white-background-134071461.jpg')
attributes = [
  {
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
      { order: 2, step: 'Stir for 20 seconds and strain into a chilled coupe' },
      { order: 3, step: 'Express an orange peel and garnish' }
    ],
    glass: 'coupe',
    garnish: 'orange peel',
    image: 'https://cdn.shopify.com/s/files/1/0583/3185/products/Toronto_IMG_6726_800x.jpg?v=1461183146'
  },
  {
    name: '1934 COSMO',
    description: "A simple sour can be so different with the right base spirit. The 1934 Cosmo hits its stride with a complex and floral gin. Grab a bottle whose botanicals include multiple berries and flowers. We'd suggest Monkey 47.",
    ingredients_attributes: [
      { measure: '½ oz', kind: 'Raspberry Gum Syrup' },
      { measure: '2 oz', kind: 'gin' },
      { measure: '½ oz', kind: 'lemon juice' }
    ],
    instructions_attributes: [
      { order: 1, step: 'Add all ingredients to a cocktail shaker' },
      { order: 2, step: 'Add ice and shake hard for 20 seconds' },
      { order: 3, step: 'Strain into a chilled coupe' },
      { order: 4, step: 'Garnish with an orange twist' }
    ],
    glass: 'coupe',
    garnish: 'orange twist',
    image: 'https://cdn.shopify.com/s/files/1/0583/3185/products/1934CosmoShopify_5000x.png?v=1601269549'
  },
  {
    name: 'COCONUT + PASSIONFRUIT MOJITO',
    description: 'The ultimate cabana cocktail. Pick a high-character light rum.',
    ingredients_attributes: [
      { measure: '½ oz', kind: 'Toasted Coconut Syrup' },
      { measure: '¼ oz', kind: 'Tropical Passionfruit Syrup' },
      { measure: '2 oz', kind: 'light rum' },
      { measure: '¾ oz', kind: 'lime juice' },
      { measure: '3 oz', kind: 'club soda' },
      { measure: '5-6', kind: 'leaves fresh mint' }
    ],
    instructions_attributes: [
      { order: 1, step: 'Add all ingredients except club soda to a cocktail shaker ' },
      { order: 2, step: 'Add ice and short shake for 5 seconds' },
      { order: 3, step: 'Fine strain into a chilled highball filled with ice and club soda' }
    ],
    glass: 'highball',
    garnish: 'mint sprig',
    image: 'https://cdn.shopify.com/s/files/1/0583/3185/products/Coconut_PassionfruitMojito_5000x.jpg?v=1614055790'
  }
]

attributes.each do |attribute|
  Drink.create(attribute)
end
