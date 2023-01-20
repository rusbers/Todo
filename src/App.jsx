import { Container } from '@mui/material';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  addItem,
  deleteItem,
  completeItem,
  editItemDescription,
} from './items';

// Add +
// Delete +
// Complete +
// Edit

function App() {
  const [todos, setTodos] = useState([
    {
      task: 'some task text',
      completed: true,
      id: uuidv4(),
    },
    {
      task: 'another task',
      completed: false,
      id: uuidv4(),
    },
  ]);

  const addNewTodo = (task) => {
    const newTodo = {
      task,
      completed: false,
      id: uuidv4(),
    };

    setTodos(addItem(todos, newTodo));
  };

  const deleteTodo = (id) => {
    setTodos(deleteItem(todos, id));
  };

  const completeTodo = (todoId, isCompleted) => {
    setTodos(completeItem(todos, todoId, isCompleted));
  };

  const editTodo = (todoId, text) => {
    setTodos(editItemDescription(todos, todoId, text));
  };

  return (
    <Container>
      <Form addNewTodo={addNewTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        editTodo={editTodo}
      />
    </Container>
  );
}

export default App;
