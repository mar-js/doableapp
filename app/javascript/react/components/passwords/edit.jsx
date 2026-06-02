import { csrfToken } from "../../utils/csrf"

export default function PasswordsEdit({ action, alert }) {
  return (
    <>
      <h3>Update your password</h3>
      {alert && <div style={{ color: "red" }}>{alert}</div>}
      <form action={action} method="post" acceptCharset="UTF-8">
        <input type="hidden" name="_method" value="put" />
        <input type="hidden" name="authenticity_token" value={csrfToken()} />
        <input
          type="password"
          name="password"
          required
          autoComplete="new-password"
          placeholder="Enter new password"
          maxLength={72}
        />
        <br />
        <input
          type="password"
          name="password_confirmation"
          required
          autoComplete="new-password"
          placeholder="Repeat new password"
          maxLength={72}
        />
        <br />
        <input type="submit" value="Save" />
      </form>
    </>
  )
}
