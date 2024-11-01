'use client';

import { AppBar as MuiAppBar, Toolbar, Typography, IconButton, useTheme, useMediaQuery, Box } from '@mui/material';
import { useTheme as useNextTheme } from 'next-themes';
import { Sun, Moon, Menu } from 'lucide-react';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

export default function AppBar() {
  const theme = useTheme();
  const { setTheme, resolvedTheme } = useNextTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

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
          <Typography variant="h6" component="div">
            My App
          </Typography>
        </Box>
        
        {!isMobile && <DesktopMenu />}
        
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
      
      <MobileMenu 
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </MuiAppBar>
  );
}