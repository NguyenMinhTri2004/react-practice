import { Paper, Typography, Box, TextField, Button } from '@mui/material';

const DiscountCodes: React.FC = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Discount Codes
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={2}>
        Enter your coupon code if you have one
      </Typography>
      <Box display="flex" mb={2}>
        <TextField variant="outlined" placeholder="Coupon Code" fullWidth sx={{ mr: 1 }} />
        <Button variant="contained" color="primary">
          Apply Coupon
        </Button>
      </Box>
      <Button variant="outlined" color="primary">
        Continue Shopping
      </Button>
    </Paper>
  );
};

export default DiscountCodes;
