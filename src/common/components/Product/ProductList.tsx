import { Grid, Box } from '@mui/material';
import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const products = [
  {
    img: 'https://storage.googleapis.com/a1aa/image/JKohixiyWMnIdjF3SVOsLzo-5qUyGx-tEWcD0YpvuOo.jpg',
    title: 'Black Sweatshirt with ...',
    brand: "Jhanvi's Brand",
    price: '$123.00',
  },
  {
    img: 'https://storage.googleapis.com/a1aa/image/Siv0RU2b2AQMFmhu6OuEy4msISt9LfSo-ktJbrdcAEc.jpg',
    title: 'White T-shirt',
    brand: "Helen's Brand",
    price: '$11.00',
  },
  {
    img: 'https://storage.googleapis.com/a1aa/image/_qCOBH4oBdHdghkegsORGcQ1rkahgCdM9AJXyLpVMpQ.jpg',
    title: 'Lavender Hoodie with ...',
    brand: "Nike's Brand",
    price: '$119.00',
  },
  {
    img: 'https://storage.googleapis.com/a1aa/image/7tCCncsULjJzsYdGTdMUXMDzlFyWupe0EXHmfix9Anc.jpg',
    title: 'Yellow Sweatshirt',
    brand: 'Brand Name',
    price: '$99.00',
  },
  {
    img: 'https://storage.googleapis.com/a1aa/image/ixNqPqQatkzAFbzoY36JE8B9W1E8I_gMusNyKH6xlJo.jpg',
    title: 'Green T-shirt',
    brand: 'Brand Name',
    price: '$15.00',
  },
  {
    img: 'https://storage.googleapis.com/a1aa/image/HDzR8ESUBgc6IKds8gyL40C-6XXZk6_-n8byEgWMku8.jpg',
    title: 'Red Hoodie',
    brand: 'Brand Name',
    price: '$110.00',
  },
  {
    img: 'https://storage.googleapis.com/a1aa/image/7tCCncsULjJzsYdGTdMUXMDzlFyWupe0EXHmfix9Anc.jpg',
    title: 'Yellow Sweatshirt',
    brand: 'Brand Name',
    price: '$99.00',
  },
  {
    img: 'https://storage.googleapis.com/a1aa/image/ixNqPqQatkzAFbzoY36JE8B9W1E8I_gMusNyKH6xlJo.jpg',
    title: 'Green T-shirt',
    brand: 'Brand Name',
    price: '$15.00',
  },
  {
    img: 'https://storage.googleapis.com/a1aa/image/HDzR8ESUBgc6IKds8gyL40C-6XXZk6_-n8byEgWMku8.jpg',
    title: 'Red Hoodie',
    brand: 'Brand Name',
    price: '$110.00',
  },
];

const ProductList: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<{
    img: string;
    title: string;
    brand: string;
    price: string;
  } | null>(null);

  const handleCardClick = (product: {
    img: string;
    title: string;
    brand: string;
    price: string;
  }) => {
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
