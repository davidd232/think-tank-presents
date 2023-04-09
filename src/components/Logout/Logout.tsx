import { useContext } from 'react';
import { AuthContext } from '../../services/Auth/AuthContext';
import IconButton from "@mui/material/IconButton";

export function Logout() {
  const { setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
  }
  return (
    <IconButton
      size="small"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={handleLogout}
    >
      Logout
    </IconButton>
  )
}