class Ingredient < ApplicationRecord
  belongs_to :drink, class_name: 'drink', foreign_key: 'drink_id'
end
