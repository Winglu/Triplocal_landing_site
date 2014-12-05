class CreateVisitors < ActiveRecord::Migration
  def change
    create_table :visitors do |t|
      t.string :email
      t.string :code
      t.string :invite_code
      t.integer :shares

      t.timestamps
    end
  end
end
