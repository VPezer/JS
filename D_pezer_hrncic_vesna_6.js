//metode koje glume get i set

//KONSTRUKTOR FUNKCIJA

function Auto(marka, model, godiste, snaga, kapacitetSpremnika) {

    // Javni atributi
    this.marka = marka
    this.model = model
    this.godiste = godiste
    this.snaga = snaga
    this.kapacitetSpremnika = kapacitetSpremnika
    this.gorivo = 'benzin'   // DEFAULT vrijednost — ne prosljeđuje se kroz konstruktor

    // Privatni atributi (let — nedostupni izvana)
    let potrosnja = 7.5      // L/100km
    let cijenaNafte = 1.85   // €/L

    // Privatna metoda koja se koristi unutar javnih metoda, ali nije dostupna van objekta
    let izracunajTrosak = function(km) {
        return (potrosnja / 100) * km * cijenaNafte
    }

    // Javne metode
    this.doseg = function() {
        return Math.floor((this.kapacitetSpremnika / potrosnja) * 100)
    }

    this.trosak = function(km) {
        let ukupno = izracunajTrosak(km)  // poziv privatne metode
        console.log(`Trošak goriva za ${km} km: ${ukupno.toFixed(2)} €`)
    }

    this.info = function() {
        console.log(`${this.marka} ${this.model} (${this.godiste}), ${this.snaga} kW, gorivo: ${this.gorivo}`)
        console.log(`Kapacitet: ${this.kapacitetSpremnika} L | Doseg: ${this.doseg()} km`)
    }

    // Object.defineProperty — pristup privatnom atributu potrosnja
    Object.defineProperty(this, 'potrosnja', {
        get: function() {
            return potrosnja
        },
        set: function(value) {
            if (value > 0)
                potrosnja = value
            else
                console.log('Potrošnja mora biti pozitivna vrijednost!')
        }
    })

    // Getter i Setter za cijenaNafte
    this.getCijenaNafte = () => cijenaNafte
    this.setCijenaNafte = (value) => {
        if (value > 0) cijenaNafte = value
        else console.log('Cijena mora biti pozitivna!')
    }
}

// Instanciranje dva objekta Auto i demonstracija metoda i get/set funkcionalnosti
const auto1 = new Auto('Toyota', 'Yaris', 2020, 72, 42)
const auto2 = new Auto('Volkswagen', 'Golf', 2022, 110, 50)

console.log(`Auto 1 info:`)
auto1.info()
auto1.trosak(250)
console.log(`Potrošnja auto1: ${auto1.potrosnja} L/100km`)
auto1.potrosnja = 6.0
console.log(`Nova potrošnja auto1: ${auto1.potrosnja} L/100km`)
auto1.trosak(250)

console.log(`Auto 2 info:`)
auto2.info()
auto2.trosak(400)
auto2.setCijenaNafte(2.10)
console.log(`Nova cijena nafte auto2: ${auto2.getCijenaNafte()} €/L`)
auto2.trosak(400)


// dodan factory function 12.5.2026., sve ostalo na vrijeme
// factory funkcija — kreira i vraća novi objekt bez potrebe za 'new' ključnom riječi, koristi se za enkapsulaciju logike kreiranja objekta

function kreirajAuto(marka, model, godiste, snaga, kapacitetSpremnika) {

    // Privatni atributi
    let potrosnja = 7.5
    let cijenaNafte = 1.85

    // Privatna metoda
    let izracunajTrosak = function(km) {
        return (potrosnja / 100) * km * cijenaNafte
    }

    return {
        marka,
        model,
        godiste,
        snaga,
        kapacitetSpremnika,
        gorivo: 'benzin',    // DEFAULT vrijednost

        doseg() {
            return Math.floor((this.kapacitetSpremnika / potrosnja) * 100)
        },

        trosak(km) {
            let ukupno = izracunajTrosak(km)
            console.log(`Trošak goriva za ${km} km: ${ukupno.toFixed(2)} €`)
        },

        info() {
            console.log(`${this.marka} ${this.model} (${this.godiste}), ${this.snaga} kW, gorivo: ${this.gorivo}`)
            console.log(`Kapacitet: ${this.kapacitetSpremnika} L | Doseg: ${this.doseg()} km`)
        },

        // Getteri i setteri za privatne atribute
        getPotrosnja() { return potrosnja },
        setPotrosnja(value) {
            if (value > 0) potrosnja = value
            else console.log('Potrošnja mora biti pozitivna vrijednost!')
        },

        getCijenaNafte() { return cijenaNafte },
        setCijenaNafte(value) {
            if (value > 0) cijenaNafte = value
            else console.log('Cijena mora biti pozitivna!')
        }
    }
}

// Instanciranje objekta factory funkcijom i demonstracija metoda i get/set funkcionalnosti
const auto3 = kreirajAuto('BMW', '3 Series', 2023, 135, 59)
auto3.info()
auto3.trosak(300)
auto3.setPotrosnja(8.2)
console.log(`Nova potrošnja auto3: ${auto3.getPotrosnja()} L/100km`)
auto3.trosak(300)

