import React from 'react';
import { Typography, Box } from '@mui/material';
import { useProductContext } from '@/context/QuoteFormContext';

const QuoteFormTotal: React.FC = () => {
  const context = useProductContext();

  if (!context) {
    return null;
  }

  return (
    <Box textAlign="right" mt={2}>
      <Typography sx={{ fontWeight: 'bold' }} variant="h6" aria-label="Total Amount">
        Tổng tiền
      </Typography>
      <Typography variant="body1" aria-label="Total Amount in USD">
        USD: ${context.totalAmount.toFixed(2)}
      </Typography>
      {/* <Typography variant="body1" aria-label="Total Amount in VND">
        VND: {context.totalAmountVND.toLocaleString()} VND
      </Typography> */}
    </Box>
  );
};

export default QuoteFormTotal;
