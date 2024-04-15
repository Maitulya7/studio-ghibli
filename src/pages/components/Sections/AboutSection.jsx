import { Grid, Box, Typography, Button } from '@mui/material';
import React from 'react';
import image2 from "../../../assets/image2.png"
const AboutSection = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', paddingX:8 }}>
      <Grid container spacing={2}>
        {/* Image on the left */}
        <Grid item xs={12} md={6}>
          <img
            src={image2}
            alt="AboutImage"
            style={{ width: '700px', height: '750px', objectFit:"cover"}}
          />
        </Grid>
        {/* Title, text, and button on the right */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
          Hayao Miyazaki
          </Typography>
          <Typography variant="body1" paragraph>
          Hayao Miyazaki is a Japanese animator, filmmaker, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.
          </Typography>
          <Button variant="contained" color="primary">
          Explore 
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
