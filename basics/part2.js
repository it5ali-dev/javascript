'use strict'

/*
let hasDriverLiecense = false
const pastTest = true

if (pastTest) hasDriverLiecense = true
if (hasDriverLiecense) console.log(`I can drive`);

// let interface = `Audio`
let private = `Audio`
console.log(private);
*/

/*
// functions
let increment = 0
function logger() {
    console.log(`${++increment} -> My name is Ali`);
}
logger()
logger()
logger()

function fruitProcessor(apple, orange) {
    console.log(apple, orange);
    const juice = `juice with ${apple} apples and ${orange} oranges`
    return juice
}
const appleJuice = fruitProcessor(3, 0)
const orangeJuice = fruitProcessor(0, 4)

console.log(`appleJuice -> ${appleJuice}`);
console.log(`orangeJuice -> ${orangeJuice}`);
*/

/*
function calAge1(birthyear) {
    return 2024 - birthyear
}

const age1 = calAge1(2002)
console.log(`Ali's age: ${age1}`);

// Anonymous | function expression
const age2 = function (birthyear) {
    return 2024 - birthyear
}
console.log(`Hassan's age: ${age2(2003)}`);
*/

/*
// Arrow function
const age3 = birthyear => 2024 - birthyear
console.log(`ali's age: ${age3(2002)}`);

const retireYear = (birthyear, firstName) => {
    const age = 2024 - birthyear
    const retirement = 60 - age
    // return retirement
    return `${firstName} retires after ${retirement} years`
}
console.log(retireYear(2002, 'Ali'));
*/

/*
function cutFruits(fruit) {
    return fruit * 4
}
function fruitProcessor(apple, orange) {
    const applePieces = cutFruits(apple)
    const orangePieces = cutFruits(orange)
    const juice = `juice with ${apple} apples with ${applePieces} pieces and ${orange} oranges with ${orangePieces} pieces`
    return juice
}
console.log(fruitProcessor(3, 4));
*/

/*
// Arrays
const friend1 = 'ali'
const friend2 = 'ahmed'
const friend3 = 'allu'

const friends = ['Ali', 'Hasan', 'Ali Hasan']
console.log(friends);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends.length);

friends.forEach(element => {
    console.log(element);
});

const years = new Array(1991, 1993, 1999, 2002)
console.log(years);

const calcAge = function (birthYear) {
    return 2024 - birthYear
}
let ages = []
for (let i = 0; i < years.length; i++) {
    ages[i] = calcAge(years[i])
    // console.log(years[i]);
}
console.log(ages);
*/

// Array methods
let friends = ['Ali', 'Hasan', 'Ali Hasan']
console.log(friends);

// Add elements
friends.push("Yusuf")
console.log(friends);
friends.unshift("ali")
console.log(friends);

// Remove Elements
friends.pop()
console.log(friends);
friends.shift()
console.log(friends);

// Other Methods
console.log(friends.indexOf("Ali"));
console.log(friends.indexOf("Ali Hasan"));
console.log(friends.includes("Ali"));
console.log(friends.includes("Ali Hassan"));

friends.push(23)
// it will give you false as it uses `===` to check for the value
console.log(friends.includes("23"));
