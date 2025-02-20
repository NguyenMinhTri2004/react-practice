import React from 'react';
import { Container, Grid, Typography, Button, Box, List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { footerLinks } from '@/assets/fakeData';

const FooterContainer = styled(Box)({
  backgroundColor: '#1f2937',
  color: 'white',
  padding: '4rem 0',
});

const CustomButton = styled(Button)({
  color: 'inherit',
  textTransform: 'none',
});

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {footerLinks.map((section) => (
            <Grid item xs={12} sm={6} md={3} key={section.title}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              <List>
                {section.links.map((link) => (
                  <ListItem key={link}>
                    <CustomButton>{link}</CustomButton>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
