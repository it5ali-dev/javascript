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

/*
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

const ali = ['Ali', 'Hassan', 2024 - 2002, 'Software Eng.', ['Hassan', 'Ali', 'Hasan Ali']]
console.log(ali);
*/

/*
// Objects
const ali = {
    firstName: 'Ali',
    lastName: 'Hasan',
    age: 2024 - 2002,
    job: "Software Eng.",
    friends: ['Hasan', 'Ali', 'Hasan Ali']
}
// console.log(ali);
// Dot Notation
// console.log(ali.friends);
// Bracket Notation
// console.log(ali['lastName']);
let nameKey = 'Name'
// console.log(ali["first" + nameKey]);
// console.log(ali["last" + nameKey]);

// let interestedIn = prompt(`What do you want to know about Ali?
// Choose between firstName, lastName, age, job and friends`)
// if (ali[interestedIn]) {
//     console.log(ali[interestedIn]);
// } else {
//     alert(`${interestedIn} is not defined`);
// }

// add properties
ali.location = 'Pakistan'
ali['twitter'] = 'it5hasan'
// console.log(ali);
ali.friends.push('Yusuf')
ali.friends.unshift('Muhammad')
console.log(`${ali.firstName} has ${ali.friends.length} friends, and his best friend is ${ali.friends[0]}`);
*/

/*
// Object Methods More
const ali = {
    firstName: 'Ali',
    lastName: "Hasan",
    birthYear: 2000,
    job: 'Software Eng.',
    friends: ['Hasan', 'Ali', 'Hasan Ali'],
    hasDriverLiecense: false,
    // calcAge: function () {
    //     return 2024 - this.birthYear
    // }
    calcAge: function () {
        this.age = 2024 - this.birthYear
        return this.age
    },
    getSummary: function () {
        console.log(`${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriverLiecense ? 'a' : 'no'} driver liecense`);
    }
}
// console.log(ali.calcAge());
// This is how we call a function using bracket Notation
// console.log(ali['calcAge']());
// console.log(ali.age);
// console.log(ali.age);
// console.log(ali.age);
// console.log(ali.age);
ali.getSummary()
*/

/*
// Loops
for (let i = 1; i <= 10; i++) {
    // console.log(`lifting weights repitition ${i} 🏋️‍♂️`);
}

const ali = ['Ali', 'Hasan', 2024 - 2002, 'Software Eng.', ['Yusuf', 'Hasan', 'Ali']]
for (let i = 0; i < ali.length; i++) {
    // console.log(ali[i]);
}

const years = [1991, 2003, 2007, 1969, 2020]
let ages = []
for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i])
}
// console.log(ages);

// continue and break
// for (let i = 0; i < ali.length; i++) {
//     if (typeof ali[i] !== 'string') continue
//     console.log(ali[i], typeof ali[i]);
// }
// BREAK with Number
for (let i = 0; i < ali.length; i++) {
    if (typeof ali[i] === 'number') break
    console.log(ali[i], typeof ali[i]);
}
*/

/*
// Printing backward
const ali = ['Ali', 'Hasan', 2024 - 2002, 'Software Eng.', ['Yusuf', 'Hasan', 'Ali']]
for (let i = ali.length - 1; i >= 0; i--) {
    console.log(`${i + 1} -> ${ali[i]}`);
}

// Nested Loops
for (let i = 1; i <= 3; i++) {
    console.log(`----- Starting Exercise ${i} -----`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Lifting Weight Repitition ${rep}`);
    }
}
*/

// While Loop
let i = 1
while (i <= 10) {
    // console.log(`Lifting Weight Repitition ${i}`);
    i++
}

let dice = Math.trunc(Math.random() * 6) + 1
// console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice === 6) console.log(`loop is about to end ...`);
}
