import React from 'react';

import "./Footer.css";

import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';


import logo from '../../img/acdem.svg';

function Footer() {
    return (
        <footer className="footer p-4">
            <div className="footer__content">
                <img className='footer__logo' src={logo} alt="acdem-logo" />
                <div className="footer__socialMedia">
                    <h4>Nos Réseaux Sociaux</h4>
                    <p className='footer__socialMedia-icons'>
                        <a href='www.facebook.com'><FaIcons.FaFacebook size={26} /></a>
                        <a href="www.instagram.com"><FaIcons.FaInstagram size={26} /></a>
                    </p>
                </div>
                <div className="contact">
                    <h4>Contacts</h4>
                    <div className="contact-info">
                        <p><span><FaIcons.FaMapMarkerAlt /></span>Lorem ipsum dolor sit amet.</p>
                        <p><span><FiIcons.FiMail /></span> tmanoucheca@gmail.com</p>
                        <p><span><FiIcons.FiPhone /></span>0000 0000</p>
                        <p className='footer-hour'><span><FaIcons.FaRegClock /></span> 9h- 17h</p>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer
