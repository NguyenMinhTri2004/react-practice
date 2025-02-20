import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ flex: 1, padding: 2, mt: 5 }}>
        <main>
          <Outlet />
        </main>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
