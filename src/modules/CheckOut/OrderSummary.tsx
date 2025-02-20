import { Box, Typography, Paper, Grid, Divider } from '@mui/material';
import { orderItems } from '@/assets/fakeData';

const OrderSummary: React.FC = () => {
  const subtotal = orderItems.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const savings = 30.0;
  const shipping = 5.0;
  const total = subtotal - savings + shipping;

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: 400 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Order Summary
        </Typography>
        {orderItems.map((product) => (
          <Box mb={2} key={product.id}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  style={{ width: 60, height: 60, borderRadius: 8 }}
                />
              </Grid>
              <Grid item xs>
                <Typography fontWeight="bold">{`${product.name} × ${product.quantity}`}</Typography>
                <Typography color="textSecondary">{`Color: ${product.color}`}</Typography>
              </Grid>
              <Grid item>
                <Typography fontWeight="bold">
                  ${(product.price * product.quantity).toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
        <Divider />
        <Box mt={2}>
          <Grid container justifyContent="space-between" mb={1}>
            <Typography color="textSecondary">{`Subtotal (${orderItems.length} items)`}</Typography>
            <Typography fontWeight="bold">${subtotal.toFixed(2)}</Typography>
          </Grid>
          <Grid container justifyContent="space-between" mb={1}>
            <Typography color="textSecondary">Savings</Typography>
            <Typography fontWeight="bold" color="error">
              - ${savings.toFixed(2)}
            </Typography>
          </Grid>
          <Grid container justifyContent="space-between" mb={1}>
            <Typography color="textSecondary">Shipping</Typography>
            <Typography fontWeight="bold" color="error">
              - ${shipping.toFixed(2)}
            </Typography>
          </Grid>
          <Divider />
          <Grid container justifyContent="space-between" mt={2}>
            <Typography fontWeight="bold" variant="h6">
              Total
            </Typography>
            <Typography fontWeight="bold" variant="h6">
              ${total.toFixed(2)}
            </Typography>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default OrderSummary;
