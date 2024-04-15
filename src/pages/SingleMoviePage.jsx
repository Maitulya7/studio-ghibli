import React, { useEffect, useState } from 'react';
import { useApi } from '../ApiContext';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, CardContent, Chip, IconButton, Grid, Divider, CircularProgress } from '@mui/material';
import { ArrowBack, Star } from '@mui/icons-material';

const SingleMoviePage = () => {
  const api = useApi();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const { id } = useParams();

  useEffect(() => {
    api.get(`/films/${id}`)
      .then((res) => {
        setMovie(res.data)
        setLoading(false)
      }
    )
      .catch((err) =>{ 
        console.log(err);
        setLoading(false);
      });
  }, [api, id]);

  if (loading || !movie) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 3 }}>
      <IconButton sx={{ mb: 2 }} href="/home">
        <ArrowBack />
      </IconButton>
      <Card sx={{ marginBottom: 3 }}>
        <CardMedia
          component="img"
          height="500"
          image={movie.movie_banner}
          alt="Movie Banner"
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2, color: '#888' }}>
            Directed by {movie.director}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <CardMedia
                component="img"
                height="300"
                image={movie.image}
                alt="Movie Thumbnail"
                sx={{ objectFit: 'cover' }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
  <Typography variant="body1" sx={{ mb: 3 }}>
    {movie.description}
  </Typography>
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        Original Title:
      </Typography>
      <Typography variant="body2">{movie.original_title}</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        Producer:
      </Typography>
      <Typography variant="body2">{movie.producer}</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        Release Date:
      </Typography>
      <Typography variant="body2">{movie.release_date}</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        Running Time:
      </Typography>
      <Typography variant="body2">{movie.running_time} minutes</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        Original Title (Romanised):
      </Typography>
      <Typography variant="body2">{movie.original_title_romanised}</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        RT Score:
      </Typography>
      <Typography variant="body2" sx={{ display: 'inline-flex', alignItems: 'center' }}>
        {movie.rt_score}%
        <Chip icon={<Star />} label="Top Rated" color="secondary" size="small" sx={{ ml: 1 }} />
      </Typography>
    </Grid>
  </Grid>
</Grid>


          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SingleMoviePage;
