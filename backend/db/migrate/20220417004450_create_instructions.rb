class CreateInstructions < ActiveRecord::Migration[7.0]
  def change
    create_table :instructions do |t|
      t.integer :order
      t.string :step
      t.integer :drink_id

      t.timestamps
    end
  end
end
