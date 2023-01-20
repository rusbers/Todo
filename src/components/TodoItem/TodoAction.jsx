import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const icons = {
  edit: EditIcon,
  save: SaveIcon,
  clear: ClearIcon
}

export default function TodoAction({type, ...rest }) {
  const Icon = icons[type] || icons['clear'];

  return (
    <IconButton edge='end' {...rest}>
      <Icon />
    </IconButton>
  );
}
