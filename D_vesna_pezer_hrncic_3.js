/*
let pr1 = function(a,b){
    if (a>b)
        return a-b;
    else 
        return a+b;
}

let pr2 = (a,b) => {
    if (a>b)
        return a-b;
    else 
        return a+b;
}

let pr3 = function(a,b){
    return a>b? a-b : a+b;
}

let pr4 = (a,b) => a>b? a-b : a+b;

console.log(pr1(7,3));
console.log(pr2(3,8));
console.log(pr3(7,5));
console.log(pr3(11,7));
*/

//zad1
/*
let niz = [1,2,3,4,5];
console.log("Početni niz: ", niz);
niz.unshift(100);
console.log("Niz nakon prve izmjene: ", niz);
niz.push(-200);
console.log("Niz nakon druge izmjene: ", niz);
niz.splice(niz.length-2, 1, 500);
console.log("Niz nakon trece izmjene: ", niz);
niz.splice(1,1);
console.log("Niz nakon cetvrte izmjene: ", niz);
niz.splice(niz.length-1,1);
console.log("Niz nakon pete izmjene: ", niz);
niz.splice(1, 1, 999);
console.log("Niz nakon šeste izmjene: ", niz);
let sum = 0;
for (let i = 0; i<niz.length; i++){
    sum+=niz[i];
}
console.log("Suma elemenata niza je: ", sum);
console.log("Konačni niz:\n")
for (const element of niz){
    console.log(element)
}
*/

//zad2

let trgovina = [
    {naziv_proizvoda: "kruh", godina_proizvodnje: 2026, cijena: 1.99, kolicina: 50, popust: 0.20},
    {naziv_proizvoda: "mlijeko", godina_proizvodnje: 2026, cijena: 1.59, kolicina: 20, popust: 0.10},
    {naziv_proizvoda: "usisavač", godina_proizvodnje: 2020, cijena: 55.49, kolicina: 7, popust: 0.30}
]

let artikliJeftinijiOd50 = trgovina.filter(artikl => artikl.cijena<50);
//nismo koristili član popust
console.log("Artikli s cijenom manjom od 50:");
artikliJeftinijiOd50.forEach(artikl => console.log(artikl.naziv_proizvoda));


//zad3
/*U nizu trgovina iz prethodnog zadatka prebroj količinu artikala koristeći se
funkcijom reduce().
 */
let ukupnaKolicina = trgovina.reduce((zbroj, artikl) => zbroj + artikl.kolicina, 0);
console.log("Ukupna količina artikala je: ", ukupnaKolicina);

/* reduce() → akumulira sve vrijednosti kolicina u jedan broj
reduce() kreće od početne vrijednosti 0 i svaki korak dodaje artikl.kolicina na zbroj*/

//zad4
//U nizu trgovina ispiši nazive trgovina koristeći se funkcijom map()
let naziviProizvoda = trgovina.map(artikl => artikl.naziv_proizvoda);

console.log("Nazivi svih proizvoda:");
console.log(naziviProizvoda);

//zad5

//je li broj pozitivan, vraća true ili false
const jePozitivan = broj => broj >= 0 ? true : false;

console.log(jePozitivan(5));   // true
console.log(jePozitivan(-3));  // false

//provjerava parnost broja
const provjeriParnost = broj => broj % 2 === 0 ? "Parno" : "Neparno";

console.log(provjeriParnost(4));  
console.log(provjeriParnost(7));  

//računa kub broja
const kub = broj => broj ** 3;

console.log(kub(3));  
console.log(kub(5));  

//ispisuje "Hello World!"
const pozdrav = () => console.log("Hello World!");

pozdrav(); 




