class DrinkSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :ingredient_count, :instruction_count, :ingredients, :instructions, :glass,
             :garnish, :image

  def ingredients
    object.ingredients.map do |ingredient|
      IngredientSerializer.new(ingredient)
    end
  end

  def instructions
    object.instructions.map do |instruction|
      InstructionsSerializer.new(instruction)
    end
  end
end
