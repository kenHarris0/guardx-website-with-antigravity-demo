import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Contact />

            {/* Footer (Embedded for simplicity) */}
            <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-text-muted)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <p>&copy; {new Date().getFullYear()} GuardX. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default App
