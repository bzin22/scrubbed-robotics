import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
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
        >
          Scrubbed Robotics
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            component={Link}
            to="contact"
            smooth={true}
            sx={{ textTransform: 'none' }}
          >
            Get in touch
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="services"
            smooth={true}
            sx={{ textTransform: 'none' }}
          >
            How it works
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="contact"
            smooth={true}
            sx={{ textTransform: 'none' }}
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