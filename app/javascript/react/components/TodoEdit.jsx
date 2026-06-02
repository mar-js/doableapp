import TodoForm from "./forms/TodoForm"

export default function TodoEdit({ form, showPath, todosPath }) {
  return (
    <>
      <h3>Editing todo</h3>
      <TodoForm {...form} />
      <br />
      <div>
        <a href={showPath}>Show this todo</a>
        {" | "}
        <a href={todosPath}>Back to todos</a>
      </div>
    </>
  )
}
