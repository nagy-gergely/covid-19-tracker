import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import CountryProvider from './context/CountryContext';

ReactDOM.render(
    <React.StrictMode>
        <CountryProvider>
            <App />
        </CountryProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
