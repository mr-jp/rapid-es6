'use strict';

//Symbols
// Unique and immutable data type
// Useful as identifiers for object properties
let eventSymbol = Symbol('resize event');
console.log(typeof eventSymbol);    //symbol

const CONSTANT = Symbol('calculate event');
console.log(CONSTANT.toString());

let s = Symbol('event');
let s2 = Symbol('event');
console.log(s === s2); //should be false, as they are unique

let s3 = Symbol.for('event');
let s4 = Symbol.for('event');
console.log(s3 === s4); //true, 'for' is a registry with 'event' as a key
console.log(Symbol.keyFor(s3)); //show the key for this symbol