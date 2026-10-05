// js/ui.js - Menu mobile e modale con accessibilità

import { detailsDatabase } from './data.js';

/* ============================ MENU MOBILE ============================ */

export function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (!menu) return;

    const isOpening = menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    document.getElementById('mobile-menu-btn')?.setAttribute('aria-expanded', isOpening ? 'true' : 'false');

    if (icon) {
        icon.innerHTML = isOpening
            ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>'
            : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
    }
}

document.addEventListener('click', (e) => {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('mobile-menu-btn');
    if (!menu || menu.classList.contains('hidden')) return;
    if (!menu.contains(e.target) && !btn.contains(e.target)) toggleMobileMenu();
});

/* ============================ MODALE ============================ */

let lastFocusedElement = null;

export function openModal(key) {
    const item = detailsDatabase[key];
    if (!item) return;

    lastFocusedElement = document.activeElement;

    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-content').innerHTML = item.text;

    const modal = document.getElementById('info-modal');
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus trap
    const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const trap = (e) => {
        if (e.key !== 'Tab') return;
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault(); first.focus();
        }
    };
    modal.addEventListener('keydown', trap);
    modal._trap = trap;
}

export function closeModal() {
    const modal = document.getElementById('info-modal');
    if (!modal || modal.classList.contains('hidden')) return;

    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (modal._trap) modal.removeEventListener('keydown', modal._trap);

    lastFocusedElement?.focus?.();
    lastFocusedElement = null;
}

document.addEventListener('click', (e) => {
    const modal = document.getElementById('info-modal');
    if (modal && e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});