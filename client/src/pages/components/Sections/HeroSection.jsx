import React, { useState, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import videoSource from '../../../assets/bgVideo.mp4';

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
      setShowButton(true);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
      setShowButton(false);
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
      }}
      onClick={handleVideoClick}
    >
      <Box
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
      {showButton && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              color: 'black',
              fontWeight: 'bold',
              padding: '15px 15px',
              borderRadius: '100px',
              cursor:"pointer"
            }}
            onClick={handleVideoClick}
          >
            <PlayArrowIcon sx={{ color: 'black' , cursor:"pointer", fontSize:"40px" }} />
          </Button>
        </Box>
      )}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: "100%",
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              marginLeft: '40px',
              fontWeight: 'bold',
              fontFamily: 'Rock Salt, cursive',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              letterSpacing: '2px',
            }}
            color="white"
          >
            STUDIO
          </Typography>
          <Typography variant="h4" sx={{ marginLeft: '40px', fontWeight: 'bold' }} color="white">スタジオ</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              marginRight: '40px',
              fontWeight: 'bold',
              fontFamily: 'Rock Salt, cursive',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              letterSpacing: '2px',
            }}
            color="white"
          >
            GHIBLI
          </Typography>
          <Typography variant="h4" sx={{ marginRight: '40px', fontWeight: 'bold' }} color="white">ジブリ</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
