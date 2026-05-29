function csrfToken() {
  return document.querySelector('meta[name="csrf-token"]')?.content
}

export default function Login({
  action,
  emailAddress = "",
  forgotPasswordPath,
  registerPath
}) {
  return (
    <>
      <h2>Login</h2>
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
        <input
          type="password"
          name="password"
          required
          autoComplete="current-password"
          placeholder="Enter your password"
          maxLength={72}
        />
        <br />
        <input type="submit" value="Sign in" />
      </form>
      <br />
      <div>
        <a href={forgotPasswordPath}>Forgot password?</a>
        {" | "}
        <a href={registerPath}>Register</a>
      </div>
    </>
  )
}
