# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Airplane.create(name: "Airbus A319")

user1 = User.create(first_name: "Joe", last_name: "Bloggs")
user2 = User.create(first_name: "Steve", last_name: "Smith")

flight = Flight.new(number: "111", origin: "SYD", destination: "MEL")
flight.reservations.new(user_id: user1.id)
flight.reservations.new(user_id: user2.id)
flight.save

flight = Flight.new(number: "222", origin: "LAX", destination: "LHR")
flight.reservations.new(user_id: user1.id)
flight.reservations.new(user_id: user2.id)
flight.save