'use client';

import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Home, Info, Mail } from 'lucide-react';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  { text: 'Home', icon: <Home size={20} /> },
  { text: 'About', icon: <Info size={20} /> },
  { text: 'Contact', icon: <Mail size={20} /> },
];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
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
}