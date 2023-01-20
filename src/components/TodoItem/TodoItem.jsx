import { ListItem, ListItemButton } from '@mui/material';
import { useState } from 'react';
import TodoText from './TodoText';
import TodoAction from './TodoAction';

function TodoItem({ todo, deleteTodo, completeTodo, editTodo }) {
  const [isEditingMode, setIsEditingMode] = useState(false);
  const { completed, task, id } = todo;
  const [text, setText] = useState(task);

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  const handleEditModeToggle = () => {
    setIsEditingMode((state) => !state);
  };

  const handleTodoTextChange = (e) => {
    console.log(text);
    setText(e.target.value);
  };

  const submitTextEditing = () => {
    handleEditModeToggle();
    editTodo(id, text);
    console.log(text);
  };

  return (
    <ListItem
      secondaryAction={
        <>
          <TodoAction
            type={isEditingMode ? 'save' : 'edit'}
            aria-label='update task'
            onClick={isEditingMode ? submitTextEditing : handleEditModeToggle}
          />
          <TodoAction
            type='clear'
            aria-label='update task'
            onClick={handleDeleteTodo}
          />
        </>
      }
      disablePadding
    >
      <ListItemButton>
        <TodoText
          isEditingMode={isEditingMode}
          id={id}
          todoText={text}
          completed={completed}
          completeTodo={completeTodo}
          handleTodoTextChange={handleTodoTextChange}
          text={text}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default TodoItem;
