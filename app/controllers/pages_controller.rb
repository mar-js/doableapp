class PagesController < ApplicationController
  def home
    @projects = Project.all
    @todos = Todo.all
  end
end
