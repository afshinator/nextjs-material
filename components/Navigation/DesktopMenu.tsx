'use client';

import { Box, Typography } from '@mui/material';
import { Home, Info, Mail } from 'lucide-react';

const menuItems = [
  { text: 'Home', icon: <Home size={20} /> },
  { text: 'About', icon: <Info size={20} /> },
  { text: 'Contact', icon: <Mail size={20} /> },
];

export default function DesktopMenu() {
  return (
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
  );
}