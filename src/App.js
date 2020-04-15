import React from 'react';

import CountryProvider from './context/CountryContext';

import Navbar from './Navbar';
import Cards from './Cards';
import TotalChart from './TotalChart';

function App() {
    return (
        <React.Fragment>
            <CountryProvider>
            <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <Cards />
                            <TotalChart />
                        </div>
                        <div className="col-md-6">
                            <Cards />
                            <TotalChart />
                        </div>
                    </div>
                </div>
            </CountryProvider>
        </React.Fragment>
    );
}

export default App;
