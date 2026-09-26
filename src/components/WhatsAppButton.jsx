export default function WhatsAppButton() {
    return (
        <a href={`https://wa.me/905061904285?text=${encodeURIComponent('Merhaba, web sitenizi inceliyordum. Jant ve lastik ürünleriniz/fiyatlarınız hakkında genel bir bilgi almak istiyorum.')}`} className="whatsapp-float" target="_blank" rel="noreferrer" title="WhatsApp ile İletişime Geçin">
            <i className="bi bi-whatsapp"></i>
        </a>
    );
}
