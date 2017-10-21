class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.float :duration
      t.string :title

      t.timestamps
    end
  end
end
