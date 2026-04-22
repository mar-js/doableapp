class ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def show
    set_project
  end

  def new
    @project = Project.new()
  end

  def create
    @project = Project.new(project_params)

    if @project.save
      flash[:notice] = "Project CREATED successfully!"
      redirect_to project_path(@project)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    set_project
  end

  def update
    set_project

    if @project.update(project_params)
      flash[:notice] = "Project UPDATED successfully!"
      redirect_to project_path(@project)
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    set_project

    @project.destroy
    flash[:notice] = "Project DELETED successfully!"
    redirect_to project_path()
  end

  private
    def set_project
      @project = Project.find(params[:id])
    end

    def project_params
      params.require(:project).permit(:name, :active)
    end
end
