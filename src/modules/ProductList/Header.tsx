import React from 'react';
import { Box, Typography, Button } from '@mui/material';

type HeaderProps = {
  category: string;
};

const Header: React.FC<HeaderProps> = ({ category }) => {
  const titleMap: { [key: string]: string } = {
    men: "Man's Clothing",
    women: "Women's Clothing",
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
      <Typography variant="h5" component="h2">
        {titleMap[category] || 'Clothing'}
      </Typography>
      <Box display="flex" gap={2}>
        <Button color="primary" aria-label="New arrivals">
          New
        </Button>
        <Button color="inherit" aria-label="Recommended items">
          Recommended
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
