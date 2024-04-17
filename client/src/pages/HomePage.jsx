import React, { useRef } from 'react';
import HeroSection from './components/Sections/HeroSection';
import MovieSection from './components/Sections/MovieSection';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import GallerySection from './components/Sections/GallerySection';
import AboutSection from './components/Sections/AboutSection';

const HomePage = () => {
  const heroRef = useRef(null);
  const movieRef = useRef(null);
  const galleryRef = useRef(null)
  const aboutRef = useRef(null)

  const heroScroll = () =>{
    heroRef.current.scrollIntoView({
      behavior:'smooth'
    })
  }
  const movieScroll = () =>{
    movieRef.current.scrollIntoView({
      behavior:'smooth'
    })
  }
  const galleryScroll = () =>{
    galleryRef.current.scrollIntoView({
      behavior:'smooth'
    })
  }
  const aboutScroll = () =>{
    aboutRef.current.scrollIntoView({
      behavior:'smooth'
    })
  }

  return (
    <>
      <Navbar 
        scrollToHero={heroScroll} 
        scrollToMovie={movieScroll} 
        scrollToGallery={galleryScroll} 
        scrollToAbout ={aboutScroll}
      />
      <Box ref={heroRef}>
        <HeroSection />
      </Box>
      <Box ref={movieRef}>
        <MovieSection />
      </Box>
      <Box ref={aboutRef}>
        <AboutSection />
      </Box>
      <Box ref={galleryRef}>
        <GallerySection />
      </Box>

     
    </>
  );
};

export default HomePage;
