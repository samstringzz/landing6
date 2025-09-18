import React, { useState } from 'react';

function ContactHomeSeven({ className }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <section className={`appie-contact-area pt-100 pb-100 ${className || ''}`} id="contact" style={{ backgroundColor: '#f8fafc' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title" style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
                                Contact Us
                            </h3>
                            <p style={{ fontSize: '18px', color: '#6b7280' }}>
                                Get in touch with us. We'd love to hear from you and answer any questions you may have.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="contact-form" style={{
                            background: '#fff',
                            padding: '40px',
                            borderRadius: '15px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}>
                            <h4 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px', color: '#1f2937' }}>
                                Send us a Message
                            </h4>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group" style={{ marginBottom: '20px' }}>
                                            <label style={{ 
                                                display: 'block', 
                                                marginBottom: '8px', 
                                                fontWeight: 'bold', 
                                                color: '#374151' 
                                            }}>
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                style={{
                                                    width: '100%',
                                                    padding: '12px 16px',
                                                    border: '2px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    fontSize: '16px',
                                                    transition: 'border-color 0.3s ease',
                                                    outline: 'none'
                                                }}
                                                onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
                                                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group" style={{ marginBottom: '20px' }}>
                                            <label style={{ 
                                                display: 'block', 
                                                marginBottom: '8px', 
                                                fontWeight: 'bold', 
                                                color: '#374151' 
                                            }}>
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                style={{
                                                    width: '100%',
                                                    padding: '12px 16px',
                                                    border: '2px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    fontSize: '16px',
                                                    transition: 'border-color 0.3s ease',
                                                    outline: 'none'
                                                }}
                                                onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
                                                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group" style={{ marginBottom: '20px' }}>
                                    <label style={{ 
                                        display: 'block', 
                                        marginBottom: '8px', 
                                        fontWeight: 'bold', 
                                        color: '#374151' 
                                    }}>
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '12px 16px',
                                            border: '2px solid #e5e7eb',
                                            borderRadius: '8px',
                                            fontSize: '16px',
                                            transition: 'border-color 0.3s ease',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
                                        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                                        placeholder="Enter the subject"
                                    />
                                </div>
                                <div className="form-group" style={{ marginBottom: '30px' }}>
                                    <label style={{ 
                                        display: 'block', 
                                        marginBottom: '8px', 
                                        fontWeight: 'bold', 
                                        color: '#374151' 
                                    }}>
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        style={{
                                            width: '100%',
                                            padding: '12px 16px',
                                            border: '2px solid #e5e7eb',
                                            borderRadius: '8px',
                                            fontSize: '16px',
                                            transition: 'border-color 0.3s ease',
                                            outline: 'none',
                                            resize: 'vertical'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
                                        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                                        placeholder="Enter your message"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    style={{
                                        background: '#8b5cf6',
                                        color: '#fff',
                                        padding: '15px 40px',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                    onMouseOver={(e) => e.target.style.background = '#7c3aed'}
                                    onMouseOut={(e) => e.target.style.background = '#8b5cf6'}
                                >
                                    <i className="fas fa-paper-plane"></i>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-info" style={{ paddingLeft: '20px' }}>
                            <h4 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px', color: '#1f2937' }}>
                                Get in Touch
                            </h4>
                            <div className="contact-item" style={{ marginBottom: '30px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: '#8b5cf6',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '15px'
                                    }}>
                                        <i className="fas fa-map-marker-alt" style={{ color: '#fff', fontSize: '20px' }}></i>
                                    </div>
                                    <div>
                                        <h5 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px', color: '#1f2937' }}>
                                            Address
                                        </h5>
                                        <p style={{ color: '#6b7280', margin: 0 }}>
                                            123 Business Street<br />
                                            New York, NY 10001
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-item" style={{ marginBottom: '30px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: '#10b981',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '15px'
                                    }}>
                                        <i className="fas fa-phone" style={{ color: '#fff', fontSize: '20px' }}></i>
                                    </div>
                                    <div>
                                        <h5 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px', color: '#1f2937' }}>
                                            Phone
                                        </h5>
                                        <p style={{ color: '#6b7280', margin: 0 }}>
                                            +1 (555) 123-4567<br />
                                            +1 (555) 987-6543
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-item" style={{ marginBottom: '30px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: '#3b82f6',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '15px'
                                    }}>
                                        <i className="fas fa-envelope" style={{ color: '#fff', fontSize: '20px' }}></i>
                                    </div>
                                    <div>
                                        <h5 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px', color: '#1f2937' }}>
                                            Email
                                        </h5>
                                        <p style={{ color: '#6b7280', margin: 0 }}>
                                            info@company.com<br />
                                            support@company.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="social-links" style={{ marginTop: '40px' }}>
                                <h5 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', color: '#1f2937' }}>
                                    Follow Us
                                </h5>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <a href="#" style={{
                                        width: '45px',
                                        height: '45px',
                                        background: '#3b82f6',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#fff',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" style={{
                                        width: '45px',
                                        height: '45px',
                                        background: '#1da1f2',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#fff',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" style={{
                                        width: '45px',
                                        height: '45px',
                                        background: '#e1306c',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#fff',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" style={{
                                        width: '45px',
                                        height: '45px',
                                        background: '#0077b5',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#fff',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <i className="fab fa-linkedin-in"></i>
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

export default ContactHomeSeven;
