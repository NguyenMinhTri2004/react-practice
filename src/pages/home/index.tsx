import React from 'react';
import Home from '../../modules/Home';
import { mockProducts } from '@/assets/fakeData';

const HomePage: React.FC = () => {
  return <Home products={mockProducts} />;
};

export default HomePage;
