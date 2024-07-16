'use strict'


const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celcius',
        // value: Number(prompt(`Degrees celcius: `))
        value: 10
    }
    // debugger
    const kelvin = measurement.value + 273
    console.log(measurement);
    // console.table(measurement);
    return kelvin
}
console.log(measureKelvin());
// console.warn(measureKelvin());
// console.error(measureKelvin());