class DrinkSerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :description, :ingredient_count, :instruction_count, :glass, :garnish, :image

  has_many :ingredients, serializer: IngredientSerializer
  has_many :instructions, serializer: InstructionsSerializer
end
