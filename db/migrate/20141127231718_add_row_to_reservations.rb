class AddRowToReservations < ActiveRecord::Migration
  def change
    add_column :reservations, :row, :string
  end
end
