import React from 'react';
import service1 from '../../assets/images/icon/1.png';
import service2 from '../../assets/images/icon/2.png';
import service3 from '../../assets/images/icon/3.png';
import service4 from '../../assets/images/icon/4.png';
import service5 from '../../assets/images/icon/1.png';
import service6 from '../../assets/images/icon/2.png';

function ServicesHomeSeven({ className }) {
    return (
        <section className={`appie-services-area pt-100 pb-100 ${className || ''}`} id="services" style={{ backgroundColor: '#f0fdf4' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">
                                Services We Offer
                            </h3>
                            <p>Comprehensive solutions tailored to meet your business needs and exceed your expectations.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="service-icon">
                                <img src={service1} alt="Web Development" />
                            </div>
                            <h4 className="appie-title">Web Development</h4>
                            <p>Custom web applications built with modern technologies and best practices for optimal performance and user experience.</p>
                            <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="400ms"
                        >
                            <div className="service-icon">
                                <img src={service2} alt="Mobile Apps" />
                            </div>
                            <h4 className="appie-title">Mobile Apps</h4>
                            <p>Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.</p>
                            <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="600ms"
                        >
                            <div className="service-icon">
                                <img src={service3} alt="UI/UX Design" />
                            </div>
                            <h4 className="appie-title">UI/UX Design</h4>
                            <p>Beautiful, intuitive designs that engage users and drive conversions through thoughtful user experience design.</p>
                            <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="800ms"
                        >
                            <div className="service-icon">
                                <img src={service4} alt="Cloud Solutions" />
                            </div>
                            <h4 className="appie-title">Cloud Solutions</h4>
                            <p>Scalable cloud infrastructure and migration services to help your business grow and adapt to changing needs.</p>
                            <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="1000ms"
                        >
                            <div className="service-icon">
                                <img src={service5} alt="Digital Marketing" />
                            </div>
                            <h4 className="appie-title">Digital Marketing</h4>
                            <p>Strategic digital marketing campaigns that increase brand visibility and drive qualified leads to your business.</p>
                            <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="1200ms"
                        >
                            <div className="service-icon">
                                <img src={service6} alt="Consulting" />
                            </div>
                            <h4 className="appie-title">Consulting</h4>
                            <p>Expert technology consulting to help you make informed decisions and optimize your digital strategy.</p>
                            <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesHomeSeven;
