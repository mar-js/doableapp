import { csrfToken } from "../utils/csrf"

export default function ForgotPassword({ action, emailAddress = "", alert }) {
  return (
    <>
      <h1>Forgot your password?</h1>
      {alert && <div style={{ color: "red" }}>{alert}</div>}
      <form action={action} method="post" acceptCharset="UTF-8">
        <input type="hidden" name="authenticity_token" value={csrfToken()} />
        <input
          type="email"
          name="email_address"
          required
          autoFocus
          autoComplete="username"
          placeholder="Enter your email address"
          defaultValue={emailAddress}
        />
        <br />
        <input type="submit" value="Email reset instructions" />
      </form>
    </>
  )
}
