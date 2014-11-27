class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.string :flight_id
      t.string :user_id
      t.string :reservation_number

      t.timestamps
    end
  end
end
