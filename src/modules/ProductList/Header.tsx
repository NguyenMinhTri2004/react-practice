import { Box, Typography, Button } from '@mui/material';

const Header: React.FC = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
      <Typography variant="h5">Women's Clothing</Typography>
      <Box display="flex" gap={2}>
        <Button color="primary">New</Button>
        <Button color="inherit">Recommended</Button>
      </Box>
    </Box>
  );
};

export default Header;
