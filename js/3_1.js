'use strict';

//let and const and block scoping

//console.log(productId1);
//var productId1 = 12; // this would get 'hoisted', display as undefined
//let productId1 = 12; // no 'hoisting' takes palce, will throw ReferenceError

//let productId2 = 12;
//{
//    let productId2 = 2000;
//}
//console.log(productId2); //will display 12, because let is block scoped

//const MARKUP_PCT = 100;
//if (MARKUP_PCT > 0) {
//    const MARKUP_PCT = 10; //this is scoped to the 'if' block only
//}
//console.log(MARKUP_PCT);

//Arrow functions
// => fat arrow symbol
var getPrice = () => 5.99; //declare getPrice function
//basically the same as
/*
    function getPrice() {
        return 5.99
    }
*/
console.log(typeof getPrice);   //will return function
console.log(getPrice());        //will display 5.99

//another example
var getPrice2 = count => count * 4.00; // no need () because it accepts one parameter
console.log(getPrice2(2));       //will display 8

//another example
var getPrice3 = (count, tax) => count * 4.00 * (1 + tax);
console.log(getPrice3(2, .07));

/*
    // same as
    function getPrice3(count, tax) {
        return count * 4.00 * (1 + tax);
    }
*/

//Arrow functions saves some keystrokes, but the real benefit is the handling of the 'this' keyword

// Default Function Parameters
var getProduct = function(productId = 1000) {
    console.log(productId);
}
getProduct();

var getProduct2 = function(productId = 1000, type = 'software') {
    console.log(productId + ', ' + type);
}
getProduct2(undefined, 'hardware');

var getProduct3 = (price, tax = price * 0.07) => console.log(price + tax);
getProduct3(5.00);

var getTotal = function(price, tax = 0.07) {
    console.log(arguments.length); //only returns arguments passed in
}
getTotal(5.00);

// Will return syntax error because price is not set yet
//var getTotal2 = function(price = adjustment, adjustment = 1.00) {
//    console.log(price + adjustment);
//}
//getTotal2();

//Rest and Spread
// Rest = Gathering up parameters in an array
// Spread = Spreading out elements of an array

// Rest symbol is '...'
var showCategories = function (productId, ...categories) {
    console.log(categories instanceof Array);
    console.log(categories);
};
//Gathers 'search' and 'advertising' into an array
showCategories(123, 'search', 'advertising'); //returns true and array of 'categories'

// Spread operator is also '...'
var prices = [12, 20, 18];
var maxPrice = Math.max(...prices); //extract prices array into separate variables
console.log(maxPrice);

// Object Literal Extensions
var price = 5.99, quantity = 30;
var productView = {
    price,
    quantity
}
console.log(productView); // displays {price: 5.99, quantity: 30}

// Function names can be strings (even with spaces)
var price = 5.99, quantity = 10;
var productView2 = {
    price,
    quantity,
    "calculate value"() {
        return this.price * this.quantity;
    }
};
console.log(productView2["calculate value"]());

// Function names can be dynamic
var field = 'dynamicField', price = 5.99;
var productView3 = {
    [field + "-001"] :price
};
console.log(productView3);

// Dynamic function names (like getter or setters)
var ident = 'productId';
var productView4 = {
    'innerValue': 'default',
    get [ident] () {return this.innerValue;},
    set [ident] (value) {}
};
console.log(productView4.productId); //returns 'default'