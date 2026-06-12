//zad1 konstruktor funkcija i prototip
// konstruktor funkcija
function Automobil(marka, model, godinaProizvodnje, trenutnaBrzina) {
    this.marka = marka
    this.model = model
    this.godinaProizvodnje = godinaProizvodnje
    this.trenutnaBrzina = trenutnaBrzina
}

// Metode se dodaju na prototip — dijele se između SVIH instanci (štedi memoriju)
Automobil.prototype.dodajBrzinu = function(km) {
    this.trenutnaBrzina += km
}

Automobil.prototype.prikaziBrzinu = function() {
    console.log(`Trenutna brzina je ${this.trenutnaBrzina} km/h.`)
}

// --- Testiranje ---
let mojAutomobil = new Automobil("Toyota", "Camry", 2015, 60)
mojAutomobil.dodajBrzinu(20)
mojAutomobil.prikaziBrzinu()  // Trenutna brzina je 80 km/h.


// zad2 konstruktor, prototip i naslijđivanje
// Hijerarhija: Vozilo ← Automobil i Vozilo ← Motocikl

// RODITELJSKI KONSTRUKTOR
function Vozilo(marka, godinaProizvodnje) {
    this.marka = marka
    this.godinaProizvodnje = godinaProizvodnje
}

Vozilo.prototype.vozi = function() {
    console.log(`Vozim marku vozila ${this.marka} godište ${this.godinaProizvodnje}`)
}

// AUTOMOBIL nasljeđuje VOZILO
function Automobil(marka, godinaProizvodnje, boja, brojVrata) {
    Vozilo.call(this, marka, godinaProizvodnje)  // preuzima atribute od Vozila
    // Bez call(), konstruktor Vozilo ne bi znao da treba postaviti marka i godinaProizvodnje na Automobil/Motocikl objekt — this bi ukazivao na krivi kontekst.
    this.boja = boja
    this.brojVrata = brojVrata
}

// Postavljamo prototipni lanac: Automobil → Vozilo
Automobil.prototype = Object.create(Vozilo.prototype)
// koristimo Object.create(Vozilo.prototype) da postavimo da Automobil.prototype nasljeđuje sve metode (npr. vozi()) od Vozilo.prototype, bez kopiranja
Automobil.prototype.constructor = Automobil  // vraćamo ispravni constructor

Automobil.prototype.parkiraj = function() {
    console.log(`Automobil ${this.marka}, ${this.boja} boje je parkiran!`)
}

// MOTOCIKL nasljeđuje VOZILO
function Motocikl(marka, godinaProizvodnje, tip) {
    Vozilo.call(this, marka, godinaProizvodnje)  // preuzima atribute od Vozila
    this.tip = tip
}

// Postavljamo prototipni lanac: Motocikl → Vozilo
Motocikl.prototype = Object.create(Vozilo.prototype)
Motocikl.prototype.constructor = Motocikl  // vraćamo ispravni constructor

Motocikl.prototype.voziBrzo = function() {
    console.log(`Vozim motocikl tipa ${this.tip}, marke ${this.marka} i godište ${this.godinaProizvodnje} brzo!`)
}

// Testiranje nasljeđivanja i metoda
let auto = new Automobil("BMW", 2022, "crna", 5)
auto.vozi()      // Vozim marku vozila BMW godište 2022
auto.parkiraj()  // Automobil BMW, crna boje je parkiran!

let moto = new Motocikl("Honda", 2020, "sportski")
moto.vozi()      // Vozim marku vozila Honda godište 2020
moto.voziBrzo()  // Vozim motocikl tipa sportski, marke Honda i godište 2020 brzo!


// zad3 klase i naslijeđivanje
// Hijerarhija: Zaposlenik ← Programer i Zaposlenik ← Dizajner

// RODITELJSKA KLASA
class Zaposlenik {
    constructor(ime, prezime, email, ocjenaSposobnosti) {
        this.ime = ime
        this.prezime = prezime
        this.email = email
        this.ocjenaSposobnosti = ocjenaSposobnosti
    }

    ispisi() {
        console.log(`${this.ime} ${this.prezime}, email: ${this.email}`)
    }

    ocijeniSposobnost(ocjena) {
        this.ocjenaSposobnosti = ocjena
        console.log(`Ocjena sposobnosti zaposlenika ${this.ime} ${this.prezime} je ${this.ocjenaSposobnosti}`)
    }
}

// PROGRAMER nasljeđuje ZAPOSLENIK — koristi extends i super()
class Programer extends Zaposlenik {
    constructor(ime, prezime, email, programskiJezik) {
        super(ime, prezime, email)  // poziva konstruktor roditelja Zaposlenik
        this.programskiJezik = programskiJezik
    }

    // Override metode ispisi() — dodaje vlastiti atribut
    ispisi() {
        console.log(`${this.ime} ${this.prezime}, email: ${this.email}, programski jezik: ${this.programskiJezik}`)
    }
}

// DIZAJNER nasljeđuje ZAPOSLENIK — koristi extends i super()
class Dizajner extends Zaposlenik {
    constructor(ime, prezime, email, softver) {
        super(ime, prezime, email)  // poziva konstruktor roditelja Zaposlenik
        this.softver = softver
    }

    // Override metode ispisi() — dodaje vlastiti atribut
    ispisi() {
        console.log(`${this.ime} ${this.prezime}, email: ${this.email}, softver: ${this.softver}`)
    }
}

// Testiranje
const zaposlenik1 = new Zaposlenik('Pero', 'Perić', 'pero.peric@example.com', 4)
zaposlenik1.ispisi()            // Pero Perić, email: pero.peric@example.com
zaposlenik1.ocijeniSposobnost(4) // Ocjena sposobnosti zaposlenika Pero Perić je 4

const programer1 = new Programer('Marko', 'Markić', 'marko.markic@example.com', 'JavaScript')
programer1.ispisi()  // Marko Markić, email: marko.markic@example.com, programski jezik: JavaScript

const dizajner1 = new Dizajner('Ana', 'Anić', 'ana.anic@example.com', 'Adobe Photoshop')
dizajner1.ispisi()   // Ana Anić, email: ana.anic@example.com, softver: Adobe Photoshop