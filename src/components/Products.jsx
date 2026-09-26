import taycanImg from '../assets/images/taycan_rim.jpg';
import veronaImg from '../assets/images/verona_rim.jpg';
import malloryImg from '../assets/images/mallory_rim.jpg';
import mercedesImg from '../assets/images/mercedes_rim.jpg';
import etronImg from '../assets/images/etron_rim.jpg';
import bmwImg from '../assets/images/bmw_rim.jpg';

import michelinImg from '../assets/images/michelin_tire.jpg';
import continentalImg from '../assets/images/continental_tire.jpg';
import pirelliImg from '../assets/images/pirelli_tire.jpg';
import petlasImg from '../assets/images/petlas_tire.jpg';
import bridgestoneImg from '../assets/images/bridgestone_tire.jpg';
import lassaImg from '../assets/images/lassa_tire.jpg';

export default function Products() {
    const jantModelleri = [
        { id: 1, isim: "Porsche Taycan Jant", rozet: "Aerodinamik Tasarım", rozetClass: "bg-danger", icon: "bi-wind", img: taycanImg },
        { id: 2, isim: "VW Verona Jant", rozet: "19 İnç Çok Kollu", rozetClass: "bg-warning text-dark", icon: "bi-record-circle", img: veronaImg },
        { id: 3, isim: "VW Mallory Jant", rozet: "R-Line Uyumlu", rozetClass: "bg-info text-dark", icon: "bi-car-front-fill", img: malloryImg },
        { id: 4, isim: "Mercedes AMG Jant", rozet: "Dövme Alaşım", rozetClass: "bg-dark", icon: "bi-shield-check", img: mercedesImg },
        { id: 5, isim: "Audi E-tron Jant", rozet: "EV (Elektrikli) Uyumlu", rozetClass: "bg-success", icon: "bi-ev-front-fill", img: etronImg },
        { id: 6, isim: "BMW M Sport Jant", rozet: "M Performance", rozetClass: "bg-primary", icon: "bi-lightning-fill", img: bmwImg }
    ];

    const lastikModelleri = [
        { id: 1, isim: "Michelin Pilot Sport 4S", rozet: "Ultra Yüksek Performans", rozetClass: "bg-danger", icon: "bi-speedometer2", img: michelinImg },
        { id: 2, isim: "Continental PremiumContact 7", rozet: "Üstün Islak Zemin", rozetClass: "bg-warning text-dark", icon: "bi-cloud-rain-fill", img: continentalImg },
        { id: 3, isim: "Pirelli P Zero", rozet: "Spor Araç Onaylı", rozetClass: "bg-dark", icon: "bi-flag-fill", img: pirelliImg },
        { id: 4, isim: "Petlas Velox Sport PT741", rozet: "Asimetrik Desen", rozetClass: "bg-danger", icon: "bi-bezier2", img: petlasImg },
        { id: 5, isim: "Bridgestone Turanza T005", rozet: "Uzun Ömürlü Konfor", rozetClass: "bg-info text-dark", icon: "bi-shield-plus", img: bridgestoneImg },
        { id: 6, isim: "Lassa Driveways Sport", rozet: "Sportif Sürüş", rozetClass: "bg-success", icon: "bi-steering", img: lassaImg }
    ];

    return (
        <section id="products">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h6 className="text-primary fw-bold text-uppercase mb-2">Ürünlerimiz</h6>
                    <h2 className="section-title">Öne Çıkan Jant Modelleri</h2>
                    <p className="section-subtitle mt-3">Stoklarımızda bulunan popüler premium jant modellerinden bazıları.</p>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center mb-5">
                    {jantModelleri.map((jant, index) => (
                        <div className="col" data-aos="zoom-in-up" data-aos-delay={100 * (index + 1)} key={jant.id}>
                            <div className="product-card">
                                <div className="product-img-wrapper">
                                    <span className={`product-badge ${jant.rozetClass}`}>
                                        <i className={`bi ${jant.icon} me-1`}></i> {jant.rozet}
                                    </span>
                                    <img src={jant.img} alt={jant.isim} />
                                </div>
                                <div className="product-content">
                                    <div className="product-cat mb-1">Alaşım Jant</div>
                                    <h4 className="product-title mb-4">{jant.isim}</h4>
                                    
                                    <a href={`https://wa.me/905061904285?text=${encodeURIComponent(`Merhaba, web sitenizden ulaşıyorum. ${jant.isim} modelinizin güncel fiyatını ve stok durumunu öğrenebilir miyim?`)}`} target="_blank" rel="noreferrer" className="btn btn-product">
                                        <i className="bi bi-whatsapp me-2 text-success"></i>Fiyat Sor
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="section-header mt-5 pt-5" data-aos="fade-up">
                    <h2 className="section-title">Öne Çıkan Lastik Modelleri</h2>
                    <p className="section-subtitle mt-3">Her yola ve koşula uygun, dünyaca ünlü markaların en çok tercih edilen lastikleri.</p>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                    {lastikModelleri.map((lastik, index) => (
                        <div className="col" data-aos="zoom-in-up" data-aos-delay={100 * (index + 1)} key={lastik.id}>
                            <div className="product-card">
                                <div className="product-img-wrapper">
                                    <span className={`product-badge ${lastik.rozetClass}`}>
                                        <i className={`bi ${lastik.icon} me-1`}></i> {lastik.rozet}
                                    </span>
                                    <img src={lastik.img} alt={lastik.isim} />
                                </div>
                                <div className="product-content">
                                    <div className="product-cat mb-1">Premium Lastik</div>
                                    <h4 className="product-title mb-4">{lastik.isim}</h4>
                                    
                                    <a href={`https://wa.me/905061904285?text=${encodeURIComponent(`Merhaba, web sitenizden ulaşıyorum. ${lastik.isim} lastik modelinizin güncel fiyatını ve uygun ebatlarını öğrenebilir miyim?`)}`} target="_blank" rel="noreferrer" className="btn btn-product">
                                        <i className="bi bi-whatsapp me-2 text-success"></i>Fiyat Sor
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-5 pt-4" data-aos="fade-up" data-aos-delay="400">
                    <a href={`https://wa.me/905061904285?text=${encodeURIComponent(`Merhaba, ürünlerinizle ilgileniyorum. Tüm jant ve lastik modelleriniz için güncel kataloğunuzu gönderebilir misiniz?`)}`} target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill px-5 py-3 fs-5">
                        Tüm Ürünler İçin Kataloğu İste <i className="bi bi-file-earmark-pdf ms-2"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}
