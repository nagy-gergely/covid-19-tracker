import React from 'react';

import CountryProvider from './context/CountryContext';

import CountryPicker from './CountryPicker';
import Cards from './Cards';
import Chart from './Chart';

function App() {
    return (
        <CountryProvider>
            <div className="container">
                <CountryPicker />
                <Cards />
                <Chart />
            </div>
        </CountryProvider>
    );
}

export default App;
