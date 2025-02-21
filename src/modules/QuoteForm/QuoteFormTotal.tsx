import React from 'react';
import { Typography, Box } from '@mui/material';
import { useProductContext } from '@/context/QuoteFormContext';
import { useCurrency } from '@/context/CurrencyContext';
import { formatCurrency } from '@/common/utils';

const QuoteFormTotal: React.FC = () => {
  const context = useProductContext();
  const { currency } = useCurrency();

  if (!context) {
    return null;
  }

  return (
    <Box textAlign="right" mt={2}>
      <Typography sx={{ fontWeight: 'bold' }} variant="h6" aria-label="Total Amount">
        Tổng tiền
      </Typography>

      {/* {currency === 'USD' ? (
        <Typography variant="body1" aria-label="Total Amount in USD">
          USD: ${context.totalAmount.toFixed(2)}
        </Typography>
      ) : (
        <Typography variant="body1" aria-label="Total Amount in VND">
          VND: {context.totalAmount.toLocaleString()} VND
        </Typography>
      )} */}
      {formatCurrency(context.totalAmount, currency)}
    </Box>
  );
};

export default QuoteFormTotal;
