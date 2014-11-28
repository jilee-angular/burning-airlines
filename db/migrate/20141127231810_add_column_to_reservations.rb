class AddColumnToReservations < ActiveRecord::Migration
  def change
    add_column :reservations, :column, :integer
  end
end
