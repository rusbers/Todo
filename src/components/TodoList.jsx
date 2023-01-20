import { List } from '@mui/material';
import TodoItem from './TodoItem/TodoItem';

function TodoList({ todos, deleteTodo, completeTodo, editTodo }) {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          editTodo={editTodo}
        />
      ))}
    </List>
  );
}

export default TodoList;
