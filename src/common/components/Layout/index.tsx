import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <main>
          {' '}
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
