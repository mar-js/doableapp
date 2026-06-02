import { csrfToken } from "../../utils/csrf"

export default function DeleteButton({ action, label }) {
  return (
    <form action={action} method="post" acceptCharset="UTF-8" style={{ display: "inline" }}>
      <input type="hidden" name="_method" value="delete" />
      <input type="hidden" name="authenticity_token" value={csrfToken()} />
      <button type="submit">{label}</button>
    </form>
  )
}
