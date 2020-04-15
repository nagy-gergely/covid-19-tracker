import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import { CountryContext } from './context/CountryContext';

import Card from './Card';

function Cards() {
    const { country } = useContext(CountryContext);

    const [confirmed, setConfirmed] = useState(0);
    const [recovered, setRecovered] = useState(0);
    const [deaths, setDeaths] = useState(0);

    useEffect(() => {
        if(country) {
            axios.get(`https://covid19.mathdro.id/api/countries/${country}/confirmed`)
                .then((response) => {
                    if(response.data && Array.isArray(response.data)) {
                        let confirmed = 0;
                        let recovered = 0;
                        let deaths = 0;
                        response.data.forEach((item) => {
                            confirmed += item.confirmed;
                            recovered += item.recovered;
                            deaths += item.deaths
                        });
                        setConfirmed(confirmed);
                        setRecovered(recovered);
                        setDeaths(deaths);
                    }
                }).catch((err) => {
                    console.error(err.message);
                })
        } else {
            axios.get('https://covid19.mathdro.id/api')
                .then((response) => {
                    if(response.data) {
                        setConfirmed(response.data.confirmed.value);
                        setRecovered(response.data.recovered.value);
                        setDeaths(response.data.deaths.value);
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
    }, [country]);

    return (
        <div className="row justify-content-around mt-3">
            <Card value={ confirmed } text="Confirmed" bgColorClass="bg-danger" />
            <Card value={ recovered } text="Recovered" bgColorClass="bg-success" />
            <Card value={ deaths } text="Deaths" bgColorClass="bg-dark" />
        </div>
    );
}

export default Cards;