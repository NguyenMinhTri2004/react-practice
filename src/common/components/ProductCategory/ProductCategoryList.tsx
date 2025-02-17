import ProductCategoryCard from './ProductCategory';
import { Box, Grid } from '@mui/material';

const ProductCategoryList = () => {
  const products = [
    {
      image:
        'https://storage.googleapis.com/a1aa/image/2MH5sCCBHnWpfuNj6tWbhgIemMNtycUJK-4CHo0L7Pg.jpg',
      title: 'Shirts',
      description: 'Explore Now!',
    },
    {
      image: 'https://placehold.co/400x600',
      title: 'Pants',
      description: 'Discover the latest trends!',
    },
    {
      image: 'https://placehold.co/400x600',
      title: 'Shoes',
      description: 'Step into style!',
    },
    {
      image:
        'https://storage.googleapis.com/a1aa/image/2MH5sCCBHnWpfuNj6tWbhgIemMNtycUJK-4CHo0L7Pg.jpg',
      title: 'Shirts',
      description: 'Explore Now!',
    },
    {
      image: 'https://placehold.co/400x600',
      title: 'Pants',
      description: 'Discover the latest trends!',
    },
    {
      image: 'https://placehold.co/400x600',
      title: 'Shoes',
      description: 'Step into style!',
    },
    // Add more products as needed
  ];
  return (
    // <>
    // <ProductCategoryCard />
    //   <ProductCategoryCard />
    //   <ProductCategoryCard />
    //   <ProductCategoryCard />
    //   <ProductCategoryCard />
    // </>
    <Box display="flex" justifyContent="center" alignItems="center">
      <Grid container spacing={2} justifyContent="center">
        {products.map((product, index) => (
          <Grid item key={index}>
            <ProductCategoryCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCategoryList;
