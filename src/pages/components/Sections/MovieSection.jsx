import React, { useEffect, useState } from 'react';
import { useApi } from '../../../ApiContext';
import { Box, Card, CardMedia, CardContent, Typography, Button, IconButton } from '@mui/material';
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';
import rottenTomatoesLogo from '../../../assets/rotten_tomato.png';

const MovieSection = () => {
  const api = useApi();
  const [movies, setMovies] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 340;
  const maxScrollPosition = movies.length * cardWidth - 10; // Adjusted based on container width

  useEffect(() => {
    api.get('/films')
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, [api, cardWidth]);

  const handleScroll = (direction) => {
    const newPosition = direction === 'left' ? Math.max(scrollPosition - 1000, 0) : Math.min(scrollPosition + 1000, maxScrollPosition);
    setScrollPosition(newPosition);
    document.getElementById('movie-section').scrollTo({
      left: newPosition,
      behavior: 'smooth',
    });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '105vh', justifyContent: 'center', paddingX: { xs: 2, sm: 4, md: 6, lg: 8 }, position: 'relative', overflowX: 'hidden' }}>
      <Typography sx={{ marginBottom: 2, marginLeft: { xs: 2, md: 2 }, fontSize: { xs: "25px", md: "30px", lg: "35px" } }}>Featured Movies</Typography>
      <Box sx={{ p: 2, display: 'flex', overflowX: 'hidden', alignItems: 'center', overflowY: 'hidden', position: 'relative' }}>
        <Box id="movie-section" sx={{ display: 'flex', gap: 2, transform: `translateX(-${scrollPosition}px)`, transition: 'transform 0.5s ease' }}>
          {movies.map((movie) => (
            <Card key={movie.id} sx={{ maxWidth: { xs: 260, sm: 340, md: 360, lg: 425 }, flexShrink: 0 }}>
              <CardMedia component="img" height="200" image={movie.image} alt={movie.title} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{movie.title}</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Button sx={{ marginTop: 2 }} variant="contained" color="primary" href={`/movie/${movie.id}`}>
                    Go to Movie
                  </Button>
                  <Box sx={{ display: "flex", gap: "10px", justifyContent: "center", alignItems: "center" }}>
                    <img src={rottenTomatoesLogo} alt="Rotten Tomatoes" style={{ width: 30, height: 'auto' }} />
                    <Typography>{movie.rt_score}%</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
      <IconButton
        sx={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }}
        onClick={() => handleScroll('left')}
        disabled={scrollPosition <= 0}
      >
        <ArrowCircleLeft color="primary" sx={{ fontSize: { xs: '40px', sm: '50px' } }} />
      </IconButton>
      <IconButton
        sx={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }}
        onClick={() => handleScroll('right')}
        disabled={scrollPosition >= maxScrollPosition}
      >
        <ArrowCircleRight color="primary" sx={{ fontSize: { xs: '40px', sm: '50px' } }} />
      </IconButton>
    </Box>
  );
};

export default MovieSection;
