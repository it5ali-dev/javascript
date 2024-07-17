'use strict'

/*
let input = [2, 3, 4, 5, 7, 1];
let reverse = []

if (typeof (input) === 'string') {
    for (let i = input.length - 1; i >= 0; i--) {
        reverse += input.charAt(i)
    }
} else if (typeof (input) === 'number') {
    let temp1 = input
    let temp2
    while (temp1 !== 0) {
        temp2 = temp1 % 10
        reverse = reverse * 10 + temp2
        temp1 = parseInt(temp1 / 10)
    }
} else if (typeof (input) === 'object') {
    for (let i = input.length - 1; i >= 0; i--) {
        reverse.push(input[i])
    }
} else {
    console.log(`input ${input} is not a String, Number or an Array!`);
}

console.log(`Reverse of ${input} -> ${reverse}`);
*/

// challange No.2
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculcate the temperature amplitude. Keep in mind that sometimes there might be a sensor error"

/*
const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// understanding the problem
// - What is the temperature amplitude actually is? Answer:difference between highest and lowest temperature
// - How to calculate max and min temperatures?
// - What does a sensor error looks like?

// breaking the problem into sub-parts
// - How to ignore errors?
// - Find max value in temperature array
// - Find min value in temperature array
// - Subtract min from max = amplitude

let min, max
let calcTempAmplitude = function (temp) {
    min = max = temp[0]
    for (let i = 0; i < temp.length; i++) {
        if (typeof (temp[i]) !== 'number') {
            continue
        } else {
            if (temp[i] > max) {
                max = temp[i]
            } else if (temp[i] < min) {
                min = temp[i]
            } else {
                max = max
            }
        }
    }
    return max - min
}

let amplitude = calcTempAmplitude(temperature)
console.log(`Array: ${temperature}`);
console.log(`max: ${max}, min: ${min}`);
console.log(`The Temperature Amplitude -> ${amplitude}`);

// merge two arrays

// in ES5
let array = temperature.concat(temperature)
console.log(array);
// in ES6
let newArray = [...temperature, ...temperature]
console.log(newArray);
*/

// Challange No.3
// let data1 = [17, 21, 23]
let data1 = [12, 5, -5, 0, 4]
let printForcast = function (arr) {
    let concatinate = ''
    for (let i = 0; i < arr.length; i++) {
        concatinate += `... ${arr[i]}°C in ${i + 1} days `
    }
    return concatinate
}
console.log(printForcast(data1));