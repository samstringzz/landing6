import React from 'react';
import gallery1 from '../../assets/images/blog/1.jpg';
import gallery2 from '../../assets/images/blog/2.jpg';
import gallery3 from '../../assets/images/blog/3.jpg';
import gallery4 from '../../assets/images/blog/4.jpg';
import gallery5 from '../../assets/images/blog/5.jpg';
import gallery6 from '../../assets/images/blog/6.jpg';

function GalleryHomeSeven({ className }) {
    return (
        <section className={`appie-gallery-area pt-100 pb-100 ${className || ''}`} id="gallery" style={{ backgroundColor: '#f0f9ff' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">
                                Our Gallery
                            </h3>
                            <p>Explore our collection of stunning visuals and memorable moments.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="appie-single-gallery mt-30 wow animated fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="gallery-thumb">
                                <img src={gallery1} alt="Gallery Image 1" />
                                <div className="gallery-overlay">
                                    <a href={gallery1} className="gallery-popup">
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="appie-single-gallery mt-30 wow animated fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="400ms"
                        >
                            <div className="gallery-thumb">
                                <img src={gallery2} alt="Gallery Image 2" />
                                <div className="gallery-overlay">
                                    <a href={gallery2} className="gallery-popup">
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="appie-single-gallery mt-30 wow animated fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="600ms"
                        >
                            <div className="gallery-thumb">
                                <img src={gallery3} alt="Gallery Image 3" />
                                <div className="gallery-overlay">
                                    <a href={gallery3} className="gallery-popup">
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="appie-single-gallery mt-30 wow animated fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="800ms"
                        >
                            <div className="gallery-thumb">
                                <img src={gallery4} alt="Gallery Image 4" />
                                <div className="gallery-overlay">
                                    <a href={gallery4} className="gallery-popup">
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="appie-single-gallery mt-30 wow animated fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="1000ms"
                        >
                            <div className="gallery-thumb">
                                <img src={gallery5} alt="Gallery Image 5" />
                                <div className="gallery-overlay">
                                    <a href={gallery5} className="gallery-popup">
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="appie-single-gallery mt-30 wow animated fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="1200ms"
                        >
                            <div className="gallery-thumb">
                                <img src={gallery6} alt="Gallery Image 6" />
                                <div className="gallery-overlay">
                                    <a href={gallery6} className="gallery-popup">
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GalleryHomeSeven;
