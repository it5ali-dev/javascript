'use strict'

/*
// Challange No. 1
let calcAverage = (score1, score2, score3) => {
    return ((score1 + score2 + score3) / 3)
}

// const avgDolphins = calcAverage(44, 23, 71)
// const avgKoalas = calcAverage(65, 54, 49)
const avgDolphins = calcAverage(85, 54, 41)
const avgKoalas = calcAverage(23, 34, 27)

let checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`no team wins!`);
    }
}

checkWinner(avgDolphins, avgKoalas)
*/

/*
// Challange No. 2
let bill = 100
let bills = [125, 555, 44]
let tips = []
let total = []
let calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15
    } else {
        return bill * 0.2
    }
}

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i])
    total[i] = bills[i] + tips[i]
}

let tip = calcTip(bill)
console.log(tip);
console.log(bills);
console.log(tips);
console.log(total);
*/

/*
// Challange No.3
let mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return (this.mass / this.height ** 2)
    }
}
let john = {
    fullName: 'John Smith',
    mass: 91,
    height: 1.95,
    calcBMI: function () {
        return (this.mass / this.height ** 2)
    }
}
if (mark.calcBMI() > john.calcBMI()) {
    console.log(`Mark's BMI (${mark.calcBMI().toFixed(2)}) is higher than John's (${john.calcBMI().toFixed(2)})`)
} else if (mark.calcBMI() < john.calcBMI()) {
    console.log(`John's BMI (${john.calcBMI().toFixed(2)}) is higher than Mark's (${mark.calcBMI().toFixed(2)})`);
} else {
    console.log(`Both have same BMI`);
}
*/

// Challange No.4
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let total = []

for (let i = 0; i < bills.length; i++) {
    if (bills >= 50 && bills <= 300) {
        tips.push(bills[i] * 0.15)
    } else {
        tips.push(bills[i] * 0.2)
    }
    total.push(bills[i] + tips[i])
}

console.log(`Bills -> ${bills}
Tips -> ${tips}
Total -> ${total}`);

let nums = [11, 13, 41, 14, 15, 18, 17, 20, 19, 10]
let calcAverage = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let avg = sum / arr.length
    return avg
}
let average = calcAverage(nums)
console.log(average);
console.log(calcAverage(total));
console.log(calcAverage(tips).toFixed(2));