import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)',
            zIndex: 2
          }
        }}
      >
        <img
          src="/images/robot-car.jpg"
          alt="Robot arm cleaning car interior"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'relative',
            zIndex: 1
          }}
        />
      </Box>
      <Container 
        sx={{ 
          position: 'relative', 
          zIndex: 3,
          height: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.75rem' },
              maxWidth: '800px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              color: 'white'
            }}
          >
            Revolutionizing Autonomous Vehicle Cleaning
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4,
              maxWidth: '600px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              color: 'white'
            }}
          >
            Scrubbed Robotics provides cutting-edge robotic solutions for interior cleaning, ensuring efficiency and cost-effectiveness for your fleet.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 