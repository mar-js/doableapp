import DeleteButton from "./shared/DeleteButton"
import TodoCard from "./shared/TodoCard"

export default function TodoShow({ todo, editPath, todosPath, destroyPath }) {
  return (
    <>
      <h2>{todo.name}</h2>
      <TodoCard {...todo} />
      <div>
        <a href={editPath}>Edit this todo</a>
        {" | "}
        <a href={todosPath}>Back to todos</a>
        {" "}
        <DeleteButton action={destroyPath} label="Destroy this todo" />
      </div>
    </>
  )
}
