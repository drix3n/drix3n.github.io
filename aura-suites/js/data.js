<<<<<<< HEAD
// js/data.js - Database camere e dettagli

export const roomsDatabase = {
    'classic-queen': {
        title: 'Classic Queen Room', maxGuests: 2, price: 140, maxStock: 12, available: 12,
        description: 'La Classic Queen Room è progettata per offrire un rifugio elegante e riservato. Arredata con materiali naturali, parquet in rovere chiaro e marmo di Carrara, dispone di un comodo letto Queen Size con materasso ortopedico ad alta densità.',
        features: ['2 Ospiti max', '28 m²', 'Bed Queen Size', 'Bagno in Marmo', 'Wi-Fi 1Gbps', 'Vista Giardino', 'Aria Condizionata Domotica'],
        images: {
            hero:    'img/Classic-Queen-Room.jpg',
            interni: 'img/Jacuzzi-Panoramica.jpg',
            bagno:   'img/Aura-Suites-1.jpg'
        }
    },
    'superior-twin': {
        title: 'Superior Twin Room', maxGuests: 2, price: 170, maxStock: 8, available: 8,
        description: 'Luminosa e versatile, la Superior Twin Room offre un balconcino privato attrezzato con poltrone da esterno per rilassarsi all’aria aperta. Configurabile con due letti singoli o matrimoniale.',
        features: ['2 Ospiti max', '32 m²', 'Letti Singoli/Double', 'Balcone Privato', 'Smart TV 55"', 'Set Cortesia Biologico'],
        images: {
            hero:    'img/Superior-Twin-Room.jpg',
            interni: 'img/argentato.jpg',
            bagno:   'img/vasca.jpg'
        }
    },
    'executive-sea': {
        title: 'Executive Sea View', maxGuests: 2, price: 210, maxStock: 5, available: 3,
        description: 'Posizionata ai piani alti, questa camera vanta ampie vetrate insonorizzate a tutta altezza con vista panoramica sul mare e macchina da caffè espresso con cialde artigianali.',
        features: ['2 Ospiti max', '38 m²', 'Vista Mare Frontale', 'Caffè Espresso Incluso', 'King Bed', 'Set Cortesia Luxury'],
        images: {
            hero:    'img/Aura-Suites-1.jpg',
            interni: 'img/Grand-Family-Residence.jpg',
            bagno:   'img/lampada.jpg'
        }
    },
    'deluxe-panorama': {
        title: 'Deluxe Panorama Suite', maxGuests: 2, price: 310, maxStock: 7, available: 4,
        description: 'Iconica suite caratterizzata da una vasca da bagno freestanding collocata vicino alle ampie vetrate vista mare. Offre un’ampia terrazza privata arredata con lettini prendisole.',
        features: ['2 Ospiti max', '55 m²', 'Vasca Freestanding', 'Terrazza Panoramica', 'King Size Bed', 'Lounge Area'],
        images: {
            hero:    'img/Deluxe-Panorama-Suite.jpg',
            interni: 'img/Sauna-e-Bagno-Turco.jpg',
            bagno:   'img/cubo.jpg'
        }
    },
    'comfort-quad': {
        title: 'Comfort Quad Room', maxGuests: 4, price: 220, maxStock: 10, available: 10,
        description: 'Progettata per ospitare fino a 4 ospiti adulti in totale comodità, dispone di due zone notte distinte con un letto King Size e due letti singoli, e bagno padronale con doppio lavabo.',
        features: ['4 Ospiti max', '48 m²', '1 King + 2 Singoli', 'Doppia TV', 'Spazioso Bagno', 'Frigobar Incluso'],
        images: {
            hero:    'img/Comfort-Quad-Room.jpg',
            interni: 'img/bianco.jpg',
            bagno:   'img/salotto.jpg'
        }
    },
    'grand-residence': {
        title: 'Grand Family Residence', maxGuests: 4, price: 320, maxStock: 15, available: 15,
        description: 'Un vero e proprio appartamento di lusso composto da due camere da letto matrimoniali indipendenti, due bagni privati ed un ampio salone centrale con terrazzo affacciato sul resort.',
        features: ['4 Ospiti max', '65 m²', '2 Camere da Letto', '2 Bagni Privati', 'Salotto Separato', 'Doppio Balcone'],
        images: {
            hero:    'img/Grand-Family-Residence.jpg',
            interni: 'img/albero.jpg',
            bagno:   'img/piante.jpg'
        }
    },
    'signature-terrace': {
        title: 'Signature Terrace Suite', maxGuests: 4, price: 450, maxStock: 6, available: 2,
        description: 'Attico panoramico per 4 ospiti con imponente terrazza a 360° dotata di Jacuzzi privata riscaldata ad uso esclusivo e servizio di maggiordomo dedicato.',
        features: ['4 Ospiti max', '80 m²', 'Jacuzzi in Terrazza', 'Servizio Maggiordomo', '2 Letti King Size', 'Vista Panoramica A 360°'],
        images: {
            hero:    'img/acquario.jpg',
            interni: 'img/Jacuzzi-Panoramica.jpg',
            bagno:   'img/Aura-Suites-3.jpg'
        }
    }
};

export const detailsDatabase = {
    'palestra': { title: 'Palestra Equipaggiata Technogym', text: '<b>Orario di Apertura:</b> 07:00 – 22:00 (tutti i giorni).<br><br>Macchinari cardio Technogym, manubri, kettlebell e area riservata per pilates e yoga.<br><br><b>All Inclusive:</b> Gratuito.<br><b>Altri trattamenti:</b> €25 al giorno.' },
    'massaggi': { title: 'Stanza Massaggi & Trattamenti Olistici', text: '<b>Orario:</b> 09:00 – 20:00 (su prenotazione).<br><br>Massaggi svedesi, olistici, decontratturanti e trattamenti viso al collagene.<br><br><b>All Inclusive:</b> 1 massaggio/giorno da 50 min incluso.<br><b>Altri:</b> €60 a sessione.' },
    'sauna': { title: 'Sauna Finlandese & Bagno Turco', text: '<b>Orario:</b> 08:00 – 21:00.<br><br>Percorso benessere in legno di pino nordico con aromaterapia e docce emozionali.<br><br><b>All Inclusive:</b> Gratuito.<br><b>Altri:</b> €35 per slot di 2 ore.' },
    'jacuzzi': { title: 'Jacuzzi Panoramica Riscaldata', text: '<b>Orario:</b> 09:00 – 22:00.<br><br>Vasca idromassaggio esterna riscaldata a 37°C nel solarium con vista tramonto.<br><br><b>All Inclusive:</b> Gratuito.<br><b>Altri:</b> €30 al giorno.' },
    'buffet': { title: 'Buffet Gourmet "Aura" & 2 Merende', text: '<b>ORARI:</b><br>• Colazione: 07:30 – 10:30<br>• Pranzo: 12:30 – 14:30<br>• Cena: 19:30 – 21:30<br>• Merenda mattutina: 11:00<br>• Merenda pomeridiana: 17:00<br><br><b>MENU DINAMICO:</b> cambia ad ogni pasto.<br><br><b>Trattamenti:</b> incluso in Mezza Pensione, Pensione Completa e All Inclusive.' },
    'pizzeria': { title: 'Pizzeria Artisanal "L\'Aura"', text: '<b>ORARIO:</b> solo a cena, 19:30 – 23:00.<br><br><b>MENU:</b> Margherita DOP, Diavola Calabrese, Tartufata & Porcini, Vegetariana.<br><br><b>Trattamenti:</b> gratuito solo con All Inclusive. Altri: €25 per ospite.' },
    'carne': { title: 'Steakhouse "Prime Grill"', text: '<b>ORARIO:</b> solo a cena, 19:30 – 23:00.<br><br><b>MENU:</b> Tagliata di Black Angus, Costata di Scottona, Hamburger Gourmet.<br><br><b>Trattamenti:</b> gratuito solo con All Inclusive. Altri: €45 a persona.' },
    'pesce': { title: 'Ristorante Gourmet di Pesce "Oceano"', text: '<b>ORARIO:</b> solo a cena, 19:30 – 23:00.<br><br><b>MENU:</b> Grigliata mista del Mediterraneo, Filetto di Orata in crosta, Frittura di paranza.<br><br><b>ATTENZIONE:</b> escluso dall\'All Inclusive (€80 fisso a persona).' },
    'bar-marea': { title: 'Marea Cocktail Lounge Bar', text: '<b>ORARIO:</b> 10:00 – 01:00.<br><br><b>LISTINO:</b> Signature Cocktail Aura, Mojito, Aperol Spritz, vini bianchi e rossi.<br><br><b>Trattamenti:</b> gratuito e illimitato con All Inclusive. A consumo per gli altri.' },
    'bar-tramonto': { title: 'Tramonto Sunset Pool Bar', text: '<b>ORARIO:</b> 09:00 – 19:00.<br><br><b>LISTINO:</b> Smoothies, estratti detox, birre artigianali, granite.<br><br><b>Trattamenti:</b> gratuito e illimitato con All Inclusive. A consumo per gli altri.' },
    'discoteca': { title: 'Aura Club & Nightlife', text: '<b>ORARIO:</b> 23:00 – 04:00.<br><br>DJ set resident e guest internazionali in sala insonorizzata con impianto Bose Professional.<br><br><b>INGRESSO:</b> gratuito per tutti gli ospiti residenti.' },
    'sunset-cruise': { title: 'Sunset Cruise & Aperitivo in Barca', text: '<b>ORARIO:</b> 17:30 – 20:30 (3 ore).<br><br>Navigazione lungo la costa al tramonto, aperitivo e Champagne.<br><br><b>Prezzo:</b> €350 complessivi a barca (fino a 6 persone).' },
    'fullday-yacht': { title: 'Full-Day Private Yachting Tour', text: '<b>ORARIO:</b> 10:00 – 17:00 (7 ore).<br><br>Tour tra le calette, pranzo a bordo e attrezzatura snorkeling.<br><br><b>Prezzo:</b> €750 complessivi a barca (fino a 8 persone).' }
=======
// js/data.js - Database camere e dettagli

export const roomsDatabase = {
    'classic-queen': {
        title: 'Classic Queen Room', maxGuests: 2, price: 140, maxStock: 12, available: 12,
        description: 'La Classic Queen Room è progettata per offrire un rifugio elegante e riservato. Arredata con materiali naturali, parquet in rovere chiaro e marmo di Carrara, dispone di un comodo letto Queen Size con materasso ortopedico ad alta densità.',
        features: ['2 Ospiti max', '28 m²', 'Bed Queen Size', 'Bagno in Marmo', 'Wi-Fi 1Gbps', 'Vista Giardino', 'Aria Condizionata Domotica'],
        images: {
            hero:    'img/Classic-Queen-Room.jpg',
            interni: 'img/Jacuzzi-Panoramica.jpg',
            bagno:   'img/Aura-Suites-1.jpg'
        }
    },
    'superior-twin': {
        title: 'Superior Twin Room', maxGuests: 2, price: 170, maxStock: 8, available: 8,
        description: 'Luminosa e versatile, la Superior Twin Room offre un balconcino privato attrezzato con poltrone da esterno per rilassarsi all’aria aperta. Configurabile con due letti singoli o matrimoniale.',
        features: ['2 Ospiti max', '32 m²', 'Letti Singoli/Double', 'Balcone Privato', 'Smart TV 55"', 'Set Cortesia Biologico'],
        images: {
            hero:    'img/Superior-Twin-Room.jpg',
            interni: 'img/argentato.jpg',
            bagno:   'img/vasca.jpg'
        }
    },
    'executive-sea': {
        title: 'Executive Sea View', maxGuests: 2, price: 210, maxStock: 5, available: 3,
        description: 'Posizionata ai piani alti, questa camera vanta ampie vetrate insonorizzate a tutta altezza con vista panoramica sul mare e macchina da caffè espresso con cialde artigianali.',
        features: ['2 Ospiti max', '38 m²', 'Vista Mare Frontale', 'Caffè Espresso Incluso', 'King Bed', 'Set Cortesia Luxury'],
        images: {
            hero:    'img/Aura-Suites-1.jpg',
            interni: 'img/Grand-Family-Residence.jpg',
            bagno:   'img/lampada.jpg'
        }
    },
    'deluxe-panorama': {
        title: 'Deluxe Panorama Suite', maxGuests: 2, price: 310, maxStock: 7, available: 4,
        description: 'Iconica suite caratterizzata da una vasca da bagno freestanding collocata vicino alle ampie vetrate vista mare. Offre un’ampia terrazza privata arredata con lettini prendisole.',
        features: ['2 Ospiti max', '55 m²', 'Vasca Freestanding', 'Terrazza Panoramica', 'King Size Bed', 'Lounge Area'],
        images: {
            hero:    'img/Deluxe-Panorama-Suite.jpg',
            interni: 'img/Sauna-e-Bagno-Turco.jpg',
            bagno:   'img/cubo.jpg'
        }
    },
    'comfort-quad': {
        title: 'Comfort Quad Room', maxGuests: 4, price: 220, maxStock: 10, available: 10,
        description: 'Progettata per ospitare fino a 4 ospiti adulti in totale comodità, dispone di due zone notte distinte con un letto King Size e due letti singoli, e bagno padronale con doppio lavabo.',
        features: ['4 Ospiti max', '48 m²', '1 King + 2 Singoli', 'Doppia TV', 'Spazioso Bagno', 'Frigobar Incluso'],
        images: {
            hero:    'img/Comfort-Quad-Room.jpg',
            interni: 'img/bianco.jpg',
            bagno:   'img/salotto.jpg'
        }
    },
    'grand-residence': {
        title: 'Grand Family Residence', maxGuests: 4, price: 320, maxStock: 15, available: 15,
        description: 'Un vero e proprio appartamento di lusso composto da due camere da letto matrimoniali indipendenti, due bagni privati ed un ampio salone centrale con terrazzo affacciato sul resort.',
        features: ['4 Ospiti max', '65 m²', '2 Camere da Letto', '2 Bagni Privati', 'Salotto Separato', 'Doppio Balcone'],
        images: {
            hero:    'img/Grand-Family-Residence.jpg',
            interni: 'img/albero.jpg',
            bagno:   'img/piante.jpg'
        }
    },
    'signature-terrace': {
        title: 'Signature Terrace Suite', maxGuests: 4, price: 450, maxStock: 6, available: 2,
        description: 'Attico panoramico per 4 ospiti con imponente terrazza a 360° dotata di Jacuzzi privata riscaldata ad uso esclusivo e servizio di maggiordomo dedicato.',
        features: ['4 Ospiti max', '80 m²', 'Jacuzzi in Terrazza', 'Servizio Maggiordomo', '2 Letti King Size', 'Vista Panoramica A 360°'],
        images: {
            hero:    'img/acquario.jpg',
            interni: 'img/Jacuzzi-Panoramica.jpg',
            bagno:   'img/Aura-Suites-3.jpg'
        }
    }
};

export const detailsDatabase = {
    'palestra': { title: 'Palestra Equipaggiata Technogym', text: '<b>Orario di Apertura:</b> 07:00 – 22:00 (tutti i giorni).<br><br>Macchinari cardio Technogym, manubri, kettlebell e area riservata per pilates e yoga.<br><br><b>All Inclusive:</b> Gratuito.<br><b>Altri trattamenti:</b> €25 al giorno.' },
    'massaggi': { title: 'Stanza Massaggi & Trattamenti Olistici', text: '<b>Orario:</b> 09:00 – 20:00 (su prenotazione).<br><br>Massaggi svedesi, olistici, decontratturanti e trattamenti viso al collagene.<br><br><b>All Inclusive:</b> 1 massaggio/giorno da 50 min incluso.<br><b>Altri:</b> €60 a sessione.' },
    'sauna': { title: 'Sauna Finlandese & Bagno Turco', text: '<b>Orario:</b> 08:00 – 21:00.<br><br>Percorso benessere in legno di pino nordico con aromaterapia e docce emozionali.<br><br><b>All Inclusive:</b> Gratuito.<br><b>Altri:</b> €35 per slot di 2 ore.' },
    'jacuzzi': { title: 'Jacuzzi Panoramica Riscaldata', text: '<b>Orario:</b> 09:00 – 22:00.<br><br>Vasca idromassaggio esterna riscaldata a 37°C nel solarium con vista tramonto.<br><br><b>All Inclusive:</b> Gratuito.<br><b>Altri:</b> €30 al giorno.' },
    'buffet': { title: 'Buffet Gourmet "Aura" & 2 Merende', text: '<b>ORARI:</b><br>• Colazione: 07:30 – 10:30<br>• Pranzo: 12:30 – 14:30<br>• Cena: 19:30 – 21:30<br>• Merenda mattutina: 11:00<br>• Merenda pomeridiana: 17:00<br><br><b>MENU DINAMICO:</b> cambia ad ogni pasto.<br><br><b>Trattamenti:</b> incluso in Mezza Pensione, Pensione Completa e All Inclusive.' },
    'pizzeria': { title: 'Pizzeria Artisanal "L\'Aura"', text: '<b>ORARIO:</b> solo a cena, 19:30 – 23:00.<br><br><b>MENU:</b> Margherita DOP, Diavola Calabrese, Tartufata & Porcini, Vegetariana.<br><br><b>Trattamenti:</b> gratuito solo con All Inclusive. Altri: €25 per ospite.' },
    'carne': { title: 'Steakhouse "Prime Grill"', text: '<b>ORARIO:</b> solo a cena, 19:30 – 23:00.<br><br><b>MENU:</b> Tagliata di Black Angus, Costata di Scottona, Hamburger Gourmet.<br><br><b>Trattamenti:</b> gratuito solo con All Inclusive. Altri: €45 a persona.' },
    'pesce': { title: 'Ristorante Gourmet di Pesce "Oceano"', text: '<b>ORARIO:</b> solo a cena, 19:30 – 23:00.<br><br><b>MENU:</b> Grigliata mista del Mediterraneo, Filetto di Orata in crosta, Frittura di paranza.<br><br><b>ATTENZIONE:</b> escluso dall\'All Inclusive (€80 fisso a persona).' },
    'bar-marea': { title: 'Marea Cocktail Lounge Bar', text: '<b>ORARIO:</b> 10:00 – 01:00.<br><br><b>LISTINO:</b> Signature Cocktail Aura, Mojito, Aperol Spritz, vini bianchi e rossi.<br><br><b>Trattamenti:</b> gratuito e illimitato con All Inclusive. A consumo per gli altri.' },
    'bar-tramonto': { title: 'Tramonto Sunset Pool Bar', text: '<b>ORARIO:</b> 09:00 – 19:00.<br><br><b>LISTINO:</b> Smoothies, estratti detox, birre artigianali, granite.<br><br><b>Trattamenti:</b> gratuito e illimitato con All Inclusive. A consumo per gli altri.' },
    'discoteca': { title: 'Aura Club & Nightlife', text: '<b>ORARIO:</b> 23:00 – 04:00.<br><br>DJ set resident e guest internazionali in sala insonorizzata con impianto Bose Professional.<br><br><b>INGRESSO:</b> gratuito per tutti gli ospiti residenti.' },
    'sunset-cruise': { title: 'Sunset Cruise & Aperitivo in Barca', text: '<b>ORARIO:</b> 17:30 – 20:30 (3 ore).<br><br>Navigazione lungo la costa al tramonto, aperitivo e Champagne.<br><br><b>Prezzo:</b> €350 complessivi a barca (fino a 6 persone).' },
    'fullday-yacht': { title: 'Full-Day Private Yachting Tour', text: '<b>ORARIO:</b> 10:00 – 17:00 (7 ore).<br><br>Tour tra le calette, pranzo a bordo e attrezzatura snorkeling.<br><br><b>Prezzo:</b> €750 complessivi a barca (fino a 8 persone).' }
>>>>>>> d5ec3b6ccd9e867f9e5f631224cea2b7bdabc631
};