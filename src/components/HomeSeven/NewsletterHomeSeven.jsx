import React from 'react';

function NewsletterHomeSeven({ className }) {
    return (
        <section className={`appie-newsletter-area pt-100 pb-100 ${className || ''}`} id="newsletter" style={{ backgroundColor: '#f1f5f9' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="appie-newsletter-content text-center">
                            <h3 className="appie-title">
                                Subscribe to Our Newsletter
                            </h3>
                            <p>
                                Stay updated with our latest news, products, and exclusive offers. 
                                Join thousands of subscribers who trust us to deliver valuable content.
                            </p>
                            <form className="newsletter-form mt-40">
                                <div className="input-group">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Enter your email address"
                                        required
                                    />
                                    <button className="btn btn-primary" type="submit">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                            <div className="newsletter-features mt-50">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-feature">
                                            <i className="fas fa-envelope"></i>
                                            <h5>Weekly Updates</h5>
                                            <p>Get the latest news and updates delivered to your inbox every week.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-feature">
                                            <i className="fas fa-gift"></i>
                                            <h5>Exclusive Offers</h5>
                                            <p>Access to special discounts and offers available only to our subscribers.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-feature">
                                            <i className="fas fa-shield-alt"></i>
                                            <h5>Privacy Protected</h5>
                                            <p>Your email is safe with us. We never share your information with third parties.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsletterHomeSeven;
