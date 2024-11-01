'use client';

import { Container, Typography, Paper, Grid } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Welcome
            </Typography>
            <Typography variant="body1">
              This is a responsive Next.js application with Material-UI, featuring a dark/light mode toggle and adaptive layout for both mobile and desktop views.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}