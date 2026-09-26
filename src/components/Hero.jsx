import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="home" className="hero-section">
            <motion.div 
                className="hero-bg-animate"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            ></motion.div>
            <div className="hero-overlay"></div>
            <div className="container hero-content text-center text-md-start">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-xl-7">
                        <motion.div 
                            initial={{ y: 25, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <span className="badge bg-primary bg-opacity-10 text-primary border border-primary rounded-pill px-3 py-2 mb-4 fs-6 fw-bold">
                                <i className="bi bi-shield-check me-2"></i>15+ Yıllık Güven ve Tecrübe
                            </span>
                        </motion.div>
                        
                        <motion.h1 
                            className="hero-title"
                            initial={{ y: 25, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            Yolculuğunuz <span className="highlight">Güvenle</span> Başlasın
                        </motion.h1>
                        
                        <motion.p 
                            className="hero-subtitle"
                            initial={{ y: 25, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            Profesyonel jant ve lastik çözümleriyle aracınızın performansını ve şıklığını zirveye taşıyoruz. İleri teknoloji ekipmanlar ve uzman kadro ile güvenliğiniz bizim önceliğimiz.
                        </motion.p>
                        
                        <motion.div 
                            className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start"
                            initial={{ y: 25, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <a href="#services" className="btn btn-primary rounded-pill btn-lg px-4 py-3">Hizmetlerimizi İnceleyin <i className="bi bi-arrow-right ms-2"></i></a>
                            <a href={`https://wa.me/905061904285?text=${encodeURIComponent('Merhaba, web sitenizi inceliyordum. Jant ve lastik ürünleriniz/fiyatlarınız hakkında genel bir bilgi almak istiyorum.')}`} target="_blank" rel="noreferrer" className="btn btn-outline-light rounded-pill btn-lg px-4 py-3">
                                <i className="bi bi-whatsapp me-2"></i>WhatsApp ile Fiyat Al
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
