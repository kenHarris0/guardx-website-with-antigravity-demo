import { FaHome, FaBuilding, FaCamera, FaServer, FaMobileAlt } from 'react-icons/fa';
import Reveal from './Reveal';

const Services = () => {
    return (
        <section id="services" style={{ padding: '6rem 2rem', background: 'var(--color-bg)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Reveal>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem', fontWeight: '600' }}>Our Expertise</h2>
                        <h3 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Comprehensive Security Solutions</h3>
                    </div>
                </Reveal>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <Reveal delay={100}>
                        <div className="card-hover" style={{
                            background: 'var(--color-bg-light)',
                            padding: '2.5rem',
                            borderRadius: 'var(--border-radius)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            height: '100%'
                        }}>
                            <FaHome style={{ fontSize: '3rem', color: 'var(--color-accent)', marginBottom: '1.5rem' }} />
                            <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Residential</h4>
                            <p style={{ color: 'var(--color-text-muted)' }}>
                                Protect your family and home with high-definition cameras, smart motion detection, and 24/7 mobile access.
                            </p>
                            <ul style={{ marginTop: '1.5rem', listStyle: 'none', color: 'var(--color-text-muted)' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><FaCamera size={14} /> 4K Cameras</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><FaMobileAlt size={14} /> Remote App View</li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={300}>
                        <div className="card-hover" style={{
                            background: 'var(--color-bg-light)',
                            padding: '2.5rem',
                            borderRadius: 'var(--border-radius)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            height: '100%'
                        }}>
                            <FaBuilding style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }} />
                            <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Commercial</h4>
                            <p style={{ color: 'var(--color-text-muted)' }}>
                                Scalable surveillance for businesses. Monitor employees, prevent theft, and secure assets with enterprise-grade NVRs.
                            </p>
                            <ul style={{ marginTop: '1.5rem', listStyle: 'none', color: 'var(--color-text-muted)' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><FaServer size={14} /> Cloud & Local Storage</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><FaShieldAlt size={14} /> Access Control</li>
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

import { FaShieldAlt } from 'react-icons/fa'; // Import needed for the list item above
export default Services;
