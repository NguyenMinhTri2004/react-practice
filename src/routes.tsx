import { RouteObject } from 'react-router-dom';
import Layout from './common/components/Layout';
import HomePage from './pages/home';
import ErrorPage from './pages/error';
import ProductListPage from './pages/productList';
import CartPage from './pages/cart';
import CheckOutPage from './pages/checkOut';
import SignInPage from './pages/signIn';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/productList', element: <ProductListPage /> },
      { path: '/signIn', element: <SignInPage /> },
      { path: '/productList/man', element: <ProductListPage /> },
      { path: '/productList/woman', element: <ProductListPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/checkOut', element: <CheckOutPage /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
];

export default routes;
