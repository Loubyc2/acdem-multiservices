import React from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../img/acdem.svg';

function Header() {
    return (
        <div>
            <header className='header p-3'>
                <nav className="navbar navbar-expand-lg navbar-light container">
                    <div className='header__top'>
                        <Link className="header__logo" to='/'>
                            <img src={logo} alt="header-logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink exact to='/' className="nav-link active" activeStyle={{ color: '#0a86ce' }} aria-current="page">Accueil</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink exact to='/services' className="nav-link" activeStyle={{ color: '#0a86ce' }}>Services</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to='/about' className="nav-link" activeStyle={{ color: '#0a86ce' }}>À propos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contact-us' className="nav-link" activeStyle={{ color: '#0a86ce' }}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default Header;
