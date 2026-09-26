import { useEffect } from 'react';

export const useAos = () => {
    useEffect(() => {
        document.documentElement.classList.add('js-enabled');
        
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(el => {
            const duration = el.getAttribute('data-aos-duration') || '800';
            const delay = el.getAttribute('data-aos-delay') || '0';
            el.style.transitionDuration = duration + 'ms';
            el.style.transitionDelay = delay + 'ms';
        });

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);
};
