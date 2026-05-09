class TodosController < ApplicationController
  before_action :require_authentication
  before_action :set_project, only: %i[index new create]
  before_action :set_todo, only: %i[show edit update destroy]

  def index
    @todos = @project.todos.includes(:project).order(created_at: :desc)
  end

  def show
  end

  def new
    @todo = @project.todos.new
  end

  def create
    @todo = @project.todos.build(todo_params)

    if @todo.save
      flash[:notice] = "Todo CREATED successfully!"
      redirect_to project_todo_path(@project, @todo)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @todo.update(todo_params)
      flash[:notice] = "Todo UPDATED successfully!"
      redirect_to project_todo_path(@todo.project, @todo)
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    project = @todo.project
    @todo.destroy
    flash[:notice] = "Todo DESTROYED successfully!"
    redirect_to project_todos_path(project)
  end

  private

  def set_project
    @project = current_user.projects.find_by(params[:id])
  end

  def set_todo
    @todo = Todo.joins(:project).where(projects: { user_id: current_user.id }).find_by(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:name, :description, :priority, :completed)
  end
end
