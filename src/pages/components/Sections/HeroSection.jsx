import React, { useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import videoSource from '../../../assets/bgVideo.mp4';

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <video
          ref={videoRef}
          autoPlay={isVideoPlaying}
          controls={false}
          style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
          }}
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
      <Box
       onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: "100%",
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              marginLeft: '40px',
              fontWeight: 'bold',
              fontFamily: 'Rock Salt, cursive', // Retro-style font
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow effect
              letterSpacing: '2px', // Increased letter spacing for a funky look
            }}
            color="white"
          >
            STUDIO
          </Typography>
          <Typography variant="h4" sx={{ marginLeft: "40px", fontWeight: "bold" }} color="white">スタジオ</Typography>

        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography 
            variant="h1" 
            sx={{
              marginRight: '40px',
              fontWeight: 'bold',
              fontFamily: 'Rock Salt, cursive', // Retro-style font
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow effect
              letterSpacing: '2px', // Increased letter spacing for a funky look
            }} color="white">GHIBLI</Typography>
          <Typography variant="h4" sx={{ marginRight: "40px", fontWeight: "bold" }} color="white">ジブリ</Typography>

        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
