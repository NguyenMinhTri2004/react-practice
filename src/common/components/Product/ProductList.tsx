import { Product } from '@/common/types';
import { Grid, Box } from '@mui/material';
import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const ProductList = ({ products }: { products: Product[] }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <Box sx={{ height: '80vh', overflowY: 'scroll' }}>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard {...product} onClick={() => handleCardClick(product)} />
          </Grid>
        ))}
      </Grid>
      <ProductModal open={!!selectedProduct} onClose={handleCloseModal} product={selectedProduct} />
    </Box>
  );
};

export default ProductList;
