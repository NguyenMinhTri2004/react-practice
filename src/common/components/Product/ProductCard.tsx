import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';
import { Product } from '@/common/types';
import { addToCart } from '@/store/slices/cartSlice';
import { useAppDispatch } from '@/store/hooks';
import { toast } from 'react-toastify';
import { styled } from '@mui/material/styles';

interface ProductCardProps extends Product {
  onClick: () => void;
}

const StyledButton = styled(Button)({
  backgroundColor: 'green',
  color: 'white',
  '&:hover': {
    backgroundColor: 'darkgreen',
  },
});

const ProductCard: React.FC<ProductCardProps> = ({ id, name, category, price, image, onClick }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(addToCart({ id, name, price, quantity: 1, image }));
    toast.success(`${name} đã được thêm vào giỏ hàng!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
    });
  };

  return (
    <Card onClick={onClick}>
      <CardMedia component="img" height="300" image={image} alt={name} />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography color="textSecondary">{category}</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Typography variant="h6">{price}</Typography>
          <StyledButton onClick={handleAddToCart} aria-label={`Add ${name} to cart`}>
            Buy
          </StyledButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
