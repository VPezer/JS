//zad1
/*
function delayedGreeting(ms, pozdrav) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(pozdrav);
    }, ms);
  });
}

// Poziv
delayedGreeting(2000, "Pozdrav, Vesna!")
  .then(function(tekst) {
    console.log(tekst); // ispiše se tek nakon 2 sekunde
  });
  */


//zad2
/*
function checkWeather(grad) {
  return new Promise(function(resolve, reject) {
    // Simulacija: neka gradovi s parnim duljinama naziva imaju sunce ☀️
    let suncano = grad.length % 2 === 0;

    setTimeout(function() {
      if (suncano) {
        resolve("Vrijeme je sunčano u " + grad);
      } else {
        reject("Vrijeme nije sunčano u " + grad);
      }
    }, 1500);
  });
}

// Poziv
checkWeather("Split")
  .then(function(poruka) {
    console.log(poruka);
  })
  .catch(function(greška) {
    console.log(greška);
  });
*/


//zad3
/*
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
  console.log('Prije čekanja');
  await delay(2000); // čeka 2 sekunde
  console.log('Nakon čekanja');
}

example();
*/


//zad4
/*
function getData(callback) {
  setTimeout(function() {
    const data = { message: 'Ovo su podaci' };
    callback(data); // poziva se callback kad podaci stignu
  }, 4000);
}

function processData(data) {
  console.log('Obrada podataka:', data.message);
}

getData(processData);
console.log('Nastavak izvršavanja'); // ovo se ispisuje odmah
*/


//zad5
/*
// Helper funkcija koja simulira "spori izračun"
function calculateSum(a, b) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(a + b);
    }, 1000); // kasnjenje 1 sekunda
  });
}

// Glavna async funkcija
async function calculateAndPrintSum(a, b) {
  console.log("Računam zbroj...");
  let rezultat = await calculateSum(a, b); 
  // čeka dok Promise ne vrati zboj
  console.log("Rezultat: " + a + " + " + b + " = " + rezultat);
}

// Poziv
calculateAndPrintSum(15, 27);
*/


//zad6
/*
function checkNumber(broj) {
  return new Promise(function(resolve, reject) {
    if (broj % 2 === 0) {
      resolve("Broj je paran.");
    } else {
      reject("Broj je neparan.");
    }
  });
}

// Poziva s .then() i .catch()
checkNumber(8)
  .then(function(poruka) {
    console.log(poruka); // "Broj je paran."
  })
  .catch(function(poruka) {
    console.log(poruka); // "Broj je neparan."
  });

// Broj je neparan:
checkNumber(7)
  .then(msg => console.log(msg))
  .catch(msg => console.log(msg)); // "Broj je neparan."
  */