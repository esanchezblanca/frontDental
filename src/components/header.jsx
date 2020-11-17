import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';
import logo from '../img/logohdr.png';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} className="logoImg"></img>
            <p className="headerTitle">Clínica Dental</p>
        </header>
    )

}

export default Header;