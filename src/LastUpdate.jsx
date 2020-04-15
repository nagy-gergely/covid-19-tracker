import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LastUpdate() {
    const [lastUpdate, setLastUpdate] = useState(new Date(1970, 1, 1));

    useEffect(() => {
        axios.get('https://covid19.mathdro.id/api')
            .then((response) => {
                if(response.data) {
                    setLastUpdate(new Date(response.data.lastUpdate));
                }
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    return (
        <div className="col col-md-6 mt-3">
            Last Update: { lastUpdate.toLocaleString() }
        </div>
    );
}

export default LastUpdate;