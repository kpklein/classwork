class BooksController < ApplicationController
   def index
    @books = current_user.books
  end

  def show
    @book = current_user.books.find(params[:id])
  end

  def new
    @book = current_user.books.new
  end

  def create

    new_book = current_user.books.create(book_params)
    new_book.save

    redirect_to new_book

  end

  def edit
    @book = current_user.books.find(params[:id])
  end

  def update

    book = current_user.books.find(params[:id])
    book.update(book_params)

    redirect_to book
  end

  def destroy
    current_user.books.destroy(params[:id])
    redirect_to books_url
  end

  protected
  def book_params
    params.require(:book).permit(:title, :author, :img_url)
  end
end
