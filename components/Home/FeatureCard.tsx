'use client';

import { Paper, Typography } from '@mui/material';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Paper 
      elevation={2} 
      sx={{ 
        p: 3, 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2
      }}
    >
      <Icon size={32} />
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" textAlign="center">
        {description}
      </Typography>
    </Paper>
  );
}