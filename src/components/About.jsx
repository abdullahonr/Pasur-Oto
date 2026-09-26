import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import autoShopImg from '../assets/images/auto_shop.jpg';
import shop1 from '../assets/images/shop_1.jpg';
import shop2 from '../assets/images/shop_2.jpg';
import shop3 from '../assets/images/shop_3.jpg';
import shop4 from '../assets/images/shop_4.jpg';
import shop5 from '../assets/images/shop_5.jpg';
import video1 from '../assets/images/shop_video_1.mp4';
import video2 from '../assets/images/shop_video_2.mp4';

export default function About() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeMediaIndex, setActiveMediaIndex] = useState(0);

    const galleryFiles = [
        { type: 'image', src: shop1, alt: 'Pasur Oto Dükkan 1' },
        { type: 'image', src: shop2, alt: 'Pasur Oto Dükkan 2' },
        { type: 'image', src: shop3, alt: 'Pasur Oto Dükkan 3' },
        { type: 'image', src: shop4, alt: 'Pasur Oto Dükkan 4' },
        { type: 'image', src: shop5, alt: 'Pasur Oto Dükkan 5' },
        { type: 'video', src: video1 },
        { type: 'video', src: video2 }
    ];

    const openLightbox = (index) => {
        setActiveMediaIndex(index);
        setLightboxOpen(true);
    };

    const nextMedia = (e) => {
        if (e) e.stopPropagation();
        setActiveMediaIndex((prev) => (prev + 1) % galleryFiles.length);
    };

    const prevMedia = (e) => {
        if (e) e.stopPropagation();
        setActiveMediaIndex((prev) => (prev - 1 + galleryFiles.length) % galleryFiles.length);
    };

    // Close lightbox on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setLightboxOpen(false);
            if (e.key === 'ArrowRight') nextMedia();
            if (e.key === 'ArrowLeft') prevMedia();
        };
        if (lightboxOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen]);

    return (
        <section id="about">
            <div className="container">
                <div className="row align-items-center gy-5">
                    <div className="col-lg-6 pe-lg-5">
                        <div data-aos="fade-right">
                            <h6 className="text-primary fw-bold text-uppercase mb-2 tracking-wider">Hakkımızda</h6>
                            <h2 className="section-title mb-4">Sektörde İz Bırakan<br /><span className="title-accent">Profesyonel Dokunuş</span></h2>
                            <p className="text-muted mb-4 fs-5">Pasur Oto Jant & Lastik olarak, aracınızın yola en iyi şekilde tutunması ve mükemmel görünmesi için çalışıyoruz.</p>
                            <p className="text-muted mb-5">Yılların verdiği tecrübe, alanında uzman ekibimiz ve son teknoloji ekipmanlarımızla; lastik değişimi, jant değişimi, jant boyama ve balans ayarı gibi birçok hizmeti tek çatı altında sunuyoruz. Aracınıza hak ettiği değeri veriyoruz.</p>
                        </div>

                        <div className="row g-4">
                            <div className="col-sm-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="bi bi-patch-check-fill"></i>
                                    </div>
                                    <h5 className="fw-bold mb-1">Garantili Hizmet</h5>
                                    <small className="text-muted">Tüm işlemlerimiz resmi garantilidir</small>
                                </div>
                            </div>
                            <div className="col-sm-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="bi bi-tools"></i>
                                    </div>
                                    <h5 className="fw-bold mb-1">Uzman Ekip</h5>
                                    <small className="text-muted">Eğitimli ve sertifikalı teknisyenler</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">
                        <div className="about-image-wrapper">
                            <img src={autoShopImg} alt="Pasur Oto Dükkan" />
                            <div className="experience-badge" data-aos="zoom-in" data-aos-delay="600">
                                <h3>15+</h3>
                                <p>Yıllık<br />Tecrübe</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-12 text-center mb-4" data-aos="fade-up">
                        <h3 className="section-title fs-2 mb-2">İşletmemizden <span className="title-accent">Kareler</span></h3>
                        <p className="text-muted">Servisimizden güncel fotoğraf ve videolar (Büyütmek için tıklayın)</p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {galleryFiles.map((media, index) => (
                            <div className="col-6 col-md-4 col-lg-3" key={index} data-aos="fade-up" data-aos-delay={100 * (index % 4)}>
                                <div
                                    className="gallery-item position-relative shadow-sm"
                                    onClick={() => openLightbox(index)}
                                    style={{ cursor: 'pointer', borderRadius: '1rem', overflow: 'hidden', aspectRatio: '3/4', backgroundColor: '#000' }}
                                >
                                    {media.type === 'image' ? (
                                        <img
                                            src={media.src}
                                            className="w-100 h-100"
                                            style={{ objectFit: 'cover', transition: 'transform 0.4s' }}
                                            alt={media.alt}
                                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                        />
                                    ) : (
                                        <div
                                            className="position-relative w-100 h-100"
                                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                            style={{ transition: 'transform 0.4s' }}
                                        >
                                            <video src={media.src} className="w-100 h-100" style={{ objectFit: 'cover' }} autoPlay muted loop playsInline />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lightbox-overlay"
                        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 10000, background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <button onClick={() => setLightboxOpen(false)} className="btn btn-link text-white position-absolute top-0 end-0 m-4 text-decoration-none p-0" style={{ zIndex: 10001 }}>
                            <i className="bi bi-x-lg fs-2"></i>
                        </button>

                        <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center p-md-5 p-2" onClick={() => setLightboxOpen(false)}>
                            <button onClick={prevMedia} className="btn btn-link text-white position-absolute start-0 ms-md-4 ms-2 text-decoration-none p-0" style={{ zIndex: 10001 }}>
                                <i className="bi bi-chevron-left fs-1" style={{ filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.5))' }}></i>
                            </button>

                            <motion.div
                                key={activeMediaIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2 }}
                                className="w-100 h-100 d-flex align-items-center justify-content-center"
                            >
                                {galleryFiles[activeMediaIndex].type === 'image' ? (
                                    <img
                                        src={galleryFiles[activeMediaIndex].src}
                                        style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain', borderRadius: '0.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                ) : (
                                    <video
                                        src={galleryFiles[activeMediaIndex].src}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain', borderRadius: '0.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                )}
                            </motion.div>

                            <button onClick={nextMedia} className="btn btn-link text-white position-absolute end-0 me-md-4 me-2 text-decoration-none p-0" style={{ zIndex: 10001 }}>
                                <i className="bi bi-chevron-right fs-1" style={{ filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.5))' }}></i>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
