import React, { useContext } from 'react';

import { CountryContext } from './context/CountryContext';

import Navbar from './Navbar';
import LastUpdate from './LastUpdate';
import Sources from './Sources';
import Cards from './Cards';
import CountryChart from './CountryChart';
import TotalChart from './TotalChart';

function App() {
    const { country } = useContext(CountryContext);

    return (
        <React.Fragment>
            <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="h3">Total Cases</div>
                            <Cards total/>
                            <TotalChart />
                        </div>
                        <div className="col-xl-6">
                            <div className="h3">Cases in { country }</div>
                            <Cards />
                            <CountryChart />
                        </div>
                    </div>
                    <div className="row">
                        <LastUpdate />
                        <Sources />
                    </div>
                </div>
        </React.Fragment>
    );
}

export default App;
