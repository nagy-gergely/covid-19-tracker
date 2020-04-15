import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CountryContext = React.createContext('hungary');

function CountryProvider({ children }) {
    const [availableCountreis, setAvailableCountreis] = useState([]);
    const [country, setCountry] = useState('Hungary');

    useEffect(() => {
        axios.get('https://covid19.mathdro.id/api/countries')
            .then((response) => {
                if(response.data && response.data.countries && Array.isArray(response.data.countries)) {
                    const countreis = response.data.countries.map((item) => {
                        return item.name;
                    });
                    setAvailableCountreis(countreis);
                }
            })
            .catch((err) => {
                console.error(err.message);
            })
    }, []);

    return (
        <CountryContext.Provider value={{ country, setCountry, availableCountreis }}>
            { children }
        </CountryContext.Provider>
    );
}

export default CountryProvider;