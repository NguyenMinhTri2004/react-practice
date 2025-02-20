import React from 'react';
import { Box, Typography } from '@mui/material';

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => {
  return (
    <Box
      sx={{ paddingBottom: 2, paddingTop: 2 }}
      display="flex"
      alignItems="center"
      gap={1}
      className={className}
    >
      <Box width={4} height={24} bgcolor="blue" borderRadius="full" />
      <Typography variant="h6" fontWeight="bold" color="textPrimary">
        {children}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
