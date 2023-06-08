import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Avatar,
} from '@mui/material';

import { AccountCircle,Notifications } from '@mui/icons-material';
const Topbar = () => {
    return (
      <AppBar position="static" sx={{ marginBottom: '20px' }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div">
            Dashboard
          </Typography>
  
          <div>
            <IconButton color="inherit" size="large">
              <Badge badgeContent={3} color="error">
                <Notifications />
              </Badge>
            </IconButton>
  
            <IconButton color="inherit" size="large">
              <Avatar alt="User Profile" src="/path/to/profile-picture.jpg" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  };

export default Topbar;
