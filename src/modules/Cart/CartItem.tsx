import { Grid, Box, Typography, IconButton } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { useAppDispatch } from '@/store/hooks';
import { removeFromCart } from '@/store/slices/cartSlice';

type CartItem = {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
};
type CartItemProps = {
  product: CartItem;
};

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  // const dispatch = useAppDispatch();

  // const handleRemove = (id: number) => {
  //   dispatch(removeFromCart(id));
  // };

  // const handleUpdateQuantity = (id: string, quantity: number) => {
  //   dispatch(updateQuantity({ id, quantity }));
  // };
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{ borderBottom: 1, borderColor: 'grey.300', py: 2 }}
    >
      <Grid item xs={12} md={4} display="flex" alignItems="center">
        <img
          src={product.image}
          alt={product.name}
          style={{ width: 60, height: 60, borderRadius: 8 }}
        />
        <Box ml={2}>
          <Typography variant="body1" fontWeight="bold">
            {product.name}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2} textAlign="center">
        <Typography variant="body1" fontWeight="bold">
          ${product.price.toFixed(2)}
        </Typography>
      </Grid>
      <Grid item xs={2} textAlign="center">
        <Box display="flex" alignItems="center" justifyContent="center">
          <IconButton size="small">
            <Remove />
          </IconButton>
          <Typography variant="body1" mx={2}>
            {product.quantity}
          </Typography>
          <IconButton size="small">
            <Add />
          </IconButton>
        </Box>
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
