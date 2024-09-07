import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>   
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App />
            </Provider>        
        </ThemeProvider>     
    </React.StrictMode>,
);