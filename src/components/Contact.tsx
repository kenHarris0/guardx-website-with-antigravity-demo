import { useState } from 'react';
import Reveal from './Reveal';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', mobile: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const formData = new FormData();
            formData.append('access_key', import.meta.env.VITE_ACCESS_KEY);
            formData.append('name', formState.name);
            formData.append('email', formState.email);
            formData.append('mobile', formState.mobile);
            formData.append('message', formState.message);
            formData.append('subject', 'New Contact Form Submission from GuardX Website');
            formData.append('from_name', 'GuardX Website');
            formData.append('to_email', 'guardxcctv@gmail.com');

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('sent');
                setFormState({ name: '', email: '', mobile: '', message: '' });
                // Reset status after 3 seconds
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                console.error('Form submission failed:', data);
                alert('Failed to send message. Please try again.');
                setStatus('idle');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again.');
            setStatus('idle');
        }
    };

    return (
        <section id="contact" style={{ padding: '6rem 2rem', background: 'var(--color-bg)' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                <Reveal>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: '2rem', fontSize: '2.5rem' }}>Get Connected</h2>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
                        Ready to upgrade your security? Fill out the form below and we'll be in touch.
                    </p>
                </Reveal>

                <Reveal delay={200}>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Name</label>
                            <input
                                required
                                type="text"
                                value={formState.name}
                                onChange={e => setFormState({ ...formState, name: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'var(--color-bg-light)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '4px',
                                    color: 'white',
                                    outline: 'none'
                                }}
                                onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Email</label>
                            <input
                                required
                                type="email"
                                value={formState.email}
                                onChange={e => setFormState({ ...formState, email: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'var(--color-bg-light)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '4px',
                                    color: 'white',
                                    outline: 'none'
                                }}
                                onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Mobile Number</label>
                            <input
                                required
                                type="tel"
                                value={formState.mobile}
                                onChange={e => setFormState({ ...formState, mobile: e.target.value })}
                                placeholder="+91 1234567890"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'var(--color-bg-light)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '4px',
                                    color: 'white',
                                    outline: 'none'
                                }}
                                onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Message</label>
                            <textarea
                                required
                                rows={4}
                                value={formState.message}
                                onChange={e => setFormState({ ...formState, message: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'var(--color-bg-light)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '4px',
                                    color: 'white',
                                    outline: 'none',
                                    fontFamily: 'inherit'
                                }}
                                onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                        </div>

                        <button
                            type="submit"
                            style={{
                                background: status === 'sent' ? 'var(--color-accent)' : 'var(--color-primary)',
                                color: '#000',
                                padding: '1rem',
                                border: 'none',
                                borderRadius: '4px',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                cursor: status === 'sending' ? 'wait' : 'pointer',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'all 0.3s ease'
                            }}
                            className="hover-glow"
                            disabled={status === 'sending'}
                        >
                            {status === 'idle' && <><FaPaperPlane /> Send Message</>}
                            {status === 'sending' && 'Sending...'}
                            {status === 'sent' && <><FaEnvelope /> Sent Successfully!</>}
                        </button>
                    </form>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
