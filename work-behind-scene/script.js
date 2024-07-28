'use strict'

/*
function calcAge(birthYear) {
    const age = 2024 - birthYear
    function printAge() {
        const output = `${firstName}, You are ${age}, born in ${birthYear}`
        console.log(output);

        if (birthYear > 1996 && birthYear <= 2004) {
            const firstName = 'Hassan'
            const str = `oh, and you are a millenial, ${firstName}`
            console.log(str);
            function add(a, b) {
                return a + b
            }
        }
        // console.log(str); // Error (not accessible)
        // add(2, 5) // Error in strict mode
    }
    printAge()
    return age
}

const firstName = 'Ali'
console.log(calcAge(2003));
*/

/*
console.log(this);
const user = {
    fName: "Ali",
    lName: "Hassan",
    birthYear: 2002,
    age: function () {
        // console.log(this); // prints this function
        return 2024 - user.birthYear
    }
}

console.log(user.age());
*/

// function age(birthYear) {
//     console.log(this); // prints undefined
//     return 2024 - birthYear
// }

/*
const show = function () {
    const name = `Ali`
    console.log('display');
    const age = (birthYear) => {
        console.log(`inner ${this}`); // prints undefined
        return 2024 - birthYear
    }
    console.log(age(2002));
}

console.log(show());
*/

const me = {
    name: 'Ali',
    age: 22
}
let friend = {}
friend = me
friend.age = 30

console.log(me.age);
console.log(friend.age);