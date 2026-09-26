import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import WhatsAppButton from './components/WhatsAppButton';
import { useAos } from './hooks/useAos';

function App() {
    useAos();
    const [modalConfig, setModalConfig] = useState({ isOpen: false, type: 'privacy' });

    const openModal = (type) => setModalConfig({ isOpen: true, type });
    const closeModal = () => setModalConfig({ ...modalConfig, isOpen: false });

    return (
        <div data-bs-spy="scroll" data-bs-target="#main-navbar" data-bs-offset="100">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Products />
            <Contact />
            <Footer openModal={openModal} />
            <LegalModal isOpen={modalConfig.isOpen} type={modalConfig.type} closeModal={closeModal} />
            <WhatsAppButton />
        </div>
    );
}

export default App;
