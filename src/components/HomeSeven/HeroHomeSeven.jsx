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
                                <h1 className="appie-title">Hi, I'm Alika Maya</h1>
                                <p style={{ fontSize: '24px', fontWeight: '600', color: '#8b5cf6', marginBottom: '30px' }}>
                                    Empowering Lives Through Style & Inspiration
                                </p>

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
