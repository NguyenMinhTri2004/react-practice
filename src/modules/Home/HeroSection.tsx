import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import heroImage from '../../assets/images/heroImage.png';

const HeroContent = styled('div')(({ theme }) => ({
  backgroundColor: '#00AEEF',
  backgroundImage: `url(${heroImage})`,
  padding: theme.spacing(8, 0, 6),
  position: 'relative',
}));

const HeroSection: React.FC = () => {
  return (
    <HeroContent>
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box color="white">
            <Typography variant="h6">T-Shirt / Tops</Typography>
            <Typography variant="h2" component="h1" gutterBottom>
              Summer Value Pack
            </Typography>
            <Typography variant="h6">cool / colorful / comfy</Typography>
            <Box mt={4}>
              <Button variant="contained" color="primary" aria-label="Shop Now">
                Shop Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </HeroContent>
  );
};

export default HeroSection;
