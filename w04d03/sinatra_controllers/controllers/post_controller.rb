class PostController < Sinatra::Base

	configure :development do 
		register Sinatra::Reloader
	end


	# home
	get '/' do

	"homepage"

	end


	# INDEX
	get '/posts' do

		"<h1>POST INDEX PAGE </h1>"

	end

	# CREATE 
	post '/posts' do

		"<h1>POST CREATE </h1>"

	end

	# SHOW
	get '/posts/:id' do

		"SHOW PAGE"

	end

	# UPDATE
	put '/post/:id' do

		"Update page"

	end

	# DELETE
	delete '/posts/:id' do

		"Delete page"


	end



end