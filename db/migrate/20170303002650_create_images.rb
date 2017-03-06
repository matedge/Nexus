class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.text :title
      t.text :url
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
