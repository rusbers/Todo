import { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useStyles } from './theme';

function Form({ addNewTodo }) {
  const [value, setValue] = useState('');
  const classes = useStyles();

  const handleTodoCreation = (e) => {
    e.preventDefault();
    if (value.length < 3) return;
    addNewTodo(value);
    setValue('');
  };

  return (
    <form className={classes.form} onSubmit={handleTodoCreation}>
      <TextField
        onChange={(e) => setValue(e.target.value)}
        value={value}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton type='submit'>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        aria-label='Add a new task'
        fullWidth
        placeholder='New task?'
      />
    </form>
  );
}

export default Form;
