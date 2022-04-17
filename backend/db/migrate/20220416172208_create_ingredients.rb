class CreateIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :ingredients do |t|
      t.string :measure
      t.string :kind
      t.integer :drink_id

      t.timestamps
    end
  end
end
