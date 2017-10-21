class StaticController < ApplicationController

	def home
		@books = Book.all
		render template: "books/index"
	end

end