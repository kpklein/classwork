# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


c1 = Customer.create!(name: "Klein Pereira", age: 23)
c2 = Customer.create!(name: "Jack Jhones", age: 23)
c3 = Customer.create!(name: "Tom David", age: 23)
c4 = Customer.create!(name: "Rui Tims", age: 23)


Order.create!(order_total: 300, address: "Some address....doesnt matter", customer_id: c1.id)
Order.create!(order_total: 100, address: "Some address....doesnt matter", customer_id: c1.id)
Order.create!(order_total: 30, address: "Some address....doesnt matter", customer_id: c2.id)
Order.create!(order_total: 500, address: "Some address....doesnt matter", customer_id: c2.id)
Order.create!(order_total: 10, address: "Some address....doesnt matter", customer_id: c1.id)

puts "Finished Seeding..."