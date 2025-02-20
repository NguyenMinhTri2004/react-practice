import ProductCategoryCard from './ProductCategory';
import { Box, Grid } from '@mui/material';
import { Product } from '@/common/types';

const ProductCategoryList: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Grid container spacing={2} justifyContent="center">
        {products.map((product, index) => (
          <Grid item key={index}>
            <ProductCategoryCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCategoryList;
