import Reveal from './Reveal';

const About = () => {
    return (
        <section id="about" style={{ padding: '6rem 2rem', background: 'var(--color-bg-light)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
                <div style={{ flex: '1 1 400px' }}>
                    <Reveal>
                        <h2 style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem', fontWeight: '600' }}>About GuardX</h2>
                        <h3 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '1.5rem' }}>We See What You Can't</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            GuardX was founded on a simple principle: peace of mind shouldn't be complicated. We specialize in bespoke CCTV installations that blend seamlessly into your property while providing military-grade security.
                        </p>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                            Whether you are securing a new startup or your forever home, our team of certified technicians ensures every angle is covered.
                        </p>
                    </Reveal>
                </div>
                <div style={{ flex: '1 1 300px' }}>
                    <Reveal delay={200}>
                        <div style={{
                            width: '100%',
                            height: '400px',
                            background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)',
                            borderRadius: 'var(--border-radius)',
                            position: 'relative',
                            overflow: 'hidden',
                            border: '1px solid rgba(26, 255, 149, 0.2)'
                        }}>
                            {/* Abstract Graphic representing a lens or security */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '200px',
                                height: '200px',
                                border: '2px solid var(--color-primary)',
                                borderRadius: '50%',
                                boxShadow: '0 0 30px rgba(26, 255, 149, 0.2)'
                            }}></div>
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '150px',
                                height: '150px',
                                border: '2px solid var(--color-accent)',
                                borderRadius: '50%',
                                opacity: 0.6
                            }}></div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default About;
