class CreateHosts < ActiveRecord::Migration
  def change
    create_table :hosts do |t|
      t.string :email
      t.string :firstName
      t.string :lastName
      t.string :location
      t.string :title
      t.string :des
      t.string :perDes

      t.timestamps
    end
  end
end
