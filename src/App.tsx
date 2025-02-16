import { useRoutes, BrowserRouter } from 'react-router-dom';
import routes from './routes';

const App = () => {
  const element = useRoutes(routes);

  return <BrowserRouter>{element}</BrowserRouter>;
};

export default App;
