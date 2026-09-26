import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            const sections = document.querySelectorAll('section');
            let current = 'home';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    return (
        <motion.nav 
            className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`} 
            id="main-navbar"
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <div className="container">
                <motion.a 
                    className="navbar-brand" 
                    href="#" 
                    initial={{ x: -40, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
                >
                    PASUR OTO <span>JANT & LASTİK</span>
                </motion.a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <motion.li 
                            className="nav-item"
                            initial={{ y: -40, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.175, 0.885, 0.32, 1.275] }}
                        >
                            <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} href="#home" onClick={handleLinkClick}>Ana Sayfa</a>
                        </motion.li>
                        <motion.li 
                            className="nav-item"
                            initial={{ y: -40, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.175, 0.885, 0.32, 1.275] }}
                        >
                            <a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} href="#about" onClick={handleLinkClick}>Hakkımızda</a>
                        </motion.li>
                        <motion.li 
                            className="nav-item"
                            initial={{ y: -40, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}
                        >
                            <a className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} href="#services" onClick={handleLinkClick}>Hizmetlerimiz</a>
                        </motion.li>
                        <motion.li 
                            className="nav-item"
                            initial={{ y: -40, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }}
                        >
                            <a className={`nav-link ${activeSection === 'products' ? 'active' : ''}`} href="#products" onClick={handleLinkClick}>Ürünlerimiz</a>
                        </motion.li>
                        <motion.li 
                            className="nav-item"
                            initial={{ y: -40, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ duration: 0.8, delay: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
                        >
                            <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} href="#contact" onClick={handleLinkClick}>İletişim</a>
                        </motion.li>
                    </ul>
                    <motion.div 
                        className="d-flex align-items-center"
                        initial={{ x: 40, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }} 
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
                    >
                        <a href="tel:+905061904285" className="btn btn-primary rounded-pill">
                            <i className="bi bi-telephone-fill me-2"></i>Hemen Ara
                        </a>
                    </motion.div>
                </div>
            </div>
        </motion.nav>
    );
}
