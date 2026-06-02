import TodoCard from "./card"

export default function TodosIndex({ todos, newTodoPath }) {
  return (
    <>
      <h3>Todos</h3>
      <div id="todos">
        {todos.map((todo) => (
          <TodoCard key={todo.id} {...todo} />
        ))}
      </div>
      <a href={newTodoPath}>New todo</a>
    </>
  )
}
