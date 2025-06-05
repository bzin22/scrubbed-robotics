import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia } from '@mui/material';

interface TechnologyCardProps {
  title: string;
  description: string;
  image: string;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ title, description, image }) => (
  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      color: 'white',
    }}
  >
    <CardMedia
      component="img"
      height="200"
      image={image}
      alt={title}
      sx={{ objectFit: 'cover' }}
    />
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const Technology: React.FC = () => {
  const technologies = [
    {
      title: 'Advanced Robotic Arms',
      description: 'Our robots utilize state-of-the-art robotic arms for precise and adaptable cleaning.',
      image: '/robotic-arm.jpg',
    },
    {
      title: 'Precision End-Effectors',
      description: 'Equipped with specialized end-effectors for optimal cleaning thoroughness.',
      image: '/end-effector.jpg',
    },
    {
      title: 'Intelligent Automation',
      description: 'Automated processes optimize cleaning cycles and maximize efficiency.',
      image: '/automation.jpg',
    },
  ];

  return (
    <Box
      id="technology"
      sx={{
        py: 8,
        background: '#101820',
        color: 'white',
      }}
    >
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Cutting-Edge Robotic Solutions
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 6 }}>
          Our technology combines advanced robotics with intelligent automation to deliver superior cleaning results.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mx: -2 }}>
          {technologies.map((tech, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: '100%',
                  md: '33.333%',
                },
                px: 2,
                mb: 4,
              }}
            >
              <TechnologyCard {...tech} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Technology; 