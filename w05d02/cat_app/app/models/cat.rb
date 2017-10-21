class Cat < ApplicationRecord
  has_many :cat_houses
  has_many :houses, through: :cat_houses

end
