import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import App from './App';
import { store } from './store/index';
import './styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';
import '../src/i18n';
import { CurrencyProvider } from "@/context/CurrencyContext";

const theme = createTheme();

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <CurrencyProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Provider store={store}>
            <App />
            <ToastContainer />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
      </CurrencyProvider>
    </React.StrictMode>,
  );
} else {
  console.error('Root element not found');
}
