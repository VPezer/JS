// zad1
// Originalna funkcija
function ocjena(k1, k2, sem) {
    return k1 * 0.42 + k2 * 0.42 + sem * 0.16
}
console.log(`Postotak ostvaren na kolegiju ${ocjena(50, 80, 80)}`)

// Arrow funkcija
let ocjena_arrow = (k1, k2, sem) => k1 * 0.42 + k2 * 0.42 + sem * 0.16
console.log(`Arrow - Postotak ostvaren na kolegiju ${ocjena_arrow(50, 80, 80)}`)

// Currying funkcija
function ocjena_currying(k1) {
    return function (k2) {
        return function (sem) {
            return k1 * 0.42 + k2 * 0.42 + sem * 0.16
        }
    }
}
console.log(`Currying - Postotak ostvaren na kolegiju ${ocjena_currying(50)(80)(80)}`)

// zad2
// Arrow funkcija
let rezultat_arrow = (kolegij) => (ostvareno) => (ukupno) =>
    `Iz kolegija ${kolegij} ostvarili ste ${((ostvareno / ukupno) * 100).toFixed(2)}%`

console.log(rezultat_arrow("PWKS")(25)(35))

// Currying funkcija
function rezultat(kolegij) {
    return function (ostvareno) {
        return function (ukupno) {
            return `Iz kolegija ${kolegij} ostvarili ste ${((ostvareno / ukupno) * 100).toFixed(2)}%`
        }
    }
}
console.log(rezultat("PWKS")(25)(35))


// zad3
function mnozi(a) {
    return function (b) {
        if (b === undefined) {
            return a
        } else if (b !== 0 && b % 2 === 0) {
            return mnozi(a * b)
        } else {
            return mnozi(a)
        }
    }
}

// mnozi(2)(5)(13)(10)(14)(177)(4)(0)() → 2*10*14*4 = 1120
console.log(`Rezultat množenja parnih: ${mnozi(2)(5)(13)(10)(14)(177)(4)(0)()}`)

// zad4
function Kolegij(godina, semestar, kol1, kol2, ocjena_rez) {
    this.godina = godina
    this.semestar = semestar
    this.kol1 = kol1
    this.kol2 = kol2
    this.ocjena_rez = ocjena_rez

    this.ocjena = function () {
        console.log(`Postotak riješenosti: ${this.kol1 * 0.5 + this.kol2 * 0.5}%`)
    }

    this.info = function () {
        console.log(`Student na predmetu PWKS, ${this.godina}. godina, ${this.semestar}. semestar, ostvario je ${this.ocjena_rez}%`)
    }
}

const k1 = new Kolegij(2, 4, 70, 80, 75)
const k2 = new Kolegij(3, 6, 60, 90, 72)

k1.ocjena()
k1.info()
k2.ocjena()
k2.info()


// zad5
k2.ime = "Vesna"
k2.prezime = "Pezer Hrnčić"
k2.status = "izvanredni"

console.log(`Student ${k2.ime} ${k2.prezime} ima ${((k2.kol1 * 0.5 + k2.kol2 * 0.5).toFixed(2))}%`)

//zad6
delete k2.ime;
delete k2.prezime;
delete k2.status;

//console.log(k2);
// Provjera - ispisuje samo preostale properties (bez metoda)
for (let key in k2) {
    if (typeof k2[key] !== 'function')
        console.log(`${key}: ${k2[key]}`)
}

//za ispis se koristi for...in petlja koja prolazi kroz sve properties objekta k2, a uvjetom se isključuju metode (funkcije) i ispisuju samo preostali properties.
//za ispis se koriste template literals (${}) koji omogućuju jednostavno formatiranje stringova i uključivanje izraza unutar stringa.