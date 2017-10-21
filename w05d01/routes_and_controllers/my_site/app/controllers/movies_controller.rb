class MoviesController < ApplicationController
  
  def index
    @movie = Movie.all


  end

  def show
    
    @movie = Movie.find(params[:id])

  end

  def edit

    @movie = Movie.find(params[:id])


  end

  def create
    new_movie = Movie.new(movie_params)
    new_movie.save
    redirect_to "/movies"
  end

  def new
    @movie = Movie.new
  end

  def update
    movie = Movie.find(params[:id])
    movie.update(movie_params)
    redirect_to "/movies"

  end

  def destroy
  @movies = Movie.destroy(params[:id])
  redirect_to "/movies"   

  end





  
end
