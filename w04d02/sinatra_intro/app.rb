require 'sinatra'
require_relative 'sinatra/reloader' if development?
require_relative "./TodoManager.rb"



# INDEX - all the data
get '/todos/:id' do

	TodoManager.index
end

# CREATE - create a new todo
post '/todos/:id' do
	new_todo = params[:todo]
	TodoManager.create(new_todo)
	end

# SHOW - show a single record
get '/todos/:id' do

	id = parms[:id].to_i
	TodoManager.show(id)
	
end


# UPDATE - update a single record
put '/todos/:id' do
	id = parms[:id].to_i
	updated_todo = parms[:todo]
	TodoManager.update(id, updated_todo)
	end

# DESTROY - delete a single record
Delete 'todos/id' do
	id = parms[:id].to_i
	updated_todo = parms[:update] 
	TodoManager.update(id, updated_todo)
	end