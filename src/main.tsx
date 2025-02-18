import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './styles/main.scss';
const theme = createTheme();
import { Provider } from 'react-redux';
import { store } from './store/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
          <ToastContainer />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
