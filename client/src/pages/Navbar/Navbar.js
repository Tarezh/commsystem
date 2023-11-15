import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./Navbar.css"
const Navbar = (props) => {
  const user = props.user;
  const logout = () => {
		window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
	};

  return (
    <Box class="container" sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ width: '100%' }}>
        <Toolbar>
          <Typography>
            MAIL DELIVERY
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <div className="username"> {user.name}</div>
              <img
                src={user.picture}
                alt="profile"
                className="profile_img"
              />
              <div className="btn">
              <Button variant="contained" onClick={logout}>
                Log Out
              </Button>
              </div>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
