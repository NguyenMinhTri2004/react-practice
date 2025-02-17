import { Card, CardMedia, CardContent, Typography, IconButton, Box, Button } from '@mui/material';

interface ProductCardProps {
  img: string;
  title: string;
  brand: string;
  price: string;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, title, brand, price, onClick }) => {
  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    // Handle button click logic here
    console.log('Buy button clicked');
  };
  return (
    <Card onClick={onClick}>
      <CardMedia component="img" height="300" image={img} alt={title} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography color="textSecondary">{brand}</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Typography variant="h6">{price}</Typography>
          <Button onClick={handleAddToCart} sx={{ backgroundColor: 'green', color: 'white' }}>
            Buy
          </Button>
          {/* <IconButton>
              <FavoriteBorderIcon />
            </IconButton> */}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
