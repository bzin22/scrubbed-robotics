import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { CleaningServices, Sanitizer, LocalCarWash, AcUnit } from '@mui/icons-material';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => (
  <Paper
    elevation={3}
    sx={{
      p: 3,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      color: 'white',
    }}
  >
    <Icon sx={{ fontSize: 40, mb: 2, color: '#4a90e2' }} />
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body2">{description}</Typography>
  </Paper>
);

const Services: React.FC = () => {
  const services = [
    {
      title: 'Vacuuming',
      description: 'Powerful suction removes dirt and debris from all surfaces.',
      icon: CleaningServices,
    },
    {
      title: 'Spraying',
      description: 'Application of sanitizing solutions to eliminate germs and bacteria.',
      icon: Sanitizer,
    },
    {
      title: 'Wiping',
      description: 'Gentle yet effective wiping of surfaces to remove stains and residue.',
      icon: LocalCarWash,
    },
    {
      title: 'Drying',
      description: 'Quick drying of interiors to prevent moisture buildup.',
      icon: AcUnit,
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        py: 8,
        background: '#1a2630',
        color: 'white',
      }}
    >
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 6 }}>
          Comprehensive Interior Cleaning
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mx: -2 }}>
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: '100%',
                  sm: '50%',
                  md: '25%',
                },
                px: 2,
                mb: 4,
              }}
            >
              <ServiceCard {...service} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 