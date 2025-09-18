import React from 'react';
import product1 from '../../assets/images/shop-grid-1.jpg';
import product2 from '../../assets/images/shop-grid-2.jpg';
import product3 from '../../assets/images/shop-grid-3.jpg';

function ServicesHomeSeven({ className }) {
    const services = [
        {
            id: 1,
            image: product1,
            title: "Sneakers",
            price: "#49,000",
            description: "Premium quality sneakers with 4.5 star rating for comfort and style.",
            rating: 4.5
        },
        {
            id: 2,
            image: product2,
            title: "Wrist Watch",
            price: "#19,000",
            description: "Elegant wrist watch with 4.5 star rating for precision and durability.",
            rating: 4.5
        },
        {
            id: 3,
            image: product3,
            title: "Green Handbag",
            price: "#99,000",
            description: "Stylish green handbag with 4.5 star rating for fashion and functionality.",
            rating: 4.5
        }
    ];

    return (
        <section className={`appie-services-area pt-100 pb-100 ${className || ''}`} id="services" style={{ backgroundColor: '#f0fdf4' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title" style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
                                Our Products
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {services.map((service, index) => (
                        <div key={service.id} className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service mt-30 wow animated fadeInUp"
                                data-wow-duration="1000ms"
                                data-wow-delay={`${(index + 1) * 200}ms`}
                                style={{
                                    background: '#fff',
                                    borderRadius: '15px',
                                    padding: '0',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s ease',
                                    overflow: 'hidden',
                                    textAlign: 'center'
                                }}
                            >
                                <div className="service-image" style={{ position: 'relative' }}>
                                    <img 
                                        src={service.image} 
                                        alt={service.title}
                                        style={{ 
                                            width: '100%', 
                                            height: '300px', 
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                                <div className="service-content" style={{ padding: '25px' }}>
                                    <div className="service-price" style={{ 
                                        fontSize: '24px', 
                                        fontWeight: 'bold', 
                                        color: '#10b981',
                                        marginBottom: '15px'
                                    }}>
                                        {service.price}
                                    </div>
                                    <h4 className="service-title" style={{ 
                                        fontSize: '20px', 
                                        fontWeight: 'bold', 
                                        marginBottom: '15px',
                                        color: '#1f2937'
                                    }}>
                                        {service.title}
                                    </h4>
                                    <p style={{ 
                                        color: '#6b7280', 
                                        marginBottom: '20px',
                                        lineHeight: '1.5',
                                        fontSize: '14px'
                                    }}>
                                        {service.description}
                                    </p>
                                    <a href="#" style={{
                                        color: '#ef4444',
                                        textDecoration: 'underline',
                                        fontWeight: '500',
                                        fontSize: '14px'
                                    }}>
                                        Learn More »
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesHomeSeven;
