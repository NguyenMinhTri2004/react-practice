import React from 'react';
import { Container } from '@mui/material';

type SectionProps = {
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <Container sx={{ padding: 2 }} maxWidth="xl">
      {children}
    </Container>
  );
};

export default Section;
