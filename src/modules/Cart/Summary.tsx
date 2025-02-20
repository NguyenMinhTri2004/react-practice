import { Paper, Typography, Box, Button } from '@mui/material';

type SummaryProps = {
  subtotal: number;
  shipping: number;
  grandTotal: number;
};

const Summary: React.FC<SummaryProps> = ({ subtotal, shipping, grandTotal }) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="body1">Sub Total</Typography>
        <Typography variant="body1">${subtotal.toFixed(2)}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="body1">Shipping</Typography>
        <Typography variant="body1">${shipping.toFixed(2)}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" fontWeight="bold" mb={4}>
        <Typography variant="body1">Grand Total</Typography>
        <Typography variant="body1">${grandTotal.toFixed(2)}</Typography>
      </Box>
      <Button variant="contained" color="primary" fullWidth>
        Proceed To Checkout
      </Button>
    </Paper>
  );
};

export default Summary;
