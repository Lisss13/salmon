class CreatePriseLists < ActiveRecord::Migration[5.2]
  def change
    create_table :prise_lists do |t|
      t.string :file

      t.timestamps
    end
  end
end
