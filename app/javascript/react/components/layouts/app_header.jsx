import { csrfToken } from "../../utils/csrf"

export default function AppHeader({
  rootPath,
  signedIn,
  signOutPath,
  projectsPath,
  todosPath,
  showProjectsLink,
  showTodosLink
}) {
  return (
    <header>
      <a href={rootPath}>Doable</a>
      <br />
      {signedIn && (
        <>
          <form action={signOutPath} method="post" acceptCharset="UTF-8" style={{ display: "inline" }}>
            <input type="hidden" name="_method" value="delete" />
            <input type="hidden" name="authenticity_token" value={csrfToken()} />
            <button type="submit">Sign out</button>
          </form>
          <nav>
            {showProjectsLink && <a href={projectsPath}>Projects</a>}
            {showTodosLink && <a href={todosPath}>Todos</a>}
          </nav>
        </>
      )}
    </header>
  )
}
