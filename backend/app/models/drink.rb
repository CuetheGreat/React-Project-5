class Drink < ApplicationRecord
  has_many :ingredients, dependent: :destroy
  has_many :instructions, dependent: :destroy

  accepts_nested_attributes_for :instructions, :ingredients

  validates :name, presence: true, uniqueness: { case_sensitive: false }
  validates :description, :glass, :garnish, :image, presence: true

  before_create :generate_slug
  after_save :update_instruction_count, :update_ingredient_count

  private

  def update_instruction_count
    update_column(:instruction_count, instructions.size)
  end

  def update_ingredient_count
    update_column(:ingredient_count, ingredients.size)
  end

  def generate_slug
    base_slug = name.to_s.gsub(/['`]/, '').parameterize
    slug_candidate = base_slug
    count = 2
    while Drink.exists?(slug: slug_candidate)
      slug_candidate = "#{base_slug}-#{count}"
      count += 1
    end
    self.slug = slug_candidate
  end
end
