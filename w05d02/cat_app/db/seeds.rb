# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


c1 = Cat.create!(name: "Fluffy", color: "white")
c2 = Cat.create!(name: "Fudge", color: "brown")
c3 = Cat.create!(name: "Boris", color: "black")

h1 = House.create!(post_code: "SW11", street_name: "My Street", door_no: 12)

h2 = House.create!(post_code: "SW90", street_name: "My Other Street", door_no: 1)

CatHouse.create!(cat_id: c1.id, house_id: h1.id)
CatHouse.create!(cat_id: c1.id, house_id: h2.id)
CatHouse.create!(cat_id: c2.id, house_id: h2.id)
CatHouse.create!(cat_id: c3.id, house_id: h1.id)
CatHouse.create!(cat_id: c3.id, house_id: h2.id)

Person.create!(name: "Niall", age: 25, house_id: h1.id)
Person.create!(name: "Ollie", age: 92, house_id: h1.id)
Person.create!(name: "Tim", age: 54, house_id: h2.id)