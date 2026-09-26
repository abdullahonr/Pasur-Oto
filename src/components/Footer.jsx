export default function Footer({ openModal }) {
    return (
        <footer>
            <div className="container">
                <div className="row align-items-center flex-column flex-md-row gy-4">
                    <div className="col-md-6 text-center text-md-start">
                        <a className="navbar-brand fs-4 mb-2 d-inline-block" href="#">PASUR OTO <span>JANT</span></a>
                        <p className="mb-0 text-muted mt-2">&copy; 2026 Pasur Oto Jant & Lastik. Tüm hakları saklıdır.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <button className="footer-link me-4" onClick={() => openModal('privacy')}>Gizlilik Politikası</button>
                        <button className="footer-link" onClick={() => openModal('terms')}>Kullanım Şartları</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
