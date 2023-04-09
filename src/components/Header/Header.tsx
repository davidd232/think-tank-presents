import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';
import { useContext } from "react";

import { app, auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from "../../services/Auth/AuthContext";
import { Logout } from '../Logout/Logout';
  
export function Header() {
  const { user } = useContext(AuthContext)


  return (
      <AppBar sx={{ bgcolor: "black" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>  
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            Think Tank Presents
          </Typography>
          {!user && 
            <IconButton 
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link style={{textDecoration: 'none', color: 'inherit'}} to='/login'>Login</Link>
            </IconButton>
          }
          {user && <Logout />}
        </Toolbar>
      </AppBar>
  );
}