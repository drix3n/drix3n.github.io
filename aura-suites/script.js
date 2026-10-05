// script.js - Database Completo & Logica di Prenotazione Aura Suites

const roomsDatabase = {
    'classic-queen': {
        title: 'Classic Queen Room',
        maxGuests: 2,
        price: 140,
        maxStock: 12,
        available: 12,
        description: 'La Classic Queen Room è progettata per offrire un rifugio elegante e riservato. Arredata con materiali naturali, parquet in rovere chiaro e marmo di Carrara, dispone di un comodo letto Queen Size con materasso ortopedico ad alta densità.',
        features: ['2 Ospiti max', '28 m²', 'Bed Queen Size', 'Bagno in Marmo', 'Wi-Fi 1Gbps', 'Vista Giardino', 'Aria Condizionata Domotica'],
        images: [
            'img/Classic-Queen-Room.jpg',
            'img/Jacuzzi-Panoramica.jpg',
            'img/Aura-Suites-1.jpg'
        ]
    },
    'superior-twin': {
        title: 'Superior Twin Room',
        maxGuests: 2,
        price: 170,
        maxStock: 8,
        available: 8,
        description: 'Luminosa e versatile, la Superior Twin Room offre un balconcino privato attrezzato con poltrone da esterno per rilassarsi all’aria aperta. Configurabile con due letti singoli o matrimoniale.',
        features: ['2 Ospiti max', '32 m²', 'Letti Singoli/Double', 'Balcone Privato', 'Smart TV 55"', 'Set Cortesia Biologico'],
        images: [
            'img/Superior-Twin-Room.jpg',
            'img/argentato.jpg',
            'img/vasca.jpg'
        ]
    },
    'executive-sea': {
        title: 'Executive Sea View',
        maxGuests: 2,
        price: 210,
        maxStock: 5,
        available: 3,
        description: 'Posizionata ai piani alti, questa camera vanta ampie vetrate insonorizzate a tutta altezza con vista panoramica sul mare e macchina da caffè espresso con cialde artigianali.',
        features: ['2 Ospiti max', '38 m²', 'Vista Mare Frontale', 'Caffè Espresso Incluso', 'King Bed', 'Set Cortesia Luxury'],
        images: [
            'img/Aura-Suites-1.jpg',
            'img/Grand-Family-Residence.jpg',
            'img/lampada.jpg'
        ]
    },
    'deluxe-panorama': {
        title: 'Deluxe Panorama Suite',
        maxGuests: 2,
        price: 310,
        maxStock: 7,
        available: 4,
        description: 'Iconica suite caratterizzata da una vasca da bagno freestanding collocata vicino alle ampie vetrate vista mare. Offre un’ampia terrazza privata arredata con lettini prendisole.',
        features: ['2 Ospiti max', '55 m²', 'Vasca Freestanding', 'Terrazza Panoramica', 'King Size Bed', 'Lounge Area'],
        images: [
            'img/Deluxe-Panorama-Suite.jpg',
            'img/Sauna-e-Bagno-Turco.jpg',
            'img/cubo.jpg'
        ]
    },
    'comfort-quad': {
        title: 'Comfort Quad Room',
        maxGuests: 4,
        price: 220,
        maxStock: 10,
        available: 10,
        description: 'Progettata per ospitare fino a 4 ospiti adulti in totale comodità, dispone di due zone notte distinte con un letto King Size e due letti singoli, e bagno padronale con doppio lavabo.',
        features: ['4 Ospiti max', '48 m²', '1 King + 2 Singoli', 'Doppia TV', 'Spazioso Bagno', 'Frigobar Incluso'],
        images: [
            'img/Comfort-Quad-Room.jpg',
            'img/bianco.jpg',
            'img/salotto.jpg'
        ]
    },
    'grand-residence': {
        title: 'Grand Family Residence',
        maxGuests: 4,
        price: 320,
        maxStock: 15,
        available: 15,
        description: 'Un vero e proprio appartamento di lusso composto da due camere da letto matrimoniali indipendenti, due bagni privati ed un ampio salone centrale con terrazzo affacciato sul resort.',
        features: ['4 Ospiti max', '65 m²', '2 Camere da Letto', '2 Bagni Privati', 'Salotto Separato', 'Doppio Balcone'],
        images: [
            'img/Grand-Family-Residence.jpg',
            'img/albero.jpg',
            'img/piante.jpg'
        ]
    },
    'signature-terrace': {
        title: 'Signature Terrace Suite',
        maxGuests: 4,
        price: 450,
        maxStock: 6,
        available: 2,
        description: 'Attico panoramico per 4 ospiti con imponente terrazza a 360° dotata di Jacuzzi privata riscaldata ad uso esclusivo e servizio di maggiordomo dedicato.',
        features: ['4 Ospiti max', '80 m²', 'Jacuzzi in Terrazza', 'Servizio Maggiordomo', '2 Letti King Size', 'Vista Panoramica A 360°'],
        images: [
            'img/acquario.jpg',
            'img/Jacuzzi-Panoramica.jpg',
            'img/Aura-Suites-3.jpg'
        ]
    }
};

const detailsDatabase = {
    'palestra': {
        title: 'Palestra Equipaggiata Technogym',
        text: '<b>Orario di Apertura:</b> Dalle 07:00 alle 22:00 (tutti i giorni).<br><br>Macchinari cardio Technogym, manubri, kettlebell e area riservata per pilates e yoga.<br><br><b>All Inclusive:</b> Gratuito.<br><b>Altri trattamenti:</b> €25 al giorno.'
    },
    'massaggi': {
        title: 'Stanza Massaggi & Trattamenti Olistici',
        text: '<b>Orario di Apertura:</b> Dalle 09:00 alle 20:00 (su prenotazione in reception).<br><br>Massaggi svedesi, olistici, decontratturanti e trattamenti viso al collagene.<br><br><b>All Inclusive:</b> 1 massaggio/giorno da 50 min incluso.<br><b>Altri trattamenti:</b> €60 a sessione.'
    },
    'sauna': {
        title: 'Sauna Finlandese & Bagno Turco',
        text: '<b>Orario di Apertura:</b> Dalle 08:00 alle 21:00.<br><br>Percorso benessere in legno di pino nordico con aromaterapia agli oli essenziali e docce emozionali.<br><br><b>All Inclusive:</b> Gratuito.<br><b>Altri trattamenti:</b> €35 per slot riservato di 2 ore.'
    },
    'jacuzzi': {
        title: 'Jacuzzi Panoramica Riscaldata',
        text: '<b>Orario di Apertura:</b> Dalle 09:00 alle 22:00.<br><br>Vasca idromassaggio esterna riscaldata a 37°C situata nel solarium con vista tramonto.<br><br><b>All Inclusive:</b> Gratuito.<br><b>Altri trattamenti:</b> €30 al giorno.'
    },
    'buffet': {
        title: 'Buffet Gourmet "Aura" & 2 Merende',
        text: '<b>ORARI SERVIZIO:</b><br>• <b>Colazione:</b> 07:30 - 10:30<br>• <b>Pranzo:</b> 12:30 - 14:30<br>• <b>Cena:</b> 19:30 - 21:30<br>• <b>Merenda Mattutina:</b> Ore 11:00<br>• <b>Merenda Pomeridiana:</b> Ore 17:00<br><br><b>MENU DINAMICO:</b> Il menu <b>cambia ad ogni singolo pasto</b> per garantire piatti sempre freschi.<br><br><b>Trattamenti:</b> Incluso in Mezza Pensione (1 pasto), Pensione Completa e All Inclusive.'
    },
    'pizzeria': {
        title: 'Pizzeria Artisanal "L\'Aura"',
        text: '<b>ORARIO DI APERTURA:</b> APERTI SOLO A CENA dalle 19:30 alle 23:00.<br><br><b>MENU SELEZIONE:</b> Margherita DOP, Diavola Calabrese, Tartufata & Porcini, Vegetariana.<br><br><b>Trattamenti:</b> Gratuito solo per All Inclusive. Per altri trattamenti: €25 per ospite.'
    },
    'carne': {
        title: 'Steakhouse "Prime Grill"',
        text: '<b>ORARIO DI APERTURA:</b> APERTI SOLO A CENA dalle 19:30 alle 23:00.<br><br><b>MENU SELEZIONE:</b> Tagliata di Black Angus, Costata di Scottona alla brace, Hamburger Gourmet.<br><br><b>Trattamenti:</b> Gratuito solo per All Inclusive. Per altri trattamenti: €45 a persona.'
    },
    'pesce': {
        title: 'Ristorante Gourmet di Pesce "Oceano"',
        text: '<b>ORARIO DI APERTURA:</b> APERTI SOLO A CENA dalle 19:30 alle 23:00.<br><br><b>MENU SELEZIONE:</b> Grigliata mista del Mediterraneo, Filetto di Orata in crosta, Frittura di paranza.<br><br><b>ATTENZIONE:</b> Questo ristorante è ESCLUSO dall\'All Inclusive (€80 fisso a persona).'
    },
    'bar-marea': {
        title: 'Marea Cocktail Lounge Bar',
        text: '<b>ORARIO DI APERTURA:</b> Dalle 10:00 alle 01:00.<br><br><b>LISTINO DRINK:</b> Signature Cocktail Aura, Mojito, Aperol Spritz, Vini Bianchi e Rossi.<br><br><b>Trattamenti:</b> Gratuito ed illimitato per All Inclusive. A consumo per altri.'
    },
    'bar-tramonto': {
        title: 'Tramonto Sunset Pool Bar',
        text: '<b>ORARIO DI APERTURA:</b> Dalle 09:00 alle 19:00.<br><br><b>LISTINO:</b> Smoothies, Estratti detox, Birre artigianali, Granite.<br><br><b>Trattamenti:</b> Gratuito ed illimitato per All Inclusive. A consumo per altri.'
    },
    'discoteca': {
        title: 'Aura Club & Nightlife',
        text: '<b>ORARIO DI APERTURA:</b> Dalle 23:00 alle 04:00.<br><br>DJ set resident e guest internazionali in sala insonorizzata con impianto Bose Professional.<br><br><b>INGRESSO:</b> Gratuito per tutti gli ospiti residenti.'
    },
    'sunset-cruise': {
        title: 'Sunset Cruise & Aperitivo in Barca',
        text: '<b>ORARI ESCURSIONE:</b> Dalle 17:30 alle 20:30 (Durata: 3 ore).<br><br>Navigazione lungo la costa al tramonto, aperitivo e Champagne.<br><br><b>Prezzo:</b> €350 complessivi a barca (fino a 6 persone).'
    },
    'fullday-yacht': {
        title: 'Full-Day Private Yachting Tour',
        text: '<b>ORARI ESCURSIONE:</b> Dalle 10:00 alle 17:00 (Durata: 7 ore).<br><br>Tour tra le calette, pranzo a bordo e attrezzatura snorkeling.<br><br><b>Prezzo:</b> €750 complessivi a barca (fino a 8 persone).'
    }
};

let calculatedNights = 0;

function openModal(key) {
    const item = detailsDatabase[key];
    if (!item) return;

    document.getElementById('modal-title').innerHTML = item.title;
    document.getElementById('modal-content').innerHTML = item.text;
    document.getElementById('info-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('info-modal').classList.add('hidden');
}

function loadRoomDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const roomId = urlParams.get('id') || 'classic-queen';
    const room = roomsDatabase[roomId];

    if (!room) return;

    document.getElementById('room-title').textContent = room.title;
    document.getElementById('room-max-guests-badge').textContent = `Max ${room.maxGuests} Ospiti (Età 16+)`;
    
    const badge = document.getElementById('room-availability-badge');
    updateAvailabilityBadge(badge, room.available, room.maxStock);

    document.getElementById('room-description').textContent = room.description;
    document.getElementById('room-price').textContent = `€${room.price}`;
    document.getElementById('select-btn').href = `prenotazione.html?room=${roomId}`;

    document.getElementById('img-1').src = room.images[0];
    document.getElementById('img-2').src = room.images[1];
    document.getElementById('img-3').src = room.images[2];

    const featuresContainer = document.getElementById('room-features');
    featuresContainer.innerHTML = '';
    room.features.forEach(feat => {
        const item = document.createElement('div');
        item.className = 'p-2 bg-[#FAFAFA] rounded-lg border border-[#E5E5E5]';
        item.textContent = `✓ ${feat}`;
        featuresContainer.appendChild(item);
    });
}

function initBookingPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedRoomKey = urlParams.get('room');
    const roomSelect = document.getElementById('room-select');

    if (selectedRoomKey && roomsDatabase[selectedRoomKey]) {
        roomSelect.value = selectedRoomKey;
    } else {
        roomSelect.value = "";
    }

    onRoomChange();
}

function onRoomChange() {
    const roomSelect = document.getElementById('room-select');
    const guestsSelect = document.getElementById('guests-select');
    const badge = document.getElementById('availability-badge');
    const key = roomSelect.value;

    guestsSelect.innerHTML = '';

    if (!key || !roomsDatabase[key]) {
        badge.textContent = '';
        badge.className = 'hidden';
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
    badge.className = 'text-xs font-semibold px-2.5 py-1 rounded-full inline-block mt-2';
    updateAvailabilityBadge(badge, room.available, room.maxStock);

    for (let i = 1; i <= room.maxGuests; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${i} ${i === 1 ? 'Ospite Adulto' : 'Ospiti Adulti'}`;
        if (i === Math.min(2, room.maxGuests)) option.selected = true;
        guestsSelect.appendChild(option);
    }

    onGuestsChange();
}

function updateAvailabilityBadge(element, available, maxStock) {
    let yellowThreshold = (maxStock % 2 === 0) ? (maxStock / 2) + 1 : (maxStock / 2) + 0.5;

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

function onGuestsChange() {
    const guestsSelect = document.getElementById('guests-select');
    const count = parseInt(guestsSelect.value || 0, 10);
    renderGuestForms(count);
    updateSummary();
}

function renderGuestForms(guestCount) {
    const container = document.getElementById('guests-forms-container');
    if (!container) return;

    container.innerHTML = '';

    if (guestCount <= 0) {
        container.innerHTML = '<p class="text-xs text-[#666666] italic text-center py-4">Seleziona una camera ed il numero di ospiti per compilare i dati.</p>';
        return;
    }

    for (let i = 1; i <= guestCount; i++) {
        const card = document.createElement('div');
        card.className = 'border border-[#E5E5E5] rounded-2xl overflow-hidden bg-white shadow-sm transition hover:shadow-md';

        if (i === 1) {
            card.innerHTML = `
                <div class="bg-[#121212] text-white px-5 py-3 flex justify-between items-center">
                    <span class="font-bold text-sm tracking-wide">Ospite 1 (Referente Principale)</span>
                    <span class="text-[10px] uppercase font-bold tracking-widest bg-white/10 border border-white/20 text-white px-2.5 py-1 rounded-full">Contatto Principale</span>
                </div>

                <div class="p-5 space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5]">
                            <label class="block text-[10px] uppercase font-bold text-[#666666] mb-1">Nome *</label>
                            <input type="text" required placeholder="Mario" class="w-full p-2 bg-white border border-[#E5E5E5] rounded-lg text-xs font-medium focus:ring-1 focus:ring-[#121212] outline-none">
                        </div>
                        <div class="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5]">
                            <label class="block text-[10px] uppercase font-bold text-[#666666] mb-1">Cognome *</label>
                            <input type="text" required placeholder="Rossi" class="w-full p-2 bg-white border border-[#E5E5E5] rounded-lg text-xs font-medium focus:ring-1 focus:ring-[#121212] outline-none">
                        </div>
                        <div class="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5]">
                            <label class="block text-[10px] uppercase font-bold text-[#0055FF] mb-1">🎂 Data di Nascita *</label>
                            <input type="date" required id="dob-1" onchange="validateGuestAges()" class="w-full p-2 bg-white border border-[#E5E5E5] rounded-lg text-xs font-semibold text-[#121212] focus:ring-1 focus:ring-[#121212] outline-none cursor-pointer">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5]">
                            <label class="block text-[10px] uppercase font-bold text-[#666666] mb-1">Email *</label>
                            <input type="email" required placeholder="mario.rossi@email.com" class="w-full p-2 bg-white border border-[#E5E5E5] rounded-lg text-xs font-medium focus:ring-1 focus:ring-[#121212] outline-none">
                        </div>
                        <div class="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5]">
                            <label class="block text-[10px] uppercase font-bold text-[#666666] mb-1">Telefono *</label>
                            <input type="tel" required placeholder="+39 333 1234567" class="w-full p-2 bg-white border border-[#E5E5E5] rounded-lg text-xs font-medium focus:ring-1 focus:ring-[#121212] outline-none">
                        </div>
                    </div>

                    <div class="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5]">
                        <label class="block text-[10px] uppercase font-bold text-[#666666] mb-1">Richieste Speciali</label>
                        <textarea placeholder="Allergie, orario arrivo, escursioni..." class="w-full p-2 bg-white border border-[#E5E5E5] rounded-lg text-xs font-medium focus:ring-1 focus:ring-[#121212] outline-none" rows="2"></textarea>
                    </div>
                </div>
            `;
        } else {
            card.innerHTML = `
                <div class="bg-[#FAFAFA] border-b border-[#E5E5E5] px-5 py-2.5 flex justify-between items-center">
                    <span class="text-sm font-bold text-[#121212]">Ospite ${i}</span>
                    <span class="text-[10px] uppercase font-semibold text-[#666666]">Ospite Aggiuntivo</span>
                </div>

                <div class="p-5">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5]">
                            <label class="block text-[10px] uppercase font-bold text-[#666666] mb-1">Nome *</label>
                            <input type="text" required placeholder="Nome Ospite ${i}" class="w-full p-2 bg-white border border-[#E5E5E5] rounded-lg text-xs font-medium focus:ring-1 focus:ring-[#121212] outline-none">
                        </div>
                        <div class="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5]">
                            <label class="block text-[10px] uppercase font-bold text-[#666666] mb-1">Cognome *</label>
                            <input type="text" required placeholder="Cognome Ospite ${i}" class="w-full p-2 bg-white border border-[#E5E5E5] rounded-lg text-xs font-medium focus:ring-1 focus:ring-[#121212] outline-none">
                        </div>
                        <div class="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5]">
                            <label class="block text-[10px] uppercase font-bold text-[#0055FF] mb-1">🎂 Data di Nascita *</label>
                            <input type="date" required id="dob-${i}" onchange="validateGuestAges()" class="w-full p-2 bg-white border border-[#E5E5E5] rounded-lg text-xs font-semibold text-[#121212] focus:ring-1 focus:ring-[#121212] outline-none cursor-pointer">
                        </div>
                    </div>
                </div>
            `;
        }

        container.appendChild(card);
    }
}

function calculateNightsFromCalendar() {
    const checkinVal = document.getElementById('checkin-date').value;
    const checkoutVal = document.getElementById('checkout-date').value;
    const display = document.getElementById('nights-count-display');

    if (!checkinVal || !checkoutVal) {
        calculatedNights = 0;
        display.textContent = 'Seleziona entrambe le date nel calendario.';
        updateSummary();
        return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkin = new Date(checkinVal);
    const checkout = new Date(checkoutVal);

    if (checkin < today) {
        alert('Errore: Impossibile selezionare una data di Check-in già passata!');
        document.getElementById('checkin-date').value = '';
        calculatedNights = 0;
        display.textContent = 'Data Check-in non valida.';
        updateSummary();
        return;
    }

    const diffTime = checkout - checkin;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
        calculatedNights = 0;
        display.textContent = 'La data di Check-out deve essere successiva al Check-in.';
    } else {
        calculatedNights = diffDays;
        display.textContent = `Soggiorno selezionato: ${calculatedNights} ${calculatedNights === 1 ? 'notte' : 'notti'}.`;
    }

    validateGuestAges();
    updateSummary();
}

function validateGuestAges() {
    const checkinVal = document.getElementById('checkin-date').value;
    if (!checkinVal) return;

    const checkinDate = new Date(checkinVal);
    const guestsSelect = document.getElementById('guests-select');
    const guestCount = parseInt(guestsSelect.value || 0, 10);

    for (let i = 1; i <= guestCount; i++) {
        const dobInput = document.getElementById(`dob-${i}`);
        if (dobInput && dobInput.value) {
            const birthDate = new Date(dobInput.value);
            let age = checkinDate.getFullYear() - birthDate.getFullYear();
            const monthDiff = checkinDate.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && checkinDate.getDate() < birthDate.getDate())) {
                age--;
            }

            if (age < 16) {
                alert(`Errore Ospite ${i}: La struttura è riservata agli ospiti da 16 anni in su. L'ospite ha meno di 16 anni alla data del check-in!`);
                dobInput.value = '';
            }
        }
    }
}

function updateSummary() {
    const roomSelect = document.getElementById('room-select');
    const guestsSelect = document.getElementById('guests-select');
    const boardRadio = document.querySelector('input[name="board"]:checked');

    if (!roomSelect || !guestsSelect) return;

    const key = roomSelect.value;

    if (!key || !roomsDatabase[key] || calculatedNights <= 0) {
        document.getElementById('room-price').textContent = 'Seleziona camera e date';
        document.getElementById('board-price').textContent = '€0';
        document.getElementById('cleaning-price').textContent = '€0';
        document.getElementById('total-price').textContent = '€0';
        return;
    }

    const room = roomsDatabase[key];
    const guests = parseInt(guestsSelect.value || 1, 10);
    const boardRate = parseInt(boardRadio ? boardRadio.value : 0, 10);
    const cleaningFee = 80;

    const roomSubtotal = room.price * calculatedNights;
    const boardSubtotal = boardRate * guests * calculatedNights;
    const grandTotal = roomSubtotal + boardSubtotal + cleaningFee;

    document.getElementById('room-label').textContent = `${room.title} (${calculatedNights} notti)`;
    document.getElementById('room-price').textContent = `€${roomSubtotal}`;

    document.getElementById('board-label').textContent = `Trattamento (${guests} pers. x ${calculatedNights} notti)`;
    document.getElementById('board-price').textContent = `€${boardSubtotal}`;

    document.getElementById('cleaning-price').textContent = `€${cleaningFee}`;
    document.getElementById('total-price').textContent = `€${grandTotal}`;
}

function handleBooking(event) {
    event.preventDefault();
    if (calculatedNights <= 0) {
        alert('Seleziona date valide dal calendario prima di confermare!');
        return;
    }
    alert('Richiesta inviata con successo! Ti invieremo un e-mail di conferma con i dettagli per tutti gli ospiti.');
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    
    if (menu) {
        menu.classList.toggle('hidden');
        if (icon) {
            if (!menu.classList.contains('hidden')) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            }
        }
    }
}