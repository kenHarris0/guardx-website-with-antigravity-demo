import { FaArrowRight } from 'react-icons/fa';
import CCTVCamera from './CCTVCamera';


const Hero = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section
            id="hero"
            style={{
                height: '100vh',
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: 'radial-gradient(circle at 50% 50%, rgba(64, 150, 230, 0.08) 0%, rgba(13, 17, 23, 1) 70%)'
            }}
        >
            {/* Background Grid Effect */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                zIndex: 1
            }}></div>

            {/* Scanline Animation */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '5px',
                background: 'rgba(64, 150, 230, 0.5)',
                boxShadow: '0 0 15px rgba(64, 150, 230, 0.8)',
                animation: 'scanline 4s linear infinite',
                zIndex: 2,
                opacity: 0.3
            }}></div>


            {/* 3D CCTV Camera - Floating on the left */}
            <div className="animate-slideUp delay-700" style={{
                position: 'absolute',
                left: '2%', // Moved to left side
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                opacity: 1
            }}>
                <CCTVCamera />
            </div>

            {/* Content Content */}
            <div style={{ zIndex: 3, textAlign: 'center', maxWidth: '800px', padding: '0 1rem' }}>
                <h2
                    className="animate-slideUp"
                    style={{
                        color: 'var(--color-primary)',
                        fontSize: '1.2rem',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        marginBottom: '1rem',
                        fontWeight: '600'
                    }}
                >
                    Advanced Surveillance Systems
                </h2>
                <h1
                    className="animate-slideUp delay-200"
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        fontWeight: '800',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(to right, #fff, #a5b4fc)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    Secure Your World With <span style={{ color: 'var(--color-primary)', WebkitTextFillColor: 'initial' }}>GuardX</span>
                </h1>
                <p
                    className="animate-slideUp delay-300"
                    style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-text-muted)',
                        marginBottom: '2.5rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                >
                    Professional CCTV installation for homes and businesses. Rest easy knowing your property is under the watchful eye of cutting-edge technology.
                </p>
                <button
                    className="animate-slideUp delay-500 hover-glow"
                    onClick={scrollToContact}
                    style={{
                        padding: '1rem 2.5rem',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        background: 'var(--color-primary)',
                        color: '#000',
                        borderRadius: '4px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'transform 0.2s',
                        boxShadow: '0 0 20px rgba(64, 150, 230, 0.4)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    Get a Quote <FaArrowRight />
                </button>
            </div>
        </section>
    );
};

export default Hero;
