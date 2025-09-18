import React from 'react';
import logo from '../../assets/images/logo-7.png';

function FooterHomeSeven({ className }) {
    return (
        <>
            <section className={`appie-footer-area ${className || ''}`} style={{ backgroundColor: '#1f2937', padding: '60px 0' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">
                            <div className="footer-logo">
                                <a href="/">
                                    <img src={logo} alt="" style={{ maxHeight: '60px' }} />
                                </a>
                            </div>
                            <div className="footer-copyright mt-30">
                                <p style={{ color: '#9ca3af', margin: 0 }}>
                                    Copyright © 2024. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterHomeSeven;
