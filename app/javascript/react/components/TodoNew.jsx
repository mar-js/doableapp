import TodoForm from "./forms/TodoForm"

export default function TodoNew({ form, todosPath }) {
  return (
    <>
      <h3>New todo</h3>
      <TodoForm {...form} />
      <br />
      <div>
        <a href={todosPath}>Back to todos</a>
      </div>
    </>
  )
}
