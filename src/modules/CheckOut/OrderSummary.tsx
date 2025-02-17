import { Box, Typography, Paper, Grid, Divider } from '@mui/material';

const OrderSummary: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: 400 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Order Summary
        </Typography>
        <Box mb={2}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <img
                src="https://storage.googleapis.com/a1aa/image/Az02pz1b0ReQSArOJ6fpoGiHwsL94y6dWywTEOnfJmk.jpg"
                alt="Blue Flower Print Crop Top"
                style={{ width: 60, height: 60, borderRadius: 8 }}
              />
            </Grid>
            <Grid item xs>
              <Typography fontWeight="bold">Blue Flower Print Crop Top × 1</Typography>
              <Typography color="textSecondary">Color: Yellow</Typography>
            </Grid>
            <Grid item>
              <Typography fontWeight="bold">$29.00</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box mb={2}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <img
                src="https://storage.googleapis.com/a1aa/image/X5Z6VqwimzPAUDTedUL8nl10Pl1bolNhhmz6aVVQujk.jpg"
                alt="Lavender Hoodie"
                style={{ width: 60, height: 60, borderRadius: 8 }}
              />
            </Grid>
            <Grid item xs>
              <Typography fontWeight="bold">Lavender Hoodie × 2</Typography>
              <Typography color="textSecondary">Colour: Lavender</Typography>
            </Grid>
            <Grid item>
              <Typography fontWeight="bold">$119.00</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box mb={2}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <img
                src="https://storage.googleapis.com/a1aa/image/YGpIzMJt5kiZyv5e_xF2Q-BN_9ZSCmPWpSTHA1JZ-2c.jpg"
                alt="Black Sweatshirt"
                style={{ width: 60, height: 60, borderRadius: 8 }}
              />
            </Grid>
            <Grid item xs>
              <Typography fontWeight="bold">Black Sweatshirt × 2</Typography>
              <Typography color="textSecondary">Color: Black</Typography>
            </Grid>
            <Grid item>
              <Typography fontWeight="bold">$123.00</Typography>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box mt={2}>
          <Grid container justifyContent="space-between" mb={1}>
            <Typography color="textSecondary">Subtotal (3 items)</Typography>
            <Typography fontWeight="bold">$513.00</Typography>
          </Grid>
          <Grid container justifyContent="space-between" mb={1}>
            <Typography color="textSecondary">Savings</Typography>
            <Typography fontWeight="bold" color="error">
              - $30.00
            </Typography>
          </Grid>
          <Grid container justifyContent="space-between" mb={1}>
            <Typography color="textSecondary">Shipping</Typography>
            <Typography fontWeight="bold" color="error">
              - $5.00
            </Typography>
          </Grid>
          <Divider />
          <Grid container justifyContent="space-between" mt={2}>
            <Typography fontWeight="bold" variant="h6">
              Total
            </Typography>
            <Typography fontWeight="bold" variant="h6">
              $478.00
            </Typography>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default OrderSummary;
