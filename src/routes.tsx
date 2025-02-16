import { RouteObject } from 'react-router-dom';
import Layout from './common/components/Layout';
import HomePage from './pages';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
];

export default routes;
