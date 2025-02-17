import { Paper } from '@mui/material';
import CartItem from './CartItem';

interface Product {
  image: string;
  title: string;
  price: number;
  quantity: number;
  shipping: string;
  subtotal: number;
}

interface ProductListProps {
  products: Product[];
}

const CartItemList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      {products.map((product, index) => (
        <CartItem
          key={index}
          image={product.image}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          shipping={product.shipping}
          subtotal={product.subtotal}
        />
      ))}
    </Paper>
  );
};

export default CartItemList;
