import { csrfToken } from "../../utils/csrf"
import FormErrors from "../shared/FormErrors"

export default function TodoForm({
  action,
  method = "post",
  name = "",
  description = "",
  completed = false,
  priority = "",
  projectId = "",
  projects = [],
  errorsTitle,
  errors = [],
  submitLabel
}) {
  return (
    <form action={action} method="post" acceptCharset="UTF-8">
      {method !== "post" && <input type="hidden" name="_method" value={method} />}
      <input type="hidden" name="authenticity_token" value={csrfToken()} />
      <FormErrors title={errorsTitle} messages={errors} />
      <div>
        <label htmlFor="todo_name">Name</label>
        <input type="text" name="todo[name]" id="todo_name" defaultValue={name} />
      </div>
      <div>
        <label htmlFor="todo_description">Description</label>
        <textarea name="todo[description]" id="todo_description" defaultValue={description} />
      </div>
      <div>
        <label htmlFor="todo_completed">Completed</label>
        <input type="hidden" name="todo[completed]" value="0" />
        <input
          type="checkbox"
          name="todo[completed]"
          id="todo_completed"
          value="1"
          defaultChecked={completed}
        />
      </div>
      <div>
        <label htmlFor="todo_priority">Priority</label>
        <input type="number" name="todo[priority]" id="todo_priority" defaultValue={priority} />
      </div>
      <div>
        <label htmlFor="todo_project_id">Project</label>
        <select name="todo[project_id]" id="todo_project_id" defaultValue={projectId}>
          <option value="">Select a project</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input type="submit" value={submitLabel} />
      </div>
    </form>
  )
}
