// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
console.log(`-----------1`);
let a = 10
let b = 1
console.log(a === b ? `Lygus` : a > b ? a : b);

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
console.log(`-----------2`);
for (let i = 1; i <= 10; i++){
    console.log(i);
}

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
console.log(`-----------3`);
for(let i = 0; i <= 10; i = i + 2) {
    console.log(i);
}

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
console.log(`-----------4`);
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
for (let i = 1; i <= 10;i++){
    console.log(`${i}: ${random(1, 10)}`);
}

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
console.log(`-----------5`);
let x = 0
while (x !== 5) {
    x = random(1, 10)
    console.log(x);
}

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
console.log(`-----------6`);
let masyvas = [...Array(random(20,30))].map(a => random(10,30)).reduce((a,b) => a > b ? a : b)
console.log(masyvas);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
console.log(`-----------7`);
let ABCD = [`A`, `B`, `C`, `D`]
let count = []
let z = [...Array(100)].map(a => ABCD[random(0, ABCD.length - 1)]);
for(const i of z.flat()) {
count[i] ? count[i] += 1 : count[i] = 1
}
console.log(count);

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
console.log(`-----------8`);
// function lygineSuma (a, b) {
// (typeof a === `number` && typeof b === `number` && ((a + b) % 2) === 0 ) ? a + b : (typeof a === `object` && typeof b === `object` && ((a.length + b.length) % 2) === 0) ? a.length + b.length : `suma nelyginė`;
// } KODEL NEVEIKIA ???? ^^^^^^^^^^
function lygineSuma(a,b) {
    if (typeof a === `number` && typeof b === `number` && ((a + b) % 2) === 0) {
        return a + b
    } else if (typeof a === `object` && typeof b === `object` && ((a.length + b.length) % 2) === 0) {
        return a.length + b.length
    } else {
        return `suma nelygine`
    }
}
console.log(lygineSuma(5, 5));

// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
console.log(`-----------9`);
function pirminisSkaicius(a) {
    if (typeof a !== `number`) {
        return `kintamasis nera skaicius`
    }
   if (a < 2) {
    return `skaicius nera pirminis`
   }
   let x = Math.sqrt(a)
   for(let i = 2; i <= x; i++) {
    if (a % i === 0) {
        return `skaicius nera pirminis`
    }
   }
   return `Skaicius yra pirminis`
}
console.log(pirminisSkaicius(17));

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)
console.log(`-----------10`);
function telefonoNumeris(a) {
    let number = `(XXX) XXX-XXXX`
    for (let i = 0; i < a.length; i++) {
        number = number.replace(/X/, a[i])
    }
    return number
}
// console.log(telefonoNumeris([9,2,3,5,1,6,7,8,9,1]));