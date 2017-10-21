class House < ApplicationRecord
  has_many :cat_houses
  has_many :cats, through: :cat_houses

  has_many :people

end
