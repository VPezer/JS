//zad1:
/*
let niz = Array.from({length: 10}, () => Math.round(Math.random()*100+100)); //zaokruzivanje na najblizi cijeli
//Math.random vraća 0 do 1, pomnoženo sa 100, pa dodano 100 da dobijemo interval
console.log(`Prije sortiranja: ${niz}`);
//sortiranje
niz.sort((a,b)=>a-b); //sort sortira leksikografski, znaci gleda vrijednost prve zn, pa imamo komparator koji vraca negativan br ako je a<b
console.log(`Nakon sortiranja: ${niz}`);
*/

//zad2:
/*
const sumParniNeparni = () => {
    let zbrojParnih = 0;
    let zbrojNeparnih = 0;

    return {
        dodaj: (num) => {
            if (num%2 === 0) zbrojParnih += num;
            else zbrojNeparnih += num;
        },
        dohvatiParne: () => zbrojParnih, 
        dohvatiNeparne: () => zbrojNeparnih
    };
};

const brojac = sumParni_Neparni();

let unos;
do {
    unos = parseInt(prompt("Unesite broj (0 za kraj): "));
    if (unos !== 0) brojac.dodaj(unos);
} while (unos !== 0);
console.log(`Zbroj parnih: ${brojac.dohvatiParne()}`);
console.log(`Zbroj neparnih: ${brojac.dohvatiNeparne()}`);
*/

//zad3
/*
function kreirajPoruku() {
    const tekst = "Programirati nije teško!"; 
    return () => tekst;
}

const dohvatiPoruku = kreirajPoruku();
console.log(`Poruka: ${dohvatiPoruku()}`);
*/

//zad4
/*
function sum(a){ //closure
    return (b, c) => { //closure vraća arrow koji prima b i c, arrow pamti a
        return a * b * c
    }
}
let x = sum(10); //x je arrow fja i vraća 10*b*c
console.log(x(3,12)); //10*3*12
// ili
console.log(sum(10)(3,12)); //nema spremanja u x
*/

//zad5
const umnozak = a => b => c => {
    const svi = [a, b, c];
    const filtrirani = svi.filter(n => n > 0 && n < 20);
    const rezultat = filtrirani.reduce((acc, val) => acc * val, 1);
    return rezultat;
};

console.log(`Umnožak (5, 3, 7): ${umnozak(5)(3)(7)}`);       // 5*3*7 = 105
console.log(`Umnožak (5, 25, 3): ${umnozak(5)(25)(3)}`);      // 5*3 = 15
console.log(`Umnožak (-2, 10, 15): ${umnozak(-2)(10)(15)}`);  // 10*15 = 150