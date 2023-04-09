import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color='inherit' to='/'>
        Think Tank Presents
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}