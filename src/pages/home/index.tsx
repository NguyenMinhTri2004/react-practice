import Home from '../../modules/Home';
import { mockProducts } from '@/assets/fakeData';

const HomePage = () => {
  return <Home products={mockProducts} />;
};

export default HomePage;
