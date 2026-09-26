export default function Services() {
    return (
        <section id="services" style={{ backgroundColor: 'var(--bg-surface)' }}>
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h6 className="text-primary fw-bold text-uppercase mb-2">Hizmetlerimiz</h6>
                    <h2 className="section-title">Size Nasıl Yardımcı Olabiliriz?</h2>
                    <p className="section-subtitle mt-3">Aracınız için ihtiyaç duyduğunuz tüm jant ve lastik hizmetleri, tek noktada profesyonel çözümlerle.</p>
                </div>
                
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    <div className="col" data-aos="fade-up" data-aos-delay="100">
                        <div className="service-card">
                            <div className="service-icon-box">
                                <i className="bi bi-car-front"></i>
                            </div>
                            <h4>Sıfır & 2. El Lastik</h4>
                            <p>Dünyaca ünlü markaların garantili sıfır lastikleri ve titizlikle kontrol edilmiş yüksek kondisyonlu 2. el lastik seçenekleri.</p>
                        </div>
                    </div>
                    <div className="col" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-card">
                            <div className="service-icon-box">
                                <i className="bi bi-palette"></i>
                            </div>
                            <h4>Jant Boyama</h4>
                            <p>Hasar görmüş jantlarınızın onarımı, CNC ile yüzey işleme ve özel fırın boya işlemleriyle ilk günkü görünümüne kavuşturulması.</p>
                        </div>
                    </div>
                    <div className="col" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-card">
                            <div className="service-icon-box">
                                <i className="bi bi-wrench-adjustable-circle"></i>
                            </div>
                            <h4>Balans & Değişim</h4>
                            <p>Bilgisayarlı hassas balans ayarı, güvenli lastik sökme takma ve rotasyon işlemleri ile sürüş konforunuzu maksimize ediyoruz.</p>
                        </div>
                    </div>
                    <div className="col" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-card">
                            <div className="service-icon-box">
                                <i className="bi bi-disc"></i>
                            </div>
                            <h4>Çeşitli Jant Modelleri</h4>
                            <p>Aracınızın tarzını yansıtacak, dünyaca ünlü markaların en şık ve dayanıklı alaşım jant seçenekleri stoklarımızda.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
