import React from 'react';

import CountryProvider from './context/CountryContext';

import Navbar from './Navbar';
import CountryPicker from './CountryPicker';
import Cards from './Cards';
import Chart from './Chart';

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="container">
                <CountryProvider>
                    <CountryPicker />
                    <Cards />
                    <Chart />
                </CountryProvider>
            </div>
        </React.Fragment>
    );
}

export default App;
