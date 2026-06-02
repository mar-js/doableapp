import { csrfToken } from "../utils/csrf"

export default function Register({ action, emailAddress = "", loginPath }) {
  return (
    <>
      <h3>Register</h3>
      <form action={action} method="post" acceptCharset="UTF-8">
        <input type="hidden" name="authenticity_token" value={csrfToken()} />
        <input
          type="email"
          name="user[email_address]"
          required
          autoFocus
          autoComplete="username"
          placeholder="Enter your email address"
          defaultValue={emailAddress}
        />
        <br />
        <input
          type="password"
          name="user[password]"
          required
          autoComplete="current-password"
          placeholder="Enter your password"
          maxLength={72}
        />
        <br />
        <input type="submit" value="Sign up" />
      </form>
      <br />
      <a href={loginPath}>I already have an account</a>
    </>
  )
}
