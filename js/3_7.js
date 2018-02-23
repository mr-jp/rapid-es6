'use strict';

// for .. of loop
var categories = ['hardware', 'software', 'vaporware'];
for (var item of categories) {
    console.log(item);
};

// Template Literals
// String template with interpolated variables and expressions
let invoiceNum = '1350';
console.log(`Invoice Number: ${invoiceNum}`);           //string interpolation
console.log(`Invoice Number: \${invoiceNum}`);          //no interpolation
console.log(`Invoice Number: ${invoiceNum + "-001"}`);  //expressions

// Newlines and special characters
let message =`A 
B
C
Even newlines are interpolated`;
console.log(message);

// Destructuring
// Example: array into it's parts

let salary = ['32000', '50000', '75000'];
let [ low, average, high ] = salary;
console.log(average);

let [ low2, ...remaining] = salary; //spread operator
console.log(remaining); //shows an array of 50000 and 75000

let [ low3, average3, high3, out4 = 100000 ] = salary;  //default amount
console.log(out4);

// Example: Objects
let salary4 = {
    low4: '32000',
    average4: '50000',
    high4: '75000'
};
let {low4, average4, high4} = salary4;
console.log(high4);

//Giving new variable name for properties
let {low4: newLow, average4: newAverage, high4: newHigh} = salary4;
console.log(newHigh);

//Example: Strings
let [maxCode, minCode] = 'AZ';
console.log(`min: ${minCode} max: ${maxCode}`);