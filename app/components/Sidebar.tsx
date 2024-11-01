'use client';

import { List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import { Home, Person, Settings } from '@mui/icons-material';

export default function Sidebar() {
  const menuItems = [
    { text: 'Home', icon: <Home /> },
    { text: 'Profile', icon: <Person /> },
    { text: 'Settings', icon: <Settings /> },
  ];

  return (
    <Box sx={{ mt: '64px' }}>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}