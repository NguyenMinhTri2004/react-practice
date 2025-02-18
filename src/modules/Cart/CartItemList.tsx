import { Paper } from '@mui/material';
import CartItem from './CartItem';

interface CartItemProps {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}
interface ProductListProps {
  products: CartItemProps[];
}

const CartItemList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      {products.map((product, index) => (
        <CartItem
            product={product}
        />
      ))}
    </Paper>
  );
};

export default CartItemList;
