import { csrfToken } from "../../utils/csrf"
import FormErrors from "../shared/FormErrors"

export default function ProjectForm({
  action,
  method = "post",
  name = "",
  active = false,
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
        <label htmlFor="project_name">Name</label>
        <input type="text" name="project[name]" id="project_name" defaultValue={name} />
      </div>
      <div>
        <label htmlFor="project_active">Active</label>
        <input type="hidden" name="project[active]" value="0" />
        <input
          type="checkbox"
          name="project[active]"
          id="project_active"
          value="1"
          defaultChecked={active}
        />
      </div>
      <div>
        <input type="submit" value={submitLabel} />
      </div>
    </form>
  )
}
