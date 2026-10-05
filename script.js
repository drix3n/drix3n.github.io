document.addEventListener('DOMContentLoaded', () => {

    /* 1. Gestione Tema Chiaro / Scuro con Memorizzazione Persistente (LocalStorage) */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Recupera la scelta salvata nel LocalStorage del dispositivo
    let savedTheme = null;
    try { savedTheme = localStorage.getItem('theme'); } catch (_) {}

    if (savedTheme) {
        // Se l'utente ha già visitato il sito ed impostato un tema, usa quello
        htmlElement.setAttribute('data-theme', savedTheme);
    } else {
        // Prima volta in assoluto: Tema Chiaro predefinito
        htmlElement.setAttribute('data-theme', 'light');
    }

    // Toggle al click del pulsante Sole/Luna
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            htmlElement.setAttribute('data-theme', newTheme);
            try { localStorage.setItem('theme', newTheme); } catch (_) {}
        });
    }

    /* 2. Animazione Ingresso (Fade-In con Stagger Effect) */
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

    /* 3. Navbar Intelligente (Nascondi allo Scroll Down, Mostra allo Scroll Up) */
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

    /* 4. Transizione Smooth per i link ancorati */
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
});
