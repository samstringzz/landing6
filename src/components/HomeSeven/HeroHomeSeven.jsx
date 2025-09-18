import React from 'react';
import heroThumb2 from '../../assets/images/hero-shape-2.png';
import heroThumb8 from '../../assets/images/hero-thumb-8.png';

function HeroHomeSeven() {
    return (
        <>
            <section className="appie-hero-area appie-hero-6-area appie-hero-7-area" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="appie-hero-content appie-hero-content-6 appie-hero-content-7">
                                <h1 className="appie-title">Exclusive Solutions for Modern Businesses</h1>
                                <p>
                                    We deliver innovative technology solutions that transform your business 
                                    and drive exceptional results. Experience the difference with our 
                                    cutting-edge approach to digital excellence.
                                </p>
                                <div className="hero-buttons">
                                    <a href="#services" className="appie-btn appie-btn-2">
                                        <i className="fas fa-rocket"></i>
                                        <span>Explore Services</span>
                                    </a>
                                    <a href="#contact" className="appie-btn appie-btn-3">
                                        <i className="fas fa-phone"></i>
                                        <span>Get In Touch</span>
                                    </a>
                                </div>
                                <div className="info"></div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="appie-hero-thumb-6">
                                <div
                                    className="thumb wow animated fadeInUp text-center"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="600ms"
                                >
                                    <img src={heroThumb8} alt="" />
                                    <div className="back-image">
                                        <img src={heroThumb2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroHomeSeven;
