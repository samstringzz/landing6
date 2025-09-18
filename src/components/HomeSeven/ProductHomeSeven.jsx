import React from 'react';
import product1 from '../../assets/images/shop-grid-1.jpg';
import product2 from '../../assets/images/shop-grid-2.jpg';
import product3 from '../../assets/images/shop-grid-3.jpg';

function ProductHomeSeven({ className }) {
    const products = [
        {
            id: 1,
            image: product1,
            title: "Sneakers",
            price: "¥49,000",
            description: "Premium quality sneakers with 4.5 star rating for comfort and style.",
            rating: 4.5
        },
        {
            id: 2,
            image: product2,
            title: "Wrist Watch",
            price: "¥19,000",
            description: "Elegant wrist watch with 4.5 star rating for precision and durability.",
            rating: 4.5
        },
        {
            id: 3,
            image: product3,
            title: "Green Handbag",
            price: "¥99,000",
            description: "Stylish green handbag with 4.5 star rating for fashion and functionality.",
            rating: 4.5
        }
    ];

    return (
        <section className={`appie-product-area pt-100 pb-100 ${className || ''}`} id="products" style={{ backgroundColor: '#fdf2f8' }}>
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
                    {products.map((product, index) => (
                        <div key={product.id} className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-product mt-30 wow animated fadeInUp"
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
                                <div className="product-image" style={{ position: 'relative' }}>
                                    <img 
                                        src={product.image} 
                                        alt={product.title}
                                        style={{ 
                                            width: '100%', 
                                            height: '300px', 
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                                <div className="product-content" style={{ padding: '25px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <i className="fas fa-star" style={{ color: '#fbbf24', fontSize: '16px', marginRight: '4px' }}></i>
                                            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#1f2937' }}>
                                                {product.rating}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-price" style={{ 
                                        fontSize: '24px', 
                                        fontWeight: 'bold', 
                                        color: '#10b981',
                                        marginBottom: '15px'
                                    }}>
                                        {product.price}
                                    </div>
                                    <h4 className="product-title" style={{ 
                                        fontSize: '20px', 
                                        fontWeight: 'bold', 
                                        marginBottom: '15px',
                                        color: '#1f2937'
                                    }}>
                                        {product.title}
                                    </h4>
                                    <p style={{ 
                                        color: '#6b7280', 
                                        marginBottom: '20px',
                                        lineHeight: '1.5',
                                        fontSize: '14px'
                                    }}>
                                        {product.description}
                                    </p>
                                    <a href="#" style={{
                                        background: '#ef4444',
                                        color: '#fff',
                                        padding: '12px 30px',
                                        borderRadius: '8px',
                                        textDecoration: 'none',
                                        fontWeight: 'bold',
                                        fontSize: '14px',
                                        display: 'inline-block',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        Buy Now
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

export default ProductHomeSeven;
