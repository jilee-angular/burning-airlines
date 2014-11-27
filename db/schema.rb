# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141127231810) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "airplanes", force: true do |t|
    t.string   "name"
    t.string   "row"
    t.string   "column"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "flights", force: true do |t|
    t.string   "number"
    t.string   "origin"
    t.string   "destination"
    t.datetime "date"
    t.string   "plane"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "reservations", force: true do |t|
    t.string   "flight_id"
    t.string   "user_id"
    t.string   "reservation_number"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "row"
    t.integer  "column"
  end

  create_table "users", force: true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.datetime "dob"
    t.string   "phone"
    t.string   "email"
    t.boolean  "administrator"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
