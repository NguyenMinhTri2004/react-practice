import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  CardMedia,
} from '@mui/material';

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  product: {
    img: string;
    title: string;
    brand: string;
    price: string;
  } | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ open, onClose, product }) => {
  if (!product) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{product.title}</DialogTitle>
      <DialogContent>
        <CardMedia component="img" height="300" image={product.img} alt={product.title} />
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          {product.brand}
        </Typography>
        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
          {product.price}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ backgroundColor: 'green', color: 'white' }}>
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
