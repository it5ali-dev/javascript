'use strict'

/*
const restaurant = {
    name: 'Classico Italiano',
    location: 'Italy',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (startIndex, mainIndex) { }
}

// Object destructuring (variable names must be same as attribute names)
// const { name, mainMenu, location } = restaurant
const { name: restaurantName, mainMenu: menu, location: pta } = restaurant
// console.log(restaurantName, menu, pta);

const obj = { a: 23, b: 12, c: 9 };
let a = 111;
let b = 999;

({ a, b } = obj);
// {a, b} = obj // Error not work like this
// console.log(a, b);

const ali = {
    info: {
        name: "ali",
        age: 20
    },
    location: {
        street: "Abdullah",
        city: "Sialkot"
    }
}

const { info: { name } } = ali
console.log(name);


// const arr = [1, 2, 3]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// Destructuring
// const [x, y, z] = arr

// console.log(a, b, c);
// console.log(x, y, z);

// let [first, , second] = restaurant.categories
// console.log(first, second);

// [first, second] = [second, first]
// console.log(first, second);

// nested destructuring
const nested = [1, 2, [3, 4]]
// const [i, , j] = nested
const [i, , [j]] = nested
// console.log(i, j);

// default values
const [p = 1, q = 1, r = 1] = [5, 7]
// console.log(p, q, r);
*/

const arr = [7, 12, 3]
const badNewArray = [1, 2, arr[0], arr[1], arr[2]]
const newArray = [1, 2, ...arr]
console.log(arr, badNewArray, newArray, ...newArray);