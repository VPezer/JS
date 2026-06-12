//alert("Moj prvi js program!");
//console.log("Moj prvi js program!");
function aritmetickaSredina(){
    let a = Number(prompt("Unesi prvi broj: "));
    let b = Number(prompt("Unesi drugi broj: "));
    let c = Number(prompt("Unesi treći broj: "));
    
    if (isNaN(a)||isNaN(b)||isNaN(c)){
        console.log("Nije broj!");
        return;
    } else if (!Number.isInteger(a)||!Number.isInteger(b)||!Number.isInteger(c)){
        console.log("Nije cijeli broj!");
        return;
    } else if (a<=0||b<=0||c<=0){
        console.log("Nije prirodan broj!");
        return;
    } else {
        let sredinaOd3 = (a+b+c)/3;
        console.log(`sredina je ` + sredinaOd3);
    }

}

function kalkulator(a, b, znak) {
    let rezultat;
    if (znak === "+") rezultat = a + b;
    else if (znak === "-") rezultat = a - b;
    else if (znak === "*") rezultat = a * b;
    else if (znak === "/") {
        if (b === 0) { console.log("Dijeljenje s nulom!"); return; }
        rezultat = a / b;
    }
    console.log(rezultat);
}

function prvaZnamenka(n){
    while(n>=10){
        n=Math.floor(n/10);
    }
    return n;
}

function godisnjeDoba() {
    let m = Number(prompt("Unesi broj mjeseca (1-12):"));
    let doba;
    switch (m) {
        case 1: case 2: case 3: doba = "Zima"; break;
        case 4: case 5: case 6: doba = "Proljeće"; break;
        case 7: case 8: case 9: doba = "Ljeto"; break;
        case 10: case 11: case 12: doba = "Jesen"; break;
        default: doba = "Nevažeći unos!";
    }
    alert(doba);
}

function brojiPojavljivanja(n, x) {
    let unos = n;
    let count = 0;
    while (n > 0) {
        if (n % 10 === x) count++;
        n = Math.floor(n / 10);
    }
    let poruka = `U broju ${unos} ima ${count} pojavljivanja broja ${x}.`;
    console.log(poruka);
    return poruka;
}


//aritmetickaSredina()
//kalkulator(10, 5, "+");
//kalkulator(10, 5, "/");
//kalkulator(3, 0, '/');
//console.log(prvaZnamenka(90210));
//godisnjeDoba();
//brojiPojavljivanja(2955, 5); // "U broju 2955 imamo 2 pojavljivanja broja 5."

    


    /*console.log(${((a+b+c)/3).toFixed(2)});
    n=5783
    n/=10
    n=578.3
    floor zaokruzivanje na manji
    ceil na veci
    if('5'==5) je true
    if('5'===5) je false*/
