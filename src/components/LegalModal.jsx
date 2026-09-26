export default function LegalModal({ isOpen, type, closeModal }) {
    const privacyText = (
        <>
            <p><strong>Pasur Oto Jant & Lastik</strong> olarak kişisel verilerinizin güvenliğine önem veriyoruz.</p>
            <p>Bu web sitesi statik tanıtım amaçlı olarak hazırlanmıştır ve site üzerinden otomatik olarak doğrudan kişisel veri toplanmamaktadır.</p>
            <p>Sitemizde yer alan WhatsApp veya Telefon numaraları üzerinden bizimle iletişime geçtiğinizde paylaştığınız ad, soyad ve iletişim bilgileri, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, yalnızca taleplerinize yanıt vermek ve hizmetlerimiz hakkında bilgi sağlamak amacıyla işlenmektedir. Bu veriler üçüncü şahıslarla paylaşılmaz.</p>
        </>
    );

    const termsText = (
        <>
            <p>Bu web sitesi, <strong>Pasur Oto Jant & Lastik</strong> hizmetlerini tanıtmak amacıyla hazırlanmıştır.</p>
            <p>Sitede yer alan fiyatlar, ürün özellikleri ve hizmet detayları bilgilendirme ve tavsiye niteliğindedir. Güncel fiyat ve stok bilgisi için lütfen iletişim kanallarımız (WhatsApp veya Telefon) üzerinden teyit alınız.</p>
            <p>Site içeriğinin izinsiz kullanımı, kopyalanması veya dağıtılması yasaktır. Pasur Oto, sitedeki bilgi ve görselleri önceden haber vermeksizin değiştirme hakkını saklı tutar.</p>
        </>
    );

    const title = type === 'privacy' ? 'Gizlilik Politikası (KVKK)' : 'Kullanım Şartları';
    const content = type === 'privacy' ? privacyText : termsText;

    if (!isOpen) return null;

    return (
        <div className={`modal-overlay ${isOpen ? 'show' : ''}`} onClick={closeModal}>
            <div className="modal-dialog-custom" onClick={e => e.stopPropagation()}>
                <div className="modal-content border-danger" style={{ borderWidth: '2px', boxShadow: '0 10px 30px rgba(220, 53, 69, 0.2)' }}>
                    <div className="modal-header border-bottom border-danger">
                        <h5 className="modal-title text-danger fw-bold" id="legalModalLabel">
                            <i className="bi bi-shield-check me-2"></i>{title}
                        </h5>
                        <button type="button" className="btn-close" onClick={closeModal} aria-label="Kapat"></button>
                    </div>
                    <div className="modal-body">
                        {content}
                    </div>
                    <div className="modal-footer border-0 justify-content-center">
                        <button type="button" className="btn btn-danger rounded-pill px-5 py-2 fw-bold" onClick={closeModal}>Anladım, Kapat</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
