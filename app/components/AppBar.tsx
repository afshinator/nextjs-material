'use client';

import { AppBar as MuiAppBar, IconButton, Toolbar, Typography, useTheme as useMuiTheme, useMediaQuery } from '@mui/material';
import { Brightness4, Brightness7, Menu } from '@mui/icons-material';
import { useTheme } from 'next-themes';

interface AppBarProps {
  onMenuClick: () => void;
}

export default function AppBar({ onMenuClick }: AppBarProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <MuiAppBar position="fixed" elevation={1}>
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          {resolvedTheme === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
}