import { Box, Checkbox, TextField, ListItemText } from '@mui/material';
import { useStyles } from '../theme';
import { useState } from 'react';

export default function TodoText({
  isEditingMode,
  id,
  text,
  completed,
  completeTodo,
  handleTodoTextChange,
}) {
  const classes = useStyles();
  const [checked, setChecked] = useState(completed);

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
    completeTodo(id, e.target.checked);
  };

  const Text = () => (
    <ListItemText
      className={checked ? classes.strikeout : ''}
      id={id}
      primary={text}
    />
  );

  const Input = () => (
    <TextField
      name='todo-text'
      className={classes.textFieldEditingMode}
      value={text}
      variant='standard'
      id={id}
      onChange={(e) => handleTodoTextChange(e)}
    />
  );

  return (
    <Box display='flex' alignItems='center'>
      <Checkbox
        onChange={handleCheckboxChange}
        disabled={isEditingMode}
        disableRipple
        aria-labelledby={id}
        checked={checked}
        value={checked}
      />
      {isEditingMode ? <Input /> : <Text />}
    </Box>
  );
}
