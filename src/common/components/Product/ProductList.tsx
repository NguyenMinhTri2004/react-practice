import { Product } from '@/common/types';
import { Grid, Box } from '@mui/material';
import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
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
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard {...product} onClick={() => handleCardClick(product)} />
          </Grid>
        ))}
      </Grid>
      <ProductModal
        open={!!selectedProduct}
        onClose={handleCloseModal}
        product={selectedProduct}
        aria-labelledby="product-modal-title"
        aria-describedby="product-modal-description"
      />
    </Box>
  );
};

export default ProductList;
