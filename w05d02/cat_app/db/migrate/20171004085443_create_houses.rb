class CreateHouses < ActiveRecord::Migration[5.1]
  def change
    create_table :houses do |t|
      t.string :post_code
      t.integer :door_no
      t.string :street_name

      t.timestamps
    end
  end
end
