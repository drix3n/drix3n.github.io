// js/main.js - Entry-point che carica i moduli condivisi

import { toggleMobileMenu, openModal, closeModal } from './ui.js';
import { mountComponents } from './components.js';

// Esposizione globale per gli onclick inline nell'HTML
window.toggleMobileMenu = toggleMobileMenu;
window.openModal = openModal;
window.closeModal = closeModal;

// Se la pagina usa i placeholder [data-component], monta header/footer
document.addEventListener('DOMContentLoaded', async () => {
    const path = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    const currentPage = path === 'index' ? '' : path;
    await mountComponents(currentPage);
});