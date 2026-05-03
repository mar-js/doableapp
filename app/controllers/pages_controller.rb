class PagesController < ApplicationController
  def home
    @projects = current_user.projects
    @todos = current_user.todos.includes(:project)
  end
end
