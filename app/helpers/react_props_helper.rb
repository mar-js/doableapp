module ReactPropsHelper
  def react_project_card(project, show_view_link:)
    {
      id: project.id,
      domId: dom_id(project),
      name: project.name,
      active: project.active,
      viewPath: project_path(project),
      showViewLink: show_view_link
    }
  end

  def react_todo_card(todo, show_view_link:)
    {
      id: todo.id,
      domId: dom_id(todo),
      name: todo.name,
      description: todo.description,
      completed: todo.completed,
      priority: todo.priority,
      projectName: todo.project.name,
      projectPath: project_path(todo.project),
      viewPath: todo_path(todo),
      showViewLink: show_view_link
    }
  end

  def react_project_form(project)
    {
      action: project.persisted? ? project_path(project) : projects_path,
      method: project.persisted? ? "patch" : "post",
      name: project.name,
      active: project.active,
      errorsTitle: "#{pluralize(project.errors.count, 'error')} prohibited",
      errors: project.errors.full_messages,
      submitLabel: project.persisted? ? "Update Project" : "Create Project"
    }
  end

  def react_todo_form(todo)
    {
      action: todo.persisted? ? todo_path(todo) : todos_path,
      method: todo.persisted? ? "patch" : "post",
      name: todo.name,
      description: todo.description,
      completed: todo.completed,
      priority: todo.priority,
      projectId: todo.project_id,
      projects: current_user.projects.map { |project| { id: project.id, name: project.name } },
      errorsTitle: "#{pluralize(todo.errors.count, 'error')} prohibited this todo from being saved:",
      errors: todo.errors.map(&:full_message),
      submitLabel: todo.persisted? ? "Update Todo" : "Create Todo"
    }
  end

  def react_app_header_props
    {
      rootPath: root_path,
      signedIn: Current.session.present?,
      signOutPath: session_path,
      projectsPath: projects_path,
      todosPath: todos_path,
      showProjectsLink: !current_page?(controller: "projects"),
      showTodosLink: current_user&.projects&.any? && !current_page?(controller: "todos")
    }
  end
end
