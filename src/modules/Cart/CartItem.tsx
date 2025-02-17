import { Grid, Box, Typography, IconButton } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

interface ProductItemProps {
  image: string;
  title: string;
  price: number;
  quantity: number;
  shipping: string;
  subtotal: number;
}

const CartItem: React.FC<ProductItemProps> = ({
  image,
  title,
  price,
  quantity,
  shipping,
  subtotal,
}) => {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{ borderBottom: 1, borderColor: 'grey.300', py: 2 }}
    >
      <Grid item xs={12} md={4} display="flex" alignItems="center">
        <img src={image} alt={title} style={{ width: 60, height: 60, borderRadius: 8 }} />
        <Box ml={2}>
          <Typography variant="body1" fontWeight="bold">
            {title}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary">Color: {color}</Typography>
            <Typography variant="body2" color="textSecondary">Size: {size}</Typography> */}
        </Box>
      </Grid>
      <Grid item xs={2} textAlign="center">
        <Typography variant="body1" fontWeight="bold">
          ${price.toFixed(2)}
        </Typography>
      </Grid>
      <Grid item xs={2} textAlign="center">
        <Box display="flex" alignItems="center" justifyContent="center">
          <IconButton size="small">
            <Remove />
          </IconButton>
          <Typography variant="body1" mx={2}>
            {quantity}
          </Typography>
          <IconButton size="small">
            <Add />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={2} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          {shipping}
        </Typography>
      </Grid>
      <Grid item xs={2} textAlign="center">
        <Typography variant="body1" fontWeight="bold">
          ${subtotal.toFixed(2)}
        </Typography>
      </Grid>
      <Grid item xs={2} textAlign="center">
        <IconButton color="secondary">
          <Delete />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CartItem;
