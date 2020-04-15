import React from 'react';
import './Card.css';

function Card ({ value, text, bgColorClass }) {
    return (
        <div className={ 'col col-md-3 min-height-15 rounded ' + bgColorClass } >
            <div className="row align-items-center justify-content-center  h-50">
                <div className="h1 white-text">
                    { value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }
                </div>
            </div>
            <div className="row align-items-center justify-content-center h-50">
                <div className="h5 white-text">
                    { text }
                </div>
            </div>
        </div>
    )
}

export default Card;