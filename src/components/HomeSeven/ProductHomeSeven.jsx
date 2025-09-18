import React, { useState } from 'react';
import product1 from '../../assets/images/shop-grid-1.jpg';
import product2 from '../../assets/images/shop-grid-2.jpg';
import product3 from '../../assets/images/shop-grid-3.jpg';
import product4 from '../../assets/images/shop-grid-4.jpg';

function ProductHomeSeven({ className }) {
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const products = [
        {
            id: 1,
            image: product1,
            title: "Smart Analytics Dashboard",
            description: "Comprehensive analytics solution that provides real-time insights into your business performance with advanced AI-powered recommendations.",
            price: 299,
            oldPrice: 399,
            features: ["Real-time Analytics", "AI Insights", "Custom Reports", "Mobile App"],
            rating: 4.9,
            reviews: 128,
            badge: "Best Seller"
        },
        {
            id: 2,
            image: product2,
            title: "Mobile App Builder",
            description: "Drag-and-drop mobile app builder that lets you create professional apps without coding. Perfect for startups and enterprises.",
            price: 199,
            oldPrice: 299,
            features: ["No-Code Builder", "Cross-Platform", "Live Preview", "App Store Ready"],
            rating: 4.8,
            reviews: 95,
            badge: "Popular"
        },
        {
            id: 3,
            image: product3,
            title: "Cloud Storage Pro",
            description: "Secure cloud storage solution with advanced encryption and seamless file synchronization across all your devices.",
            price: 99,
            oldPrice: 149,
            features: ["End-to-End Encryption", "Auto Sync", "Version Control", "Team Collaboration"],
            rating: 4.7,
            reviews: 203,
            badge: "New"
        },
        {
            id: 4,
            image: product4,
            title: "AI Chat Assistant",
            description: "Intelligent chatbot powered by AI that provides 24/7 customer support and engagement with natural language processing.",
            price: 149,
            oldPrice: 199,
            features: ["24/7 Support", "Multi-Language", "CRM Integration", "Analytics"],
            rating: 4.9,
            reviews: 156,
            badge: "AI Powered"
        }
    ];

    return (
        <section className={`appie-product-area pt-100 pb-100 ${className || ''}`} id="products" style={{ backgroundColor: '#fdf2f8' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title" style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
                                Our Products
                            </h3>
                            <p style={{ fontSize: '18px', color: '#6b7280' }}>
                                Discover our innovative products designed to solve real-world problems and enhance your productivity with cutting-edge technology.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {products.map((product, index) => (
                        <div key={product.id} className="col-lg-3 col-md-6 col-sm-6">
                            <div
                                className="appie-single-product mt-30 wow animated fadeInUp"
                                data-wow-duration="1000ms"
                                data-wow-delay={`${(index + 1) * 200}ms`}
                                style={{
                                    background: '#fff',
                                    borderRadius: '20px',
                                    padding: '0',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s ease',
                                    transform: hoveredProduct === product.id ? 'translateY(-10px)' : 'translateY(0)',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={() => setHoveredProduct(product.id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                <div className="product-thumb" style={{ position: 'relative', overflow: 'hidden' }}>
                                    <img 
                                        src={product.image} 
                                        alt={product.title}
                                        style={{ 
                                            width: '100%', 
                                            height: '180px', 
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease',
                                            transform: hoveredProduct === product.id ? 'scale(1.1)' : 'scale(1)'
                                        }}
                                    />
                                    <div className="product-badge" style={{
                                        position: 'absolute',
                                        top: '15px',
                                        right: '15px',
                                        background: product.badge === 'Best Seller' ? '#ef4444' : 
                                                   product.badge === 'Popular' ? '#3b82f6' :
                                                   product.badge === 'New' ? '#10b981' : '#8b5cf6',
                                        color: '#fff',
                                        padding: '5px 12px',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase'
                                    }}>
                                        {product.badge}
                                    </div>
                                    <div className="product-overlay" style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'rgba(0,0,0,0.7)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: hoveredProduct === product.id ? 1 : 0,
                                        transition: 'opacity 0.3s ease'
                                    }}>
                                        <div style={{ display: 'flex', gap: '15px' }}>
                                            <a href="#" className="product-link" style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                background: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#000',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                <i className="fas fa-eye"></i>
                                            </a>
                                            <a href="#" className="product-cart" style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                background: '#8b5cf6',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#fff',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                <i className="fas fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-content" style={{ padding: '20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
                                            {[...Array(5)].map((_, i) => (
                                                <i 
                                                    key={i}
                                                    className={`fas fa-star ${i < Math.floor(product.rating) ? 'text-warning' : 'text-muted'}`}
                                                    style={{ color: i < Math.floor(product.rating) ? '#fbbf24' : '#d1d5db', fontSize: '14px' }}
                                                />
                                            ))}
                                            <span style={{ marginLeft: '8px', fontSize: '14px', color: '#6b7280' }}>
                                                {product.rating} ({product.reviews} reviews)
                                            </span>
                                        </div>
                                    </div>
                                    <h4 className="title" style={{ 
                                        fontSize: '18px', 
                                        fontWeight: 'bold', 
                                        marginBottom: '10px',
                                        color: '#1f2937',
                                        lineHeight: '1.3'
                                    }}>
                                        {product.title}
                                    </h4>
                                    <p style={{ 
                                        color: '#6b7280', 
                                        marginBottom: '15px',
                                        lineHeight: '1.4',
                                        fontSize: '14px'
                                    }}>
                                        {product.description}
                                    </p>
                                    <div style={{ marginBottom: '15px' }}>
                                        <h6 style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '8px', color: '#374151' }}>
                                            Key Features:
                                        </h6>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                            {product.features.slice(0, 2).map((feature, idx) => (
                                                <span key={idx} style={{
                                                    background: '#f3f4f6',
                                                    color: '#374151',
                                                    padding: '2px 8px',
                                                    borderRadius: '12px',
                                                    fontSize: '10px',
                                                    fontWeight: '500'
                                                }}>
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="product-price" style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'space-between',
                                        marginBottom: '15px'
                                    }}>
                                        <div>
                                            <span className="price" style={{ 
                                                fontSize: '20px', 
                                                fontWeight: 'bold', 
                                                color: '#8b5cf6' 
                                            }}>
                                                ${product.price}
                                            </span>
                                            <span className="old-price" style={{ 
                                                fontSize: '14px', 
                                                color: '#9ca3af', 
                                                textDecoration: 'line-through',
                                                marginLeft: '8px'
                                            }}>
                                                ${product.oldPrice}
                                            </span>
                                        </div>
                                        <div style={{ 
                                            background: '#dcfce7', 
                                            color: '#16a34a', 
                                            padding: '2px 6px', 
                                            borderRadius: '8px',
                                            fontSize: '10px',
                                            fontWeight: 'bold'
                                        }}>
                                            Save ${product.oldPrice - product.price}
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <a href="#" className="appie-btn" style={{
                                            flex: 1,
                                            background: '#8b5cf6',
                                            color: '#fff',
                                            padding: '8px 16px',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            transition: 'all 0.3s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '4px',
                                            fontSize: '12px'
                                        }}>
                                            <i className="fas fa-shopping-cart"></i>
                                            Add to Cart
                                        </a>
                                        <a href="#" style={{
                                            padding: '8px 12px',
                                            border: '2px solid #8b5cf6',
                                            color: '#8b5cf6',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            transition: 'all 0.3s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '12px'
                                        }}>
                                            <i className="fas fa-heart"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductHomeSeven;
