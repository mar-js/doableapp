export default function Home({ projects, todos }) {
  return (
    <>
      <h1>Doable</h1>
      <main>
        <section>
          <h2>Projects</h2>
          <ol>
            {projects.map((project) => (
              <li key={project.id}>{project.name}</li>
            ))}
          </ol>
        </section>
        <section>
          <h2>Todos</h2>
          <ol>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.name}</li>
            ))}
          </ol>
        </section>
      </main>
    </>
  )
}
