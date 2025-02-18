import { Box, Typography, Button } from '@mui/material';

const Header = ({ category }: { category: string }) => {
  console.log('cateogry from header', category);
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
      <Typography variant="h5">
        {category === 'men' ? "Man's Clothing" : "Women's Clothing"}
      </Typography>
      <Box display="flex" gap={2}>
        <Button color="primary">New</Button>
        <Button color="inherit">Recommended</Button>
      </Box>
    </Box>
  );
};

export default Header;
