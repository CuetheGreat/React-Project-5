class Drink < ApplicationRecord
  has_many :ingredients
  has_many :instructions

  accepts_nested_attributes_for :instructions, :ingredients

  validates :name, presence: true, uniqueness: { case_sensitive: false }
  validates :description, :glass, :garnish, :image, presence: true

  before_create :set_instruction_count, :set_ingredient_count

  private

  def set_instruction_count
    self.instruction_count = instructions.length
  end

  def set_ingredient_count
    self.ingredient_count = ingredients.length
  end
end
