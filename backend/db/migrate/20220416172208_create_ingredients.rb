class CreateIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :ingredients do |t|
      t.string :measure
      t.string :type

      t.timestamps
    end
  end
end
