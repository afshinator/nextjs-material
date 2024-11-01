'use client';

import { AppBar as MuiAppBar, Toolbar, Typography, IconButton, useTheme, useMediaQuery, Drawer, List, ListItem, ListItemText, ListItemIcon, Box } from '@mui/material';
import { useTheme as useNextTheme } from 'next-themes';
import { Sun, Moon, Menu, Home, Info, Mail } from 'lucide-react';
import { useState } from 'react';

export default function AppBar() {
  const theme = useTheme();
  const { setTheme, resolvedTheme } = useNextTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  const menuItems = [
    { text: 'Home', icon: <Home size={20} /> },
    { text: 'About', icon: <Info size={20} /> },
    { text: 'Contact', icon: <Mail size={20} /> },
  ];

  const drawer = (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <Box sx={{ width: 250 }}>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <MuiAppBar position="static" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setDrawerOpen(true)}
              sx={{ mr: 2 }}
            >
              <Menu size={20} />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
        </Box>
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Typography
                key={item.text}
                sx={{
                  cursor: 'pointer',
                  '&:hover': { opacity: 0.8 },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                {item.icon}
                {item.text}
              </Typography>
            ))}
          </Box>
        )}
        <IconButton 
          edge="end" 
          color="inherit" 
          onClick={toggleTheme}
          sx={{ ml: 2 }}
        >
          {resolvedTheme === 'dark' ? (
            <Sun size={20} />
          ) : (
            <Moon size={20} />
          )}
        </IconButton>
      </Toolbar>
      {drawer}
    </MuiAppBar>
  );
}