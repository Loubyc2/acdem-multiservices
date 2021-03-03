import React, { useState } from 'react'

import './Services.css';

// Images
import services_img1 from '../../img/services/office-cleaning.svg';
import services_img2 from '../../img/services/store-cleaning.svg';
import services_img3 from '../../img/services/desinfect-cleaning.svg';
import Footer from '../footer/Footer';

function Services() {
    const [showText1, setshowText1] = useState(false);
    const [showText2, setshowText2] = useState(false);
    const [showText3, setshowText3] = useState(false);

    const toggleShow1 = () => {
        setshowText1(!showText1)
    }
    const toggleShow2 = () => {
        setshowText2(!showText2)
    }
    const toggleShow3 = () => {
        setshowText3(!showText3)
    }
    return (
        <div className='services'>
            <div className="services__banner">
            </div>
            <div className="services__banner-text m-3">
                <h1 >Nos Services</h1>
                <div className="services__banner-line"></div>
            </div>
            <div className="services__list px-5">
                <div className="services__list-item">
                    <h6>Nettoyage Résidentiel <br /> & <br /> Chambre d’Hôtel</h6>
                    <img src={services_img1} alt="" />
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deleniti.</p>
                        <p className={showText1 ? 'hotel-text-info ' : 'hideText'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab necessitatibus, non eum voluptatibus nulla tenetur accusamus laudantium dolores doloribus deleniti fugit dicta, minima ipsum vero tempore doloremque incidunt? Natus officia quam maxime dolorum deserunt esse pariatur placeat. Quidem libero rem corporis illo beatae sint distinctio accusantium? Tempore iusto sit earum!</p>
                        <button className='btn btn-primary my-2' onClick={toggleShow1}>{showText1 ? 'Moins Info' : 'Plus Info'}</button>
                    </div>
                </div>
                <div className="services__list-item">
                    <h6>Nettoyage de Stores</h6>
                    <img src={services_img2} alt="" />
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deleniti.</p>
                        <p className={showText2 ? 'hotel-text-info ' : 'hideText'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab necessitatibus, non eum voluptatibus nulla tenetur accusamus laudantium dolores doloribus deleniti fugit dicta, minima ipsum vero tempore doloremque incidunt? Natus officia quam maxime dolorum deserunt esse pariatur placeat. Quidem libero rem corporis illo beatae sint distinctio accusantium? Tempore iusto sit earum!</p>
                        <button className='btn btn-primary my-2' onClick={toggleShow2}>{showText2 ? 'Moins Info' : 'Plus Info'}</button>
                    </div>
                </div>
                <div className="services__list-item">
                    <h6>Désinfection (covid, gastro, saison de grippe etc.)</h6>
                    <img src={services_img3} alt="" />
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deleniti.</p>
                        <p className={showText3 ? 'hotel-text-info ' : 'hideText'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab necessitatibus, non eum voluptatibus nulla tenetur accusamus laudantium dolores doloribus deleniti fugit dicta, minima ipsum vero tempore doloremque incidunt? Natus officia quam maxime dolorum deserunt esse pariatur placeat. Quidem libero rem corporis illo beatae sint distinctio accusantium? Tempore iusto sit earum!</p>
                        <button className='btn btn-primary my-2' onClick={toggleShow3}>{showText3 ? 'Moins Info' : 'Plus Info'}</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services;
