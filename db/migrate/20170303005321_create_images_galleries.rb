class CreateImagesGalleries < ActiveRecord::Migration
  def change
    create_table :galleries_images, :id => false do |t|
      t.integer :image_id
      t.integer :gallery_id
    end
  end
end
