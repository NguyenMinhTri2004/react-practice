import { Card, CardContent, CardMedia, Typography, Box, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { Product } from '@/common/types';

const ProductCategoryCard: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height={'400px'}>
      <Card
        onClick={() => navigate(`/productList/${product.gender}`)}
        sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, cursor: 'pointer' }}
      >
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt="A man wearing a red and black checkered shirt over a white t-shirt, smiling and holding the shirt open"
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Explore Now!
          </Typography>
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <IconButton>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductCategoryCard;
