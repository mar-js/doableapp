class TodosController < ApplicationController
  before_action :require_authentication
  before_action :set_project, only: %i[create]
  before_action :set_todo, only: %i[show edit update destroy]

  def index
    @todos = current_user.todos.includes(:project).order(created_at: :desc)
  end

  def show
  end

  def new
    @todo = Todo.new
  end

  def create
    @todo = @project.todos.build(todo_params)

    if @todo.save
      flash[:notice] = "Todo CREATED successfully!"
      redirect_to todo_path(@todo)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @todo.update(todo_params)
      flash[:notice] = "Todo UPDATED successfully!"
      redirect_to todo_path(@todo)
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @todo.destroy
    flash[:notice] = "Todo DESTROYED successfully!"
    redirect_to todos_path
  end

  private

  def set_project
    @project = current_user.projects.find_by(id: params.dig(:todo, :project_id)) || current_user.projects.first
  end

  def set_todo
    @todo = Todo.joins(:project).where(projects: { user_id: current_user.id }).find_by(id: params[:id])
  end

  def todo_params
    params.require(:todo).permit(:name, :description, :priority, :completed)
  end
end
