class CreateSuggesthosts < ActiveRecord::Migration
  def change
    create_table :suggesthosts do |t|
      t.string :name
      t.string :email

      t.timestamps
    end
  end
end
