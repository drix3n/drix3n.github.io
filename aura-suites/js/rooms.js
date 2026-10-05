// js/rooms.js - Dettaglio camera

import { roomsDatabase } from './data.js';

export function updateAvailabilityBadge(element, available, maxStock) {
    if (!element) return;
    const yellowThreshold = Math.ceil(maxStock / 2);

    if (available <= 2) {
        element.textContent = `⚠ Solo ${available}/${maxStock} stanze rimaste!`;
        element.className = 'text-xs font-semibold px-3 py-1 rounded-full inline-block bg-red-100 text-red-800 border border-red-200';
    } else if (available <= yellowThreshold) {
        element.textContent = `⚡ ${available}/${maxStock} stanze disponibili`;
        element.className = 'text-xs font-semibold px-3 py-1 rounded-full inline-block bg-amber-100 text-amber-800 border border-amber-200';
    } else {
        element.textContent = `✓ ${available}/${maxStock} stanze disponibili`;
        element.className = 'text-xs font-semibold px-3 py-1 rounded-full inline-block bg-emerald-100 text-emerald-800 border border-emerald-200';
    }
}

export function loadRoomDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const roomId = urlParams.get('id') || 'classic-queen';
    const room = roomsDatabase[roomId];

    const titleEl = document.getElementById('room-title');
    const descEl  = document.getElementById('room-description');
    const btnEl   = document.getElementById('select-btn');

    if (!room) {
        titleEl.textContent = 'Camera non trovata';
        descEl.textContent = 'Torna alla pagina Camere per scegliere una sistemazione.';
        btnEl.href = 'camere.html';
        btnEl.textContent = 'Torna alle Camere';
        return;
    }

    document.title = `${room.title} - Aura Suites`;
    document.getElementById('room-max-guests-badge').textContent = `Max ${room.maxGuests} Ospiti (Età 16+)`;
    updateAvailabilityBadge(document.getElementById('room-availability-badge'), room.available, room.maxStock);

    titleEl.textContent = room.title;
    descEl.textContent = room.description;
    document.getElementById('room-price').textContent = `€${room.price}`;
    btnEl.href = `prenotazione.html?room=${roomId}`;

    const imgs = [room.images.hero, room.images.interni, room.images.bagno];
    ['img-1', 'img-2', 'img-3'].forEach((id, i) => {
        const img = document.getElementById(id);
        if (img) img.src = imgs[i] || '';
    });

    const featuresContainer = document.getElementById('room-features');
    featuresContainer.innerHTML = '';
    room.features.forEach(feat => {
        const item = document.createElement('div');
        item.className = 'p-3 bg-[#FAFAFA] rounded-xl border border-[#E5E5E5] text-xs font-medium text-neutral-700 flex items-center gap-2';
        item.innerHTML = `<span class="text-emerald-600 font-bold" aria-hidden="true">✓</span> <span>${feat}</span>`;
        featuresContainer.appendChild(item);
    });
}

window.loadRoomDetails = loadRoomDetails;
window.updateAvailabilityBadge = updateAvailabilityBadge;