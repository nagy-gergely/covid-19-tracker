import React, { useContext } from 'react';

import { CountryContext } from './context/CountryContext';

import Navbar from './Navbar';
import Cards from './Cards';
import TotalChart from './TotalChart';

function App() {
    const { country } = useContext(CountryContext);

    return (
        <React.Fragment>
            <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="h3">Total Cases</div>
                            <Cards total/>
                            <TotalChart />
                        </div>
                        <div className="col-md-6">
                            <div className="h3">Cases in { country }</div>
                            <Cards />
                            <TotalChart />
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
}

export default App;
