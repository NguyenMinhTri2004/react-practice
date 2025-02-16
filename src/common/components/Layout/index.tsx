import Header from '../Header';
import Footer from '../Footer';
const Layout = ({ children }: React.PropsWithChildren<object>) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
