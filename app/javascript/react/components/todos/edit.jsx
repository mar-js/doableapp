import TodoForm from "./form"

export default function TodosEdit({ form, showPath, todosPath }) {
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
