import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '/logo.png';
import '../styles/index.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className="fixed w-full z-50 transition-all duration-300"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
                background: scrolled ? 'rgba(22, 27, 34, 0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(26, 255, 149, 0.1)' : 'none',
                transition: 'all 0.4s ease',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <div className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <img src={logo} alt="GuardX Logo" style={{ height: '2.5rem', width: 'auto' }} />
                <span style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '1px' }}>
                    GUARD<span style={{ color: 'var(--color-primary)' }}>X</span>
                </span>
            </div>

            {/* Desktop Menu */}
            <ul style={{
                display: 'none',
                gap: '2rem',
                listStyle: 'none'
            }} className="desktop-menu">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            style={{
                                fontSize: '1rem',
                                fontWeight: '500',
                                color: 'var(--color-text)',
                                position: 'relative'
                            }}
                            className="hover-glow"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div
                className="mobile-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{ fontSize: '1.5rem', cursor: 'pointer', color: 'var(--color-text)' }}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    background: 'rgba(13, 17, 23, 0.98)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    borderBottom: '1px solid rgba(26, 255, 149, 0.2)'
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            style={{ fontSize: '1.2rem', color: 'var(--color-text)' }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}

            {/* In-line styles for media queries (simple hack since we aren't using a preprocessor) */}
            <style>{`
                @media (min-width: 768px) {
                    .desktop-menu { display: flex !important; }
                    .mobile-toggle { display: none !important; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
