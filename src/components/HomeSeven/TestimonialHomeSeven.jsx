import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import client1 from '../../assets/images/testimonial-user-1.png';
import client2 from '../../assets/images/testimonial-user-2.png';
import client3 from '../../assets/images/testimonial-user.png';

function TestimonialHomeSeven({ className }) {
    const sliderRef = useRef();
    const sliderNext = () => {
        sliderRef.current.slickNext();
    };
    const sliderPrev = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };

    return (
        <section
            className={`appie-testimonial-area pt-100 pb-100 ${className || ''}`}
            id="testimonials"
            style={{ backgroundColor: '#fefce8' }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title" style={{ color: '#fff' }}>
                                What Our Clients Say
                            </h3>
                            <p style={{ color: '#fff' }}>Hear from our satisfied clients about their experience working with us.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="appie-testimonial-slider" style={{ position: 'relative' }}>
                            <Slider ref={sliderRef} {...settings}>
                                <div className="appie-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={client1} alt="Sarah Johnson" />
                                        <h5 className="title">Sarah Johnson</h5>
                                        <span>CEO, TechCorp</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                            "Working with this team has been an absolute pleasure. They delivered 
                                            our project on time and exceeded our expectations. The quality of work 
                                            and attention to detail is outstanding."
                                        </p>
                                    </div>
                                </div>
                                <div className="appie-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={client2} alt="Michael Chen" />
                                        <h5 className="title">Michael Chen</h5>
                                        <span>Founder, StartupXYZ</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                            "The team's expertise and professionalism helped us launch our product 
                                            successfully. They understood our vision and brought it to life better 
                                            than we could have imagined."
                                        </p>
                                    </div>
                                </div>
                                <div className="appie-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={client3} alt="Emily Rodriguez" />
                                        <h5 className="title">Emily Rodriguez</h5>
                                        <span>Marketing Director, GlobalBrand</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                            "Exceptional service and results! The team's creative approach and 
                                            technical expertise helped us achieve our goals. I highly recommend 
                                            them to anyone looking for quality work."
                                        </p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialHomeSeven;
