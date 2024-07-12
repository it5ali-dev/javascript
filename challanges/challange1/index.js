/*
// Challange No. 1 & Challange No. 2
// for Mark
console.log("For Mark");
let mass = 95
let height = 1.88

let markBMI = mass / (height * height)
console.log(`Mark's BMI : ${markBMI.toFixed(2)}`);

console.log("For John");
mass = 85
height = 1.76

let johnBMI = mass / (height * height)
console.log(`John's BMI : ${johnBMI.toFixed(2)}`);

let markHeightBMI = false

if (markBMI > johnBMI) console.log(`Mark has greater BMI than John`);
else console.log(`John has greater BMI than Mark`);
*/

/*
// Challange No. 3
const minimum = 100

const scoreD1 = 97
const scoreD2 = 112
const scoreD3 = 101

const scoreK1 = 109
const scoreK2 = 95
const scoreK3 = 106

let Dol = (scoreD1 + scoreD2 + scoreD3) / 3
let Koa = (scoreK1 + scoreK2 + scoreK3) / 3

console.log(`Dolphin score: ${Dol.toFixed(2)}, Koalas score: ${Koa.toFixed(2)}`);

if (Dol >= minimum && Koa >= minimum) {
    if (Dol > Koa) {
        console.log(`Dolphin team wins the trophy!`);
    } else if (Koa > Dol) {
        console.log(`Koalas team wins the trophy!`);
    } else {
        console.log(`Draw!`);
    }
} else {
    console.log(`One of them have Average score less than minimum!`);
}
*/

// Challange No. 4
const bill = 430
let tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2)

console.log(`Bill value: ${bill}, tip: ${tip}, final value: ${bill + tip}`);