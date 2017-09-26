require 'sinatra'
require_relative "./TodoManager.rb"


get '/todos/:id' do

	TodoManager.index
end

get '/todos/:id' do

	"CREATE"
end

get '/todos/:id' do

	id = parms[:id] 
	"SHOW"
end

get '/todos/:id' do
	id = parms[:id] 
	"UPDATE"
end

get '/todos/:id' do
	id = parms[:id] 
	"DELETE"
end