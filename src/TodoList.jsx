import { TodoItem } from './TodoItem';

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
        {todos.length === 0 && "Your To-do List is empty"}
        {todos.map(todo => {
          return <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        })}
      </ul>
    )
}