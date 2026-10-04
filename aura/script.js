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
            'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
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
            'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80'
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
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80'
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
            'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
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
            'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80'
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
            'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'
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
            'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
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
        text: '<b>ORARI SERVIZIO:</b><br>• <b>Colazione:</b> 07:30 - 10:30<br>• <b>Pranzo:</b> 12:30 - 14:30<br>• <b>Cena:</b> 19:30 - 21:30<br>• <b>Merenda Mattutina:</b> Ore 11:00<br>• <b>Merenda Pomeridiana:</b> Ore 17:00<br><br><b>MENU DINAMICO:</b> Il menu <b>cambia ad ogni singolo pasto</b> per garantire piatti sempre freschi (primi espressi, carni arrosto, pesce del giorno, buffet di dolci).<br><br><b>Trattamenti:</b> Incluso in Mezza Pensione (1 pasto), Pensione Completa e All Inclusive.'
    },
    'pizzeria': {
        title: 'Pizzeria Artisanal "L\'Aura"',
        text: '<b>ORARIO DI APERTURA:</b> APERTI SOLO A CENA dalle 19:30 alle 23:00.<br><br><b>MENU SELEZIONE:</b><br>• Margherita DOP (Pomodoro San Marzano, mozzarella di bufala, basilico)<br>• Diavola Calabrese (Spianata piccante, fiordilatte, olive)<br>• Tartufata & Porcini (Base bianca, crema di tartufo, porcini, fior di latte)<br>• Vegetariana (Verdure grigliate di stagione, pomodorini)<br><br><b>Trattamenti:</b> Gratuito solo per All Inclusive. Per altri trattamenti: €25 per ospite.'
    },
    'carne': {
        title: 'Steakhouse "Prime Grill"',
        text: '<b>ORARIO DI APERTURA:</b> APERTI SOLO A CENA dalle 19:30 alle 23:00.<br><br><b>MENU SELEZIONE:</b><br>• Tagliata di Black Angus con rucola e scaglie di parmigiano<br>• Costata di Scottona alla brace (frollatura 40 giorni)<br>• Hamburger Gourmet con bacon croccante e salsa della casa<br>• Contorni: Patate al forno al rosmarino, verdure alla griglia<br><br><b>Trattamenti:</b> Gratuito solo per All Inclusive. Per altri trattamenti: €45 a persona.'
    },
    'pesce': {
        title: 'Ristorante Gourmet di Pesce "Oceano"',
        text: '<b>ORARIO DI APERTURA:</b> APERTI SOLO A CENA dalle 19:30 alle 23:00.<br><br><b>MENU SELEZIONE (PESCE COTTO):</b><br>• Grigliata mista del Mediterraneo (Spada, spigola, mazzancolle)<br>• Filetto di Orata in crosta di patate e limone<br>• Frittura di paranza e calamari con maionese al lime<br>• Tagliolini al ragù di cernia e datterini<br><br><b>ATTENZIONE:</b> Questo ristorante è ESCLUSO dall\'All Inclusive (€80 fisso a persona).'
    },
    'bar-marea': {
        title: 'Marea Cocktail Lounge Bar',
        text: '<b>ORARIO DI APERTURA:</b> Dalle 10:00 alle 01:00.<br><br><b>LISTINO DRINK:</b><br>• Signature Cocktail Aura (Gin, spritz all\'ibisco, soda)<br>• Mojito Cubano Tradizionale<br>• Aperol / Campari Spritz<br>• Selezione di Vini Bianchi, Rossi e Bollicine<br><br><b>Trattamenti:</b> Gratuito ed illimitato per All Inclusive. I clienti non All Inclusive pagano esclusivamente ciò che consumano al banco.'
    },
    'bar-tramonto': {
        title: 'Tramonto Sunset Pool Bar',
        text: '<b>ORARIO DI APERTURA:</b> Dalle 09:00 alle 19:00.<br><br><b>LISTINO FRULLATI & BEVANDE:</b><br>• Smoothies con frutta fresca di stagione<br>• Estratti detox e centrifugati<br>• Birre artigianali alla spina e bibite analcoliche<br>• Caffetteria fredda e granite artigianali<br><br><b>Trattamenti:</b> Gratuito ed illimitato per All Inclusive. I clienti non All Inclusive pagano esclusivamente ciò che consumano al banco.'
    },
    'discoteca': {
        title: 'Aura Club & Nightlife',
        text: '<b>ORARIO DI APERTURA:</b> Dalle 23:00 alle 04:00 (dal Giovedì alla Domenica).<br><br><b>NIGHTLIFE & EVENTI:</b><br>• DJ set resident e guest internazionali con musica Deep House, Tech House e Commerciale.<br>• Sala insonorizzata di ultima generazione con impianto audio Bose Professional.<br>• Zona Privè con servizio al tavolo e bottiglieria premium.<br><br><b>INGRESSO & CONSUMAZIONI:</b><br>• <b>Ingresso:</b> Gratuito per tutti gli ospiti residenti nel resort.<br>• <b>All Inclusive:</b> Consumazioni analcoliche e cocktail selezionati compresi.<br>• <b>Altri trattamenti:</b> Consumazioni al banco a consumo (da €12 per cocktail, €8 per birre e amari).'
    },
    'sunset-cruise': {
        title: 'Sunset Cruise & Aperitivo in Barca',
        text: '<b>ORARI ESCURSIONE:</b> Dalle 17:30 alle 20:30 (Durata: 3 ore).<br><br><b>ITINERARIO & SERVIZI:</b><br>• Navigazione lungo la costa al tramonto con soste bagno.<br>• Skipper privato e carburante incluso.<br>• Aperitivo a bordo con crudi di mare, frutta fresca e 1 bottiglia di Champagne.<br><br><b>Prezzo:</b> €350 complessivi a barca (fino a 6 persone).'
    },
    'fullday-yacht': {
        title: 'Full-Day Private Yachting Tour',
        text: '<b>ORARI ESCURSIONE:</b> Dalle 10:00 alle 17:00 (Durata: 7 ore).<br><br><b>ITINERARIO & SERVIZI:</b><br>• Tour esclusivo tra le calette più incontaminate e riserve naturali.<br>• Pranzo a bordo preparato dallo chef a base di prodotti locali.<br>• Attrezzatura snorkeling e paddle board inclusi.<br><br><b>Prezzo:</b> €750 complessivi a barca (fino a 8 persone).'
    }
};

let calculatedNights = 0;

// Gestione Finestre Modali
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

// Caricamento Dettagli Pagina Singola Camera
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
        item.className = 'p-2 bg-cream rounded-lg border border-neutral-200';
        item.textContent = `✓ ${feat}`;
        featuresContainer.appendChild(item);
    });
}

// Inizializzazione Pagina Prenotazione
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

// Calcolo Colori Disponibilità (Verde -> Giallo [Metà + 1 o +0.5] -> Rosso [<= 2])
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

// Generatore Dati Ospiti con Design Tabellare Pulito
function renderGuestForms(guestCount) {
    const container = document.getElementById('guests-forms-container');
    if (!container) return;

    container.innerHTML = '';

    if (guestCount <= 0) {
        container.innerHTML = '<p class="text-xs text-neutral-400 italic text-center py-4">Seleziona una camera ed il numero di ospiti per compilare i dati.</p>';
        return;
    }

    for (let i = 1; i <= guestCount; i++) {
        const card = document.createElement('div');
        card.className = 'border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-sm transition hover:shadow-md';

        if (i === 1) {
            // Ospite 1: Referente Principale
            card.innerHTML = `
                <div class="bg-stone-dark text-white px-5 py-3 flex justify-between items-center">
                    <span class="font-serif-title text-base font-medium tracking-wide">Ospite 1 (Referente Principale)</span>
                    <span class="text-[10px] uppercase font-bold tracking-widest bg-white/10 border border-white/20 text-white px-2.5 py-1 rounded-full">Contatto Principale</span>
                </div>

                <div class="p-5 space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="bg-cream/30 p-3 rounded-xl border border-neutral-200">
                            <label class="block text-[10px] uppercase font-bold text-neutral-500 mb-1">Nome *</label>
                            <input type="text" required placeholder="Mario" class="w-full p-2 bg-white border border-neutral-200 rounded-lg text-xs font-medium focus:ring-1 focus:ring-neutral-900 outline-none">
                        </div>
                        <div class="bg-cream/30 p-3 rounded-xl border border-neutral-200">
                            <label class="block text-[10px] uppercase font-bold text-neutral-500 mb-1">Cognome *</label>
                            <input type="text" required placeholder="Rossi" class="w-full p-2 bg-white border border-neutral-200 rounded-lg text-xs font-medium focus:ring-1 focus:ring-neutral-900 outline-none">
                        </div>
                        <div class="bg-cream/30 p-3 rounded-xl border border-neutral-200">
                            <label class="block text-[10px] uppercase font-bold text-amber-800 mb-1">🎂 Data di Nascita *</label>
                            <input type="date" required id="dob-1" onchange="validateGuestAges()" class="w-full p-2 bg-white border border-neutral-200 rounded-lg text-xs font-semibold text-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none cursor-pointer">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-cream/30 p-3 rounded-xl border border-neutral-200">
                            <label class="block text-[10px] uppercase font-bold text-neutral-500 mb-1">Email *</label>
                            <input type="email" required placeholder="mario.rossi@email.com" class="w-full p-2 bg-white border border-neutral-200 rounded-lg text-xs font-medium focus:ring-1 focus:ring-neutral-900 outline-none">
                        </div>
                        <div class="bg-cream/30 p-3 rounded-xl border border-neutral-200">
                            <label class="block text-[10px] uppercase font-bold text-neutral-500 mb-1">Telefono *</label>
                            <input type="tel" required placeholder="+39 333 1234567" class="w-full p-2 bg-white border border-neutral-200 rounded-lg text-xs font-medium focus:ring-1 focus:ring-neutral-900 outline-none">
                        </div>
                    </div>

                    <div class="bg-cream/30 p-3 rounded-xl border border-neutral-200">
                        <label class="block text-[10px] uppercase font-bold text-neutral-500 mb-1">Richieste Speciali</label>
                        <textarea placeholder="Allergie, orario arrivo, escursioni..." class="w-full p-2 bg-white border border-neutral-200 rounded-lg text-xs font-medium focus:ring-1 focus:ring-neutral-900 outline-none" rows="2"></textarea>
                    </div>
                </div>
            `;
        } else {
            // Ospiti Aggiuntivi (2, 3, 4)
            card.innerHTML = `
                <div class="bg-neutral-100 border-b border-neutral-200 px-5 py-2.5 flex justify-between items-center">
                    <span class="font-serif-title text-sm font-medium text-neutral-800">Ospite ${i}</span>
                    <span class="text-[10px] uppercase font-semibold text-neutral-500">Ospite Aggiuntivo</span>
                </div>

                <div class="p-5">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="bg-cream/30 p-3 rounded-xl border border-neutral-200">
                            <label class="block text-[10px] uppercase font-bold text-neutral-500 mb-1">Nome *</label>
                            <input type="text" required placeholder="Nome Ospite ${i}" class="w-full p-2 bg-white border border-neutral-200 rounded-lg text-xs font-medium focus:ring-1 focus:ring-neutral-900 outline-none">
                        </div>
                        <div class="bg-cream/30 p-3 rounded-xl border border-neutral-200">
                            <label class="block text-[10px] uppercase font-bold text-neutral-500 mb-1">Cognome *</label>
                            <input type="text" required placeholder="Cognome Ospite ${i}" class="w-full p-2 bg-white border border-neutral-200 rounded-lg text-xs font-medium focus:ring-1 focus:ring-neutral-900 outline-none">
                        </div>
                        <div class="bg-cream/30 p-3 rounded-xl border border-neutral-200">
                            <label class="block text-[10px] uppercase font-bold text-amber-800 mb-1">🎂 Data di Nascita *</label>
                            <input type="date" required id="dob-${i}" onchange="validateGuestAges()" class="w-full p-2 bg-white border border-neutral-200 rounded-lg text-xs font-semibold text-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none cursor-pointer">
                        </div>
                    </div>
                </div>
            `;
        }

        container.appendChild(card);
    }
}

// Controllo Date Passate
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

// Validazione Età Ospiti (< 16 Anni da Errore)
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

// Calcolo Preventivo Finale
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

// Funzione Apertura/Chiusura Menu Hamburger Mobile
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}