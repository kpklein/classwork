class Planet < ApplicationRecord
	validates :name, :population, :flag_url, :lang, :president, presence: true

	validates :population, numericality: { greater_than: 1000, less_than: 5000, message: "Yo! your planet is either too big or too small!!" }

	validates :president, length: {minimum: 4, maximum: 20, message: "Sorry your president name is not quite right" }

	validates :flag_url, format: { with: URI.regexp }

end
