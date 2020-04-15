import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Chart from "react-google-charts";

function TotalChart() {
    const [data, setData] = useState([['Date', 'Confirmed', 'Deaths']]);

    const options = {
        title: "Total Confirmed Cases & Total Deaths",
        curveType: "function",
        legend: { position: "top" }
      };

    useEffect(() => {
        axios.get('https://covid19.mathdro.id/api/daily')
            .then((response) => {
                let newData = [['Date', 'Confirmed', 'Deaths']];
                if(response.data && Array.isArray(response.data)) {
                    response.data.forEach(({ reportDate, confirmed, deaths }) => {
                        newData.push([reportDate, confirmed.total, deaths.total])
                    });
                    setData(newData);
                } 
            })
            .catch((err) => {
                console.error(err.message)
            });
    }, []);

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

export default TotalChart;
