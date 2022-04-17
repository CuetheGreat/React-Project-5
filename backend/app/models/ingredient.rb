class Ingredient < ApplicationRecord
  belongs_to :drink
  validates :measure, :kind, presence: true
end
