export default function Contact() {
    return (
        <section id="contact" style={{ backgroundColor: 'var(--bg-surface)' }}>
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h6 className="text-primary fw-bold text-uppercase mb-2">İletişim</h6>
                    <h2 className="section-title">Bize Ulaşın</h2>
                    <p className="section-subtitle mt-3">Randevu almak veya bilgi edinmek için adresimizi ziyaret edebilir ya da bizi arayabilirsiniz.</p>
                </div>

                <div className="row g-4 align-items-stretch">
                    <div className="col-lg-5" data-aos="fade-right">
                        <div className="contact-box">
                            <h4 className="fw-bold mb-4 font-heading">İletişim Bilgileri</h4>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="bi bi-geo-alt"></i>
                                </div>
                                <div className="contact-details">
                                    <h5>Merkez Şube</h5>
                                    <p>
                                        <a href="https://www.google.com/maps/search/?api=1&query=Pasur+Auto+Jant+Lastik+Oto+Y%C4%B1kama+Esenyurt" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-body link-primary-hover">
                                            Pınar, 1495. Sk. No:4<br />Esenyurt / İstanbul
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="bi bi-geo-alt"></i>
                                </div>
                                <div className="contact-details">
                                    <h5>Yeşilkent Şubesi</h5>
                                    <p>
                                        <a href="https://www.google.com/maps/place/PASUR+OTO+JANT+LAST%C4%B0K/@41.0201502,28.655678,657m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14b55f006b9686c1:0xd6ffbd89251f331c!8m2!3d41.0201502!4d28.655678!16s%2Fg%2F11xg4x_m6f?entry=ttu" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-body link-primary-hover">
                                            Yeşilkent, 34515<br />Esenyurt / İstanbul
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="bi bi-telephone"></i>
                                </div>
                                <div className="contact-details">
                                    <h5>Telefon</h5>
                                    <p><a href="tel:+905061904285">+90 (506) 190 42 85</a><br />
                                        <a href="tel:+905417669013">+90 (541) 766 90 13</a><br />
                                        <a href="tel:+905519951063">+90 (551) 995 10 63</a></p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="bi bi-clock"></i>
                                </div>
                                <div className="contact-details">
                                    <h5>Çalışma Saatleri</h5>
                                    <p>Haftanın 7 Günü<br />08:00 - 22:00</p>
                                </div>
                            </div>

                            <div className="social-icons">
                                <a href="https://www.instagram.com/pasurjant_1/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                                <a href="https://www.tiktok.com/@pasur.otojantlastik" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="bi bi-tiktok"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
                        <div className="maps-wrapper d-flex flex-column gap-4">
                            <div>
                                <h5 className="mb-3 font-heading fw-bold text-primary"><i className="bi bi-geo-fill me-2"></i>Merkez Şube Konumu</h5>
                                <div className="map-container shadow-sm" style={{ width: '100%', height: 'auto', aspectRatio: '21 / 9', maxHeight: '350px', minHeight: '250px', borderRadius: '12px', overflow: 'hidden' }}>
                                    <iframe
                                        src="https://maps.google.com/maps?q=Pasur%20Auto%20Jant%20Lastik%20Oto%20Y%C4%B1kama%20Esenyurt&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </div>
                            
                            <div>
                                <h5 className="mb-3 font-heading fw-bold text-primary"><i className="bi bi-geo-fill me-2"></i>Yeşilkent Şubesi Konumu</h5>
                                <div className="map-container shadow-sm" style={{ width: '100%', height: 'auto', aspectRatio: '21 / 9', maxHeight: '350px', minHeight: '250px', borderRadius: '12px', overflow: 'hidden' }}>
                                    <iframe
                                        src="https://maps.google.com/maps?cid=15492309639908766492&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
