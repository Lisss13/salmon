class CreateFeedbacks < ActiveRecord::Migration[5.2]
  def change
    create_table :feedbacks do |t|
      t.string :name
      t.string :email
      t.string :organization
      t.string :surname
      t.string :phone

      t.timestamps
    end
  end
end
