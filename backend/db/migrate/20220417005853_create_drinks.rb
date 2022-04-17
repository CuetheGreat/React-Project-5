class CreateDrinks < ActiveRecord::Migration[7.0]
  def change
    create_table :drinks do |t|
      t.string :name
      t.string :description
      t.integer :ingredient_count
      t.integer :instruction_count
      t.string :glass
      t.string :garnish
      t.string :image
      t.timestamps
    end
  end
end
