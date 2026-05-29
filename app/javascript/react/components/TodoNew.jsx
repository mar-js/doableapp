import TodoForm from "./forms/TodoForm"

export default function TodoNew({ form, todosPath }) {
  return (
    <>
      <h1>New todo</h1>
      <TodoForm {...form} />
      <br />
      <div>
        <a href={todosPath}>Back to todos</a>
      </div>
    </>
  )
}
