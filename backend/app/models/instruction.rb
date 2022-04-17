class Instruction < ApplicationRecord
  validates :step, :order, presence: true
  belongs_to :drink
end
