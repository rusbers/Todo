import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const theme = createTheme({
  spacing: 8,
});

const useStyles = makeStyles(() => ({
  form: {
    margin: theme.spacing(1, 0),
  },
  strikeout: {
    textDecoration: 'line-through',
  },
  formControlEditing: {
    marginRight: `${theme.spacing(0)} !important`,
  },
}));

export { useStyles };
