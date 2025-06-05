import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { Link as ScrollLink, scroller } from 'react-scroll';

const Navbar: React.FC = () => {
  const scrollToSection = (section: string) => {
    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
      offset: -70 // Adjust this value based on your navbar height
    });
  };

  return (
    <AppBar position="fixed" sx={{ background: 'rgba(16, 24, 32, 0.95)' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 600,
            color: 'white',
            cursor: 'pointer'
          }}
          onClick={() => scrollToSection('home')}
        >
          Scrubbed Robotics
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            sx={{ textTransform: 'none' }}
            onClick={() => scrollToSection('contact')}
          >
            Get in touch
          </Button>
          <Button
            color="inherit"
            sx={{ textTransform: 'none' }}
            onClick={() => scrollToSection('services')}
          >
            How it works
          </Button>
          <Button
            color="inherit"
            sx={{ textTransform: 'none' }}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </Button>
          <Button
            color="inherit"
            href="/blog"
            sx={{ textTransform: 'none' }}
          >
            Blog
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 