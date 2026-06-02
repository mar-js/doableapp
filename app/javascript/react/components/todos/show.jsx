import DeleteButton from "../shared/delete_button"
import TodoCard from "./card"

export default function TodosShow({ todo, editPath, todosPath, destroyPath }) {
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
