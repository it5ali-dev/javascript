/*
let name = "ali Hassan"
if (name.includes('ali')) {
    alert("Hello Ali !")
} else {
    alert("Hello Guest !")
}
console.log(40 + 23 + 8 - 10);

let country = "Pakistan"
let continent = "Asia"
let population = 27.56

console.log(country, continent, population);
*/

/*
let fun = true
fun = 'true'
console.log(typeof fun);

let year

console.log(year);
console.log(typeof year);

year = 2002
console.log(year);
console.log(typeof year);
console.log(typeof null);
*/

/*
// comparison operator
let ageAli = 22
let ageAyesha = 21
console.log(ageAli > ageAyesha);
console.log(ageAyesha >= 18);

let isFullAge = ageAyesha >= 18
console.log(isFullAge);

let now = Date.now()
console.log(now - 1991 < now - 2024);
*/

/*
const firstName = "Ali"
const job = "Software Eng"
const BirthYear = 2002
const year = 2024

const ali = "I'm " + firstName + ', a ' + (year - BirthYear) + ' years old ' + job + '!'
console.log(ali);
*/

/*
// Using template literals
const firstName = "Ali"
const job = "Software Eng"
const BirthYear = 2002
const year = 2024

const ali = `I'm ${firstName}, a ${(year - BirthYear)} years old ${job}!`
// This will show as wirtten in backticks with tabs
// let example = `this is Ali
//                 I live in Sialkot
//                     study in Lahore`
console.log(ali);
console.log(example);
*/

/*
const name = `Ali`
const age = 21

if (age >= 18) console.log(`${name} is eligible to have driving liecense 🚓`);
else console.log(`${name} is not eligible to have a driving liecense 🚓`);

const birthYear = 2002
var century;
if (birthYear <= 2000) century = 20
else century = 21

console.log(century);
*/

// Switch Statement
const day = 'wednesday'
switch (day) {
    case "monday":
        console.log(`Plan course Structure`);
        console.log(`Go to coding meetup`);
        break
    case "tuesday":
        console.log(`Prepare theory videos`);
        break
    case "wednesday":
    case "thursday":
        console.log(`Write code examples`);
        break
    case "friday":
        console.log(`Record videos`);
        break
    case "saturday":
    case "sunday":
        console.log(`Enjoy the weekend!`);
        break
    default:
        console.log(`Not a valid day`);

}