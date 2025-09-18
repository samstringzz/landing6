import React from 'react';

function EventHomeSeven({ className }) {
    const events = [
        {
            id: 1,
            title: "Ashraf & Sultana",
            category: "Weddings",
            location: "Kano, Nigeria",
            date: "8/8/2024",
            time: "4:00:00 PM",
            description: "No description available",
            type: "invitation"
        },
        {
            id: 2,
            title: "Ashraf & Sultana",
            category: "Weddings",
            location: "Kano, Nigeria",
            date: "8/8/2024",
            time: "4:00:00 PM",
            description: "No description available",
            type: "invitation"
        },
        {
            id: 3,
            title: "Ashraf & Sultana",
            category: "Weddings",
            location: "Kano, Nigeria",
            date: "8/8/2024",
            time: "4:00:00 PM",
            description: "No description available",
            type: "invitation"
        }
    ];

    return (
        <section className={`appie-event-area pt-100 pb-100 ${className || ''}`} id="events" style={{ backgroundColor: '#fef3f2' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title" style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
                                Upcoming Events
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {events.map((event, index) => (
                        <div key={event.id} className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-event mt-30 wow animated fadeInUp"
                                data-wow-duration="1000ms"
                                data-wow-delay={`${(index + 1) * 200}ms`}
                                style={{
                                    background: '#fff',
                                    borderRadius: '15px',
                                    padding: '25px',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s ease',
                                    overflow: 'hidden',
                                    textAlign: 'left',
                                    position: 'relative'
                                }}
                            >
                                {/* Top Section */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                                    <div>
                                        <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', marginBottom: '5px' }}>
                                            {event.title}
                                        </h4>
                                        <div style={{ display: 'flex', alignItems: 'center', color: '#6b7280', fontSize: '14px' }}>
                                            <i className="fas fa-camera" style={{ marginRight: '5px', fontSize: '12px' }}></i>
                                            {event.category}
                                        </div>
                                    </div>
                                    <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1f2937' }}>
                                        {event.location.split(',')[0]}
                                    </div>
                                </div>

                                {/* Middle Section */}
                                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                    <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>
                                        {event.title}
                                    </h3>
                                    <p style={{ fontSize: '16px', color: '#1f2937', marginBottom: '10px' }}>
                                        {event.location}
                                    </p>
                                    <p style={{ fontSize: '16px', color: '#1f2937', marginBottom: '10px' }}>
                                        {event.date} • {event.time}
                                    </p>
                                    <p style={{ fontSize: '14px', color: '#6b7280' }}>
                                        {event.description}
                                    </p>
                                </div>

                                {/* Bottom Section */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '14px', color: '#1f2937', fontWeight: '500' }}>
                                        {event.type}
                                    </span>
                                    <a href="#" style={{
                                        background: '#ef4444',
                                        color: '#fff',
                                        padding: '10px 20px',
                                        borderRadius: '8px',
                                        textDecoration: 'none',
                                        fontWeight: 'bold',
                                        fontSize: '14px',
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

export default EventHomeSeven;
