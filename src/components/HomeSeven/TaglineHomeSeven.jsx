import React from 'react';

function TaglineHomeSeven({ className }) {
    return (
        <section className={`appie-tagline-area pt-100 pb-100 ${className || ''}`} id="tagline" style={{ backgroundColor: '#f8f4ff' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="appie-tagline-content text-center">
                            <div className="tagline-badge" style={{ 
                                color: '#8b5cf6', 
                                fontWeight: 'bold', 
                                fontSize: '14px', 
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                marginBottom: '20px'
                            }}>
                                TAGLINE
                            </div>
                            <h2 className="appie-title" style={{ 
                                color: '#f97316', 
                                fontSize: '24px', 
                                fontWeight: '600',
                                marginBottom: '30px'
                            }}>
                                Empowering entrepreneurs to build brands they love
                            </h2>
                            <h3 className="content-hub-title" style={{ 
                                color: '#000', 
                                fontSize: '48px', 
                                fontWeight: 'bold',
                                marginBottom: '40px'
                            }}>
                                Content Hub
                            </h3>
                            <div className="social-icons" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                                <div className="social-icon" style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    border: '2px solid #000',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="fab fa-instagram" style={{ fontSize: '24px', color: '#000' }}></i>
                                </div>
                                <div className="social-icon" style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    border: '2px solid #000',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="fab fa-youtube" style={{ fontSize: '24px', color: '#000' }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TaglineHomeSeven;
