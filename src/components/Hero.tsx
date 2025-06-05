import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/robot-arm.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Revolutionizing Autonomous Vehicle Cleaning
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Scrubbed Robotics provides cutting-edge robotic solutions for interior cleaning, ensuring efficiency and cost-effectiveness for your fleet.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 