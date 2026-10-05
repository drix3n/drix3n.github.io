document.addEventListener('DOMContentLoaded', () => {

    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            htmlElement.setAttribute('data-theme', newTheme);
            htmlElement.style.colorScheme = (newTheme === 'dark') ? 'dark' : 'light';
            try { localStorage.setItem('theme', newTheme); } catch (_) {}
        });
    }

    const fadeItems = document.querySelectorAll('.project-item, .about-content, .contact-card, .hero-content > *');

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeItems.forEach(item => {
        item.classList.add('fade-in');
        observer.observe(item);
    });

    let lastScroll = 0;
    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                header.style.transform = 'translateY(0)';
                return;
            }

            if (currentScroll > lastScroll && currentScroll > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            lastScroll = currentScroll;
        }, { passive: true });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* =========================================================
       AUTO-FIT EMAIL
       Riduce dinamicamente la dimensione del font dell'email
       finché non entra su una riga sola dentro il suo contenitore.
       ========================================================= */
    const emailEl = document.getElementById('contact-email');

    if (emailEl) {
        const fitEmail = () => {
            if (!emailEl) return;

            // Reset: parte dal font massimo definito nel CSS base
            emailEl.style.fontSize = '';

            // Forza nowrap per misurare correttamente
            emailEl.style.whiteSpace = 'nowrap';

            // Larghezza del contenitore (contact-card padding incluso)
            const parent = emailEl.parentElement;
            const parentStyles = window.getComputedStyle(parent);
            const paddingLeft = parseFloat(parentStyles.paddingLeft) || 0;
            const paddingRight = parseFloat(parentStyles.paddingRight) || 0;
            const availableWidth = parent.clientWidth - paddingLeft - paddingRight;

            // Legge la dimensione di partenza dal CSS
            const computed = window.getComputedStyle(emailEl);
            let fontSize = parseFloat(computed.fontSize);

            // Limiti di sicurezza
            const MIN_FONT = 10;   // px minimi
            const MAX_FONT = 40;   // px massimi
            let safety = 0;

            // Riduce finché l'email non entra nella larghezza disponibile
            while (emailEl.scrollWidth > availableWidth && fontSize > MIN_FONT && safety < 80) {
                fontSize -= 0.5;
                emailEl.style.fontSize = fontSize + 'px';
                safety++;
            }

            // Se per assurdo il testo fosse ancora più largo, prova a stringere
            // ulteriormente il letter-spacing come ultima risorsa
            if (emailEl.scrollWidth > availableWidth) {
                emailEl.style.letterSpacing = '-0.04em';
            } else {
                emailEl.style.letterSpacing = '';
            }
        };

        // Esegue al caricamento (dopo che il font è pronto)
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(fitEmail);
        } else {
            window.addEventListener('load', fitEmail);
        }

        // Esegue subito e su resize (con debounce)
        fitEmail();

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(fitEmail, 100);
        });

        // Ricalcola quando cambia l'orientamento
        window.addEventListener('orientationchange', () => {
            setTimeout(fitEmail, 200);
        });
    }
});