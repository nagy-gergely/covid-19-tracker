import React from 'react';
import CountryPicker from './CountryPicker';

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img src="https://i.ibb.co/7QpKsCX/image.png" height="30" className="d-inline-block align-top" alt=""/>
                <span className="ml-3">Tracker</span>
            </a>
            <CountryPicker />
        </nav>
    );
}

export default Navbar;