import React, { useContext } from 'react';

import { CountryContext } from './context/CountryContext';

function CountryPicker() {
    const { setCountry, availableCountreis } = useContext(CountryContext);

    const options = availableCountreis.map((item, i) => {
        return <option key={ i } value={ item }>{ item }</option>
    });

    const handleSelect = (event) => {
        setCountry(event.target.value);
    }

    return (
        <div className="row mt-3">
            <select className="custom-select" onChange={ handleSelect }>
                <option defaultValue value="">Total</option>
                { options }
            </select>
        </div>
    );
}

export default CountryPicker;
