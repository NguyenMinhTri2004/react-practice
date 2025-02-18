import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  CardMedia,
} from '@mui/material';

import { addToCart } from '@/store/slices/cartSlice';
import { useAppDispatch } from '@/store/hooks';
import { toast } from 'react-toastify';
interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  product: {
    id: number;
    image: string;
    name: string;
    category: string;
    price: number;
    description: string;
  } | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ open, onClose, product }) => {
  if (!product) return null;

  const dispatch = useAppDispatch();

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    console.log('Hllllllll');
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      }),
    );
    onClose();
    toast.success(`${product.name} đã được thêm vào giỏ hàng!`, {
      position: 'top-right', 
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{product.name}</DialogTitle>
      <DialogContent>
        <CardMedia component="img" height="300" image={product.image} alt={product.name} />
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          {product.category}
        </Typography>
        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
          {product.price}
        </Typography>
        <Typography>{product.description}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={(e) => {
            handleAddToCart(e);
          }}
          sx={{ backgroundColor: 'green', color: 'white' }}
        >
          Buy
        </Button>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductModal;
