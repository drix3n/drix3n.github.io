// js/booking.js - Logica prenotazione + navigazione Invio

import { roomsDatabase } from './data.js';
import { calcolaEta, showToast } from './utils.js';
import { updateAvailabilityBadge } from './rooms.js';

let calculatedNights = 0;

/* ============================ INIT ============================ */

export function initBookingPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedRoomKey = urlParams.get('room');
    const roomSelect = document.getElementById('room-select');
    if (!roomSelect) return;

    if (selectedRoomKey && roomsDatabase[selectedRoomKey]) {
        roomSelect.value = selectedRoomKey;
    } else if (selectedRoomKey) {
        showToast('Camera non trovata, selezionane una dalla lista.', 'error');
        roomSelect.value = '';
    } else {
        roomSelect.value = '';
    }

    const today = new Date().toISOString().split('T')[0];
    const ci = document.getElementById('checkin-date');
    const co = document.getElementById('checkout-date');
    if (ci) ci.min = today;
    if (co) co.min = today;

    onRoomChange();
    attachEnterNavigation();
}

/* ============================ CAMBIO CAMERA ============================ */

export function onRoomChange() {
    const roomSelect = document.getElementById('room-select');
    const guestsSelect = document.getElementById('guests-select');
    const badge = document.getElementById('availability-badge');
    if (!roomSelect || !guestsSelect) return;

    const key = roomSelect.value;
    guestsSelect.innerHTML = '';

    if (!key || !roomsDatabase[key]) {
        badge?.classList.add('hidden');
        const opt = document.createElement('option');
        opt.textContent = '-- Seleziona prima la camera --';
        opt.disabled = true;
        opt.selected = true;
        guestsSelect.appendChild(opt);
        renderGuestForms(0);
        updateSummary();
        return;
    }

    const room = roomsDatabase[key];
    updateAvailabilityBadge(badge, room.available, room.maxStock);

    if (room.available <= 0) {
        const opt = document.createElement('option');
        opt.textContent = 'Camera esaurita';
        opt.disabled = true;
        guestsSelect.appendChild(opt);
        renderGuestForms(0);
        updateSummary();
        return;
    }

    for (let i = 1; i <= room.maxGuests; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${i} ${i === 1 ? 'Ospite Adulto' : 'Ospiti Adulti'}`;
        if (i === Math.min(2, room.maxGuests)) option.selected = true;
        guestsSelect.appendChild(option);
    }

    onGuestsChange();
}

export function onGuestsChange() {
    const guestsSelect = document.getElementById('guests-select');
    const count = parseInt(guestsSelect?.value || 0, 10);
    renderGuestForms(count);
    updateSummary();
}

/* ============================ FORM OSPITI ============================ */

export function renderGuestForms(guestCount) {
    const container = document.getElementById('guests-forms-container');
    if (!container) return;

    container.innerHTML = '';

    if (guestCount <= 0) {
        container.innerHTML = '<p class="text-xs text-neutral-500 italic text-center py-6">Seleziona una camera ed il numero di ospiti per compilare i dati.</p>';
        attachEnterNavigation();
        return;
    }

    for (let i = 1; i <= guestCount; i++) {
        const isMain = i === 1;
        const card = document.createElement('div');
        card.className = 'border border-[#E5E5E5] rounded-2xl overflow-hidden bg-white shadow-sm transition hover:shadow-md';

        const headerClass = isMain
            ? 'bg-[#121212] text-white px-5 py-3 flex justify-between items-center'
            : 'bg-[#FAFAFA] border-b border-[#E5E5E5] px-5 py-3 flex justify-between items-center';
        const headerTitle = isMain ? 'Ospite 1 — Referente Principale' : `Ospite ${i}`;
        const headerBadge = isMain
            ? '<span class="text-[10px] uppercase font-bold tracking-widest bg-white/10 border border-white/20 text-white px-2.5 py-1 rounded-full">Contatto Principale</span>'
            : '<span class="text-[10px] uppercase font-semibold text-[#666666]">Ospite Aggiuntivo</span>';

        card.innerHTML = `
            <div class="${headerClass}">
                <span class="font-bold text-sm tracking-wide ${isMain ? '' : 'text-[#121212]'}">${headerTitle}</span>
                ${headerBadge}
            </div>

            <div class="p-5 space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5] focus-within:border-[#121212] focus-within:bg-white transition">
                        <label for="nome-${i}" class="block text-[10px] uppercase font-bold text-[#666666] mb-1">Nome *</label>
                        <input type="text" required id="nome-${i}" data-guest="${i}" data-field="nome"
                               placeholder="Mario" autocomplete="given-name"
                               class="w-full p-2 bg-white border border-[#E5E5E5] rounded-lg text-xs font-medium outline-none focus:ring-1 focus:ring-[#121212]">
                    </div>
                    <div class="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5] focus-within:border-[#121212] focus-within:bg-white transition">
                        <label for="cognome-${i}" class="block text-[10px] uppercase font-bold text-[#666666] mb-1">Cognome *</label>
                        <input type="text" required id="cognome-${i}" data-guest="${i}" data-field="cognome"
                               placeholder="Rossi" autocomplete="family-name"
                               class="w-full p-2 bg-white border border-[#E5E5E5] rounded-lg text-xs font-medium outline-none focus:ring-1 focus:ring-[#121212]">
                    </div>
                    <div class="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5] focus-within:border-[#121212] focus-within:bg-white transition">
                        <label for="dob-${i}" class="block text-[10px] uppercase font-bold text-[#0055FF] mb-1">🎂 Data di Nascita *</label>
                        <input type="date" required id="dob-${i}" data-guest="${i}" data-field="dob"
                               class="w-full p-2 bg-white border border-[#E5E5E5] rounded-lg text-xs font-semibold text-[#121212] outline-none focus:ring-1 focus:ring-[#121212] cursor-pointer">
                    </div>
                </div>

                ${isMain ? `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5] focus-within:border-[#121212] focus-within:bg-white transition">
                        <label for="email-${i}" class="block text-[10px] uppercase font-bold text-[#666666] mb-1">Email *</label>
                        <input type="email" required id="email-${i}" data-guest="${i}" data-field="email"
                               placeholder="mario.rossi@email.com" autocomplete="email"
                               class="w-full p-2 bg-white border border-[#E5E5E5] rounded-lg text-xs font-medium outline-none focus:ring-1 focus:ring-[#121212]">
                    </div>
                    <div class="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5] focus-within:border-[#121212] focus-within:bg-white transition">
                        <label for="tel-${i}" class="block text-[10px] uppercase font-bold text-[#666666] mb-1">Telefono *</label>
                        <input type="tel" required id="tel-${i}" data-guest="${i}" data-field="telefono"
                               placeholder="+39 333 1234567" autocomplete="tel"
                               class="w-full p-2 bg-white border border-[#E5E5E5] rounded-lg text-xs font-medium outline-none focus:ring-1 focus:ring-[#121212]">
                    </div>
                </div>

                <div class="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5] focus-within:border-[#121212] focus-within:bg-white transition">
                    <label for="richieste-${i}" class="block text-[10px] uppercase font-bold text-[#666666] mb-1">Richieste Speciali</label>
                    <textarea id="richieste-${i}" data-guest="${i}" data-field="richieste"
                              placeholder="Allergie, orario arrivo, escursioni..." rows="2"
                              class="w-full p-2 bg-white border border-[#E5E5E5] rounded-lg text-xs font-medium outline-none focus:ring-1 focus:ring-[#121212] resize-none"></textarea>
                </div>
                ` : ''}
            </div>
        `;

        container.appendChild(card);
    }

    attachEnterNavigation();
}

/* ============================ NAVIGAZIONE INVIO ============================ */

function getBookingFields() {
    const fields = [];
    const push = (el) => {
        if (el && el.offsetParent !== null && !el.disabled) fields.push(el);
    };

    push(document.getElementById('room-select'));
    push(document.getElementById('guests-select'));
    push(document.getElementById('checkin-date'));
    push(document.getElementById('checkout-date'));

    const boardRadios = document.querySelectorAll('input[name="board"]');
    if (boardRadios.length) push(boardRadios[0]);

    const form = document.getElementById('booking-form');
    if (form) {
        form.querySelectorAll('input:not([type="checkbox"]), select, textarea').forEach(el => {
            if (el.offsetParent !== null) fields.push(el);
        });
        const checkbox = form.querySelector('input[type="checkbox"]');
        if (checkbox) push(checkbox);
    }
    return fields;
}

export function attachEnterNavigation() {
    const form = document.getElementById('booking-form');
    if (!form) return;

    const bind = (field) => {
        if (!field || field.dataset.enterBound === '1') return;
        field.dataset.enterBound = '1';

        field.addEventListener('keydown', (e) => {
            if (e.key !== 'Enter') return;
            if (field.tagName === 'TEXTAREA' && e.shiftKey) return;

            e.preventDefault();

            if (typeof field.checkValidity === 'function' && !field.checkValidity()) {
                if (typeof field.reportValidity === 'function') field.reportValidity();
                field.focus();
                return;
            }

            if (field.id === 'checkin-date' || field.id === 'checkout-date') {
                calculateNightsFromCalendar();
            }

            const fields = getBookingFields();
            const index = fields.indexOf(field);

            let next = null;
            for (let j = index + 1; j < fields.length; j++) {
                if (fields[j] && fields[j].offsetParent !== null) { next = fields[j]; break; }
            }

            if (next) {
                next.focus();
                if (next.select && next.tagName !== 'SELECT' && next.type !== 'date') {
                    try { next.select(); } catch (_) {}
                }
            } else {
                form.requestSubmit();
            }
        });
    };

    getBookingFields().forEach(bind);
}

/* ============================ CALENDARIO ============================ */

export function calculateNightsFromCalendar() {
    const checkinEl = document.getElementById('checkin-date');
    const checkoutEl = document.getElementById('checkout-date');
    const display = document.getElementById('nights-count-display');
    if (!checkinEl || !checkoutEl || !display) return;

    const checkinVal = checkinEl.value;
    const checkoutVal = checkoutEl.value;

    if (!checkinVal || !checkoutVal) {
        calculatedNights = 0;
        display.textContent = 'Seleziona entrambe le date.';
        updateSummary();
        attachEnterNavigation();
        return;
    }

    const today = new Date(); today.setHours(0, 0, 0, 0);
    const checkin = new Date(checkinVal);
    const checkout = new Date(checkoutVal);

    if (checkin < today) {
        showToast('La data di check-in non può essere nel passato.', 'error');
        checkinEl.value = '';
        calculatedNights = 0;
        display.textContent = 'Data check-in non valida.';
        updateSummary(); attachEnterNavigation(); return;
    }

    if (checkout < today) {
        showToast('La data di check-out non può essere nel passato.', 'error');
        checkoutEl.value = '';
        calculatedNights = 0;
        display.textContent = 'Data check-out non valida.';
        updateSummary(); attachEnterNavigation(); return;
    }

    const diffDays = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
        calculatedNights = 0;
        display.textContent = 'Il check-out deve essere successivo al check-in.';
    } else {
        calculatedNights = diffDays;
        display.textContent = `${calculatedNights} ${calculatedNights === 1 ? 'notte' : 'notti'} selezionate.`;
    }

    validateGuestAges();
    updateSummary();
    attachEnterNavigation();
}

export function validateGuestAges() {
    const checkinVal = document.getElementById('checkin-date')?.value;
    if (!checkinVal) return true;
    const checkinDate = new Date(checkinVal);
    const guestCount = parseInt(document.getElementById('guests-select')?.value || 0, 10);

    for (let i = 1; i <= guestCount; i++) {
        const dobInput = document.getElementById(`dob-${i}`);
        if (dobInput && dobInput.value) {
            const age = calcolaEta(new Date(dobInput.value), checkinDate);
            if (age < 16) {
                showToast(`Ospite ${i}: meno di 16 anni alla data del check-in.`, 'error');
                dobInput.value = '';
                return false;
            }
        }
    }
    return true;
}

/* ============================ RIEPILOGO ============================ */

export function updateSummary() {
    const roomSelect = document.getElementById('room-select');
    const guestsSelect = document.getElementById('guests-select');
    const boardRadio = document.querySelector('input[name="board"]:checked');
    if (!roomSelect || !guestsSelect) return;

    const key = roomSelect.value;
    const roomLabel = document.getElementById('room-label');
    const roomPrice = document.getElementById('room-price');
    const boardLabel = document.getElementById('board-label');
    const boardPrice = document.getElementById('board-price');
    const cleanPrice = document.getElementById('cleaning-price');
    const totalPrice = document.getElementById('total-price');

    if (!key || !roomsDatabase[key]) {
        if (roomLabel) roomLabel.textContent = 'Camera';
        if (roomPrice) roomPrice.textContent = '—';
        if (boardLabel) boardLabel.textContent = 'Trattamento';
        if (boardPrice) boardPrice.textContent = '€0';
        if (cleanPrice) cleanPrice.textContent = '€0';
        if (totalPrice) totalPrice.textContent = '€0';
        return;
    }

    const room = roomsDatabase[key];

    if (calculatedNights <= 0) {
        roomLabel.textContent = room.title;
        roomPrice.textContent = 'Seleziona le date';
        boardLabel.textContent = 'Trattamento'; boardPrice.textContent = '€0';
        cleanPrice.textContent = '€0'; totalPrice.textContent = '€0';
        return;
    }

    const guests = parseInt(guestsSelect.value || 1, 10);
    const boardRate = parseInt(boardRadio ? boardRadio.value : 0, 10);
    const cleaningFee = 80;

    const roomSubtotal = room.price * calculatedNights;
    const boardSubtotal = boardRate * guests * calculatedNights;
    const grandTotal = roomSubtotal + boardSubtotal + cleaningFee;

    roomLabel.textContent = `${room.title} (${calculatedNights} ${calculatedNights === 1 ? 'notte' : 'notti'})`;
    roomPrice.textContent = `€${roomSubtotal}`;
    boardLabel.textContent = `Trattamento (${guests} pers. × ${calculatedNights} ${calculatedNights === 1 ? 'notte' : 'notti'})`;
    boardPrice.textContent = `€${boardSubtotal}`;
    cleanPrice.textContent = `€${cleaningFee}`;
    totalPrice.textContent = `€${grandTotal}`;
}

/* ============================ SUBMIT (Formspree) ============================ */

export async function handleBooking(event) {
    event.preventDefault();

    if (calculatedNights <= 0) {
        showToast('Seleziona date valide dal calendario prima di confermare.', 'error');
        return;
    }

    const checkinVal = document.getElementById('checkin-date').value;
    if (!checkinVal) { showToast('Inserisci la data di check-in.', 'error'); return; }

    const checkinDate = new Date(checkinVal);
    const guestCount = parseInt(document.getElementById('guests-select').value || 0, 10);

    for (let i = 1; i <= guestCount; i++) {
        const dobInput = document.getElementById(`dob-${i}`);
        if (!dobInput || !dobInput.value) {
            showToast(`Inserisci la data di nascita per l'ospite ${i}.`, 'error');
            return;
        }
        const age = calcolaEta(new Date(dobInput.value), checkinDate);
        if (age < 16) {
            showToast(`Ospite ${i}: età inferiore a 16 anni alla data del check-in.`, 'error');
            return;
        }
    }

    const form = document.getElementById('booking-form');
    const submitBtn = document.querySelector('button[type="button"][onclick*="requestSubmit"]')
                   || form.querySelector('button[type="submit"]');
    const originalText = submitBtn?.textContent;
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Invio in corso...'; }

    try {
        const formData = new FormData(form);
        formData.append('_subject', 'Nuova prenotazione Aura Suites');
        formData.append('nights', calculatedNights);
        formData.append('room', document.getElementById('room-select').value);

        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            showToast('Richiesta inviata! Riceverai una email di conferma.', 'success');
            form.reset();
        } else {
            throw new Error('Errore server');
        }
    } catch (err) {
        console.error(err);
        showToast('Errore di invio. Riprova o contattaci telefonicamente.', 'error');
    } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalText; }
    }
}

/* ============================ EXPORT GLOBALE (per onclick inline) ============================ */

window.onRoomChange = onRoomChange;
window.onGuestsChange = onGuestsChange;
window.calculateNightsFromCalendar = calculateNightsFromCalendar;
window.updateSummary = updateSummary;
window.handleBooking = handleBooking;
window.initBookingPage = initBookingPage;
window.renderGuestForms = renderGuestForms;
window.attachEnterNavigation = attachEnterNavigation;