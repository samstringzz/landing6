import React, { useState } from 'react';
import event1 from '../../assets/images/blog/1.jpg';
import event2 from '../../assets/images/blog/2.jpg';
import event3 from '../../assets/images/blog/3.jpg';

function EventHomeSeven({ className }) {
    const [hoveredEvent, setHoveredEvent] = useState(null);

    const events = [
        {
            id: 1,
            image: event1,
            title: "Tech Conference 2024",
            description: "Join us for the biggest tech conference featuring industry leaders and innovators.",
            date: "15 Dec",
            time: "9:00 AM - 6:00 PM",
            location: "New York, USA",
            type: "Conference",
            price: "Free"
        },
        {
            id: 2,
            image: event2,
            title: "Workshop Series",
            description: "Hands-on workshops covering the latest trends in web development.",
            date: "22 Dec",
            time: "10:00 AM - 4:00 PM",
            location: "London, UK",
            type: "Workshop",
            price: "$50"
        },
        {
            id: 3,
            image: event3,
            title: "Networking Meetup",
            description: "Connect with professionals and expand your network in a relaxed environment.",
            date: "30 Dec",
            time: "6:00 PM - 9:00 PM",
            location: "San Francisco, USA",
            type: "Networking",
            price: "Free"
        }
    ];

    return (
        <section className={`appie-event-area pt-100 pb-100 ${className || ''}`} id="events" style={{ backgroundColor: '#fef3f2' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title" style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
                                Upcoming Events
                            </h3>
                            <p style={{ fontSize: '18px', color: '#6b7280' }}>
                                Join us for exciting events and experiences that will expand your knowledge and network.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {events.map((event, index) => (
                        <div key={event.id} className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-event mt-30 wow animated fadeInUp"
                                data-wow-duration="1000ms"
                                data-wow-delay={`${(index + 1) * 200}ms`}
                                style={{
                                    background: '#fff',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s ease',
                                    transform: hoveredEvent === event.id ? 'translateY(-5px)' : 'translateY(0)'
                                }}
                                onMouseEnter={() => setHoveredEvent(event.id)}
                                onMouseLeave={() => setHoveredEvent(null)}
                            >
                                <div className="event-thumb" style={{ position: 'relative', overflow: 'hidden' }}>
                                    <img 
                                        src={event.image} 
                                        alt={event.title}
                                        style={{ 
                                            width: '100%', 
                                            height: '200px', 
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease',
                                            transform: hoveredEvent === event.id ? 'scale(1.05)' : 'scale(1)'
                                        }}
                                    />
                                    <div className="event-date" style={{
                                        position: 'absolute',
                                        top: '15px',
                                        left: '15px',
                                        background: '#ef4444',
                                        color: '#fff',
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        textAlign: 'center',
                                        fontWeight: 'bold'
                                    }}>
                                        <div style={{ fontSize: '16px', lineHeight: '1' }}>{event.date.split(' ')[0]}</div>
                                        <div style={{ fontSize: '12px', lineHeight: '1' }}>{event.date.split(' ')[1]}</div>
                                    </div>
                                    <div className="event-type" style={{
                                        position: 'absolute',
                                        top: '15px',
                                        right: '15px',
                                        background: event.type === 'Conference' ? '#3b82f6' : 
                                                   event.type === 'Workshop' ? '#10b981' : '#8b5cf6',
                                        color: '#fff',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase'
                                    }}>
                                        {event.type}
                                    </div>
                                </div>
                                <div className="event-content" style={{ padding: '20px' }}>
                                    <h4 className="title" style={{ 
                                        fontSize: '20px', 
                                        fontWeight: 'bold', 
                                        marginBottom: '10px',
                                        color: '#1f2937',
                                        lineHeight: '1.3'
                                    }}>
                                        {event.title}
                                    </h4>
                                    <p style={{ 
                                        color: '#6b7280', 
                                        marginBottom: '15px',
                                        lineHeight: '1.4',
                                        fontSize: '14px'
                                    }}>
                                        {event.description}
                                    </p>
                                    <div className="event-meta" style={{ marginBottom: '15px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                            <i className="fas fa-map-marker-alt" style={{ color: '#ef4444', marginRight: '8px', fontSize: '14px' }}></i>
                                            <span style={{ fontSize: '14px', color: '#6b7280' }}>{event.location}</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                            <i className="fas fa-clock" style={{ color: '#3b82f6', marginRight: '8px', fontSize: '14px' }}></i>
                                            <span style={{ fontSize: '14px', color: '#6b7280' }}>{event.time}</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <i className="fas fa-ticket-alt" style={{ color: '#10b981', marginRight: '8px', fontSize: '14px' }}></i>
                                            <span style={{ fontSize: '14px', color: '#6b7280' }}>{event.price}</span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <a href="#" className="appie-btn" style={{
                                            flex: 1,
                                            background: '#ef4444',
                                            color: '#fff',
                                            padding: '10px 20px',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            transition: 'all 0.3s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '6px',
                                            fontSize: '14px'
                                        }}>
                                            <i className="fas fa-calendar-plus"></i>
                                            Register
                                        </a>
                                        <a href="#" style={{
                                            padding: '10px 15px',
                                            border: '2px solid #ef4444',
                                            color: '#ef4444',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            transition: 'all 0.3s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '14px'
                                        }}>
                                            <i className="fas fa-share"></i>
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

export default EventHomeSeven;
