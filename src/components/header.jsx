import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';
import logo from '../img/logohdr.png';


//creamos el header para todas las páginas
const Header = () => {
    return (
        <header className="header">
            <img src={logo} className="logoImg"></img>
            
            <p className="headerTitle">Clínica Dental</p>
            <div className="user">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/login">Log in</NavLink>
                <NavLink to="/register">Register</NavLink>
            </div>
        </header>
    )

}

export default Header;