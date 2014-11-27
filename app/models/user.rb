class User < ActiveRecord::Base
  has_many :flights, through: :reservations
  has_many :reservations
end
