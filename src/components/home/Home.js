import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'
import * as FcIcons from 'react-icons/fc';


// Images
import imgSect1_1 from '../../img/sections/sect1.jpg';
import imgSect1_2 from '../../img/sections/sect1-2.jpg';
import imgSect1_3 from '../../img/sections/sect1-3.jpg';
import Footer from '../footer/Footer';


function Home() {

    return (
        <div className='home'>

            {/* Carousel */}

            {/* <div className="carousel slide" id='firtCarousel' data-bs-ride="carousel">
                <div className="carousel-inner" >
                    <div className="carousel-item one active">
                        Hi
                    </div>
                    <div className="carousel-item two">

                    </div>
                </div>
                <a class="carousel-control-prev" href="#firtCarousel" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#firtCarousel" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div> */}

            <div className="home-banner mb-3">
                <div className="homeText">
                    <div>
                        <span className="homeText-slogan">Nous sommes <br /> ACDEM-MULTISERVICES</span>
                        <h1 className="homeText-title my-3">
                            Nous avons la <br /><strong style={{ fontSize: '20px', color: '#efdf00' }}>meilleur équipe</strong><br /> pour vous servir
                        </h1>
                        <Link to='/about'> <button className='btn btn-outline-light'>A propos de nous</button></Link>
                    </div>

                </div>
            </div>
            <div className="home__sectionOne px-5">
                <div className="sectionOne-imgContainer">
                    <div className='sectionOneImg1'>
                        <img src={imgSect1_1} alt="clean-img" />
                        <img src={imgSect1_2} alt="clean-img" />
                    </div>
                    <div className='sectionOneImg3'>
                        <img src={imgSect1_3} alt="clean-img" />
                    </div>
                </div>
                <div className='sectionOneText my-5'>
                    <h4 className='sectionOneText-title mt-4'>Pourquoi devriez-vous choisir <br /> ACDEM-MULTISERVICES?</h4>
                    <div className="sectionOneText-line"></div>
                    <div className="sectionOneText-list mt-4">
                        <ul className='justify-content-between list-inline'>
                            <li>
                                <span><FcIcons.FcCheckmark size={26} /></span>
                                <p><strong>L’higiène</strong> est notre priorité</p>
                            </li>

                            <li> <span><FcIcons.FcCheckmark size={26} /></span>
                                <p>Nous voyons d’abord le <strong>bien-être</strong> des autres</p>
                            </li>

                            <li> <span><FcIcons.FcCheckmark size={26} /></span>
                                <p>Nous croyons qu’une bonne <strong>image</strong> fait toujours bonne impression</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="sectionTwo px-5 py-4">
                <h4 className='sectionTwo-title'>Nos prestations de service</h4>
                <div className="sectionTwoText-line"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis ipsa laudantium animi ullam! Provident sequi, doloribus, ut aperiam eligendi animi at labore expedita quia vitae tenetur aliquid nisi id!</p>
                <div className="sectionTwo-info">
                    <div className="sectionTwo-detail deepCleaning">
                        <div className="sectionTwo-detail-text">
                            <div>
                                <h3>Nettoyage Profond</h3>
                                <Link to='/deep-cleaning' className='btn btn-outline-light'>Voir plus</Link>
                            </div>
                        </div>
                    </div>
                    <div className="sectionTwo-detail kitchenCleaning">
                        <div className="sectionTwo-detail-text">
                            <div>
                                <h3>Nettoyage de Cuisine</h3>
                                <button className='btn btn-outline-light'>Voir plus</button>
                            </div>
                        </div>
                    </div>
                    <div className="sectionTwo-detail mirrorCleaning">
                        <div className="sectionTwo-detail-text">
                            <div>
                                <h3>Nettoyage de Vitre</h3>
                                <button className='btn btn-outline-light'>Voir plus</button>
                            </div>
                        </div>
                    </div>
                    <div className="sectionTwo-detail floorCleaning">
                        <div className="sectionTwo-detail-text">
                            <div>
                                <h3>Nettoyage de Sol</h3>
                                <button className='btn btn-outline-light'>Voir plus</button>
                            </div>
                        </div>
                    </div>
                    <div className="sectionTwo-detail wastCleaning">
                        <div className="sectionTwo-detail-text">
                            <div>
                                <h3>Evacuation des déchets</h3>
                                <button className='btn btn-outline-light'>Voir plus</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
            <Footer />
        </div >
    )
}

export default Home
