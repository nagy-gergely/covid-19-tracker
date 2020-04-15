import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import Chart from "react-google-charts";

import { CountryContext } from './context/CountryContext';

function CountryChart() {
    const { country } = useContext(CountryContext);
    const [data, setData] = useState([['Date', 'Confirmed', 'Deaths']]);

    const options = {
        title: `Total Confirmed Cases & Total Deaths in ${country}`,
        curveType: "function",
        legend: { position: "top" }
      };

    useEffect(() => {
        axios.get('https://pomber.github.io/covid19/timeseries.json')
            .then((response) => {
                if(response.data && response.data[country] && Array.isArray(response.data[country])) {
                    let newData = [['Date', 'Confirmed', 'Deaths']];
                    response.data[country].forEach(({ date, confirmed, deaths }) => {
                        newData.push([date, confirmed, deaths]);
                    });
                    setData(newData);
                }
            })
            .catch((err) => {
                console.error(err.message)
            });
    }, [country]);

    return (
        <div className="row">
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    );
}

export default CountryChart;
