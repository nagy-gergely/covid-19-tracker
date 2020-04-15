import React, { useEffect } from 'react';
import axios from 'axios';

function Chart() {

    useEffect(() => {
        axios.get('https://covid19.mathdro.id/api/daily')
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.error(err.message)
            });
    }, []);

    return (
        <div className="row">
            
        </div>
    );
}

export default Chart;
