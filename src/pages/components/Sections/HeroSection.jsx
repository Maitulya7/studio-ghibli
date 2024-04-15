import React, { useState, useRef } from 'react';
import { Box } from '@mui/material';
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
    </Box>
  );
};

export default HeroSection;
