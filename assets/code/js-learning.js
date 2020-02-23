console.log("Hello from JavaScript");

// 1. Comment
var number = 5; // inline comment

/* this is a multi-line 
comment */

number = 9;

// 2. Data types and Variable types
/* undefined, null, boolean, string, symbol:mutable, number, and object: key value  */

// define a variable
var myName = "Yu" // used globally
myName = 8  //can set it to other types later

let ourName = "UMN" // used locally

const pi = 3.14  // cannnot be changed

// 3. Storing values with Assignment Operator
var a; // declare a variable   
// ; is not required but recommended
var b = 2; // declare and assign

console.log(a)
a = 7;
b = a;

console.log(b) // allows you to see the result in the console, check variables


// 4. Initializing Variables without Assignment operator 
var a = 9; // declare and initialize

// 5. Uninitialized variables
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

// 5.Naming of variables
var properCamelCase;

// 6. computation
var remainder = 11 % 3;

// 7. String
var names = "This is a \"quotation \" hh.";
console.log(names)

// 8. loop
function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) { // === means matches both value and type
            return contacts[i][prop] || "No such property";  // if it doesn't exist, then use the second one.       
        }
    }
    return "No such contact.";
}

// 9. Generate random fractions
function randomFraction() {
    return Math.random()
}

console.log(randomFraction())

// 10. Generate random integer
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
console.log(randomNumberBetween0and19)

function randomWholeNumber() {
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNumber())

function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1) + ourMin);
}
console.log(ourRandomRange(3, 9))

// 11. ParseInt function
function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("56"));

// with a radix, namely the base
function convertToInteger(str) {
    return parseInt(str, 2);
}
console.log(convertToInteger("10111"));

// 12. Conditional(Ternary) Operator

// condition ? statement-if-true: statement-if-false;
function checkEqual(a, b) {
    return a === b ? true : false;
}
console.log(checkEqual(3, 4));

// nested ternary operator
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(-10));

// 13. Difference between var and let
// starting with 2015 ES6, we can use let and const. 

// we can declare var two times, but cannot declare let two times. But we can assign the let for two times. This is why people prefer to use let.

// var is not restricted, but let is restricted to the block scope
function checkScopeVar() {
    "use strict";
    var i = "Function Scope";
    if (true) {
        var i = "Block Scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
}

function checkScopeLet() {
    "use strict";
    let i = "Function Scope";
    if (true) {
        let i = "Block Scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
}
checkScopeVar();
checkScopeLet();

// 14. const has all the features as let, but it's read-only.
// In your own code, should use const and let mostly.
const SENTENCE = "string"; // usually use CAPITAL name to mean that a const.

// mutate a const
const s = [5, 4, 2];
function editInPlace() {
    "use strict";
    s[0] = 3;
    s[1] = 9;
    s[2] = 0;
    // but we can't do 
    // s = [3, 9, 0]; because it's const.
}
editInPlace();
console.log(s);

// prevent mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    
    Object.freeze(MATH_CONSTANTS); // freeze the constant
    
    try {  //if the statement below is legal, then run it, or else print out the error message
        MATH_CONSTANTS.PI = 39;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

// 15. Use Arrow function to write concise anonymous functions 

// original version
/*
var magic = function () {
    return new Date();
}
*/

// arrow function version
const magic = () => new Date();

/*
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
}
*/
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]))

// 16. arrow high order function
const realNumberArray = [-1, 2, 5, 3, 0, -9];

const squareList = arr => {  // when there is only one argument, the parenthesis can be omitted.
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// 17. default argument
const increment = (function () {
    return function increment(number, value = 1) {
        return number + value;
    }
})();
console.log(increment(5, 2));
console.log(increment(5));

// 18. rest operator
// original version
/* 
const sum = (function () {
    return function sum(x, y, z) {
        const args = [x, y, z];
        return args.reduce((a, b) => a+b, 0);
    }
})();
*/
const sum = (function () {
    return function sum(...args) {  // ...args will create an array with the input values. And now we can have any number of arguments
        return args.reduce((a, b) => a+b, 0);
    }
})();

console.log(sum(1, 2, 4, 5, 9));

// 19. Spread Operator to evaluate arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
// original version
/*
(function() {
    arr2 = arr1; // arr2 is the same as arr1, not just a copy of arr1
    arr1[0] = 'potato';
})();   //does this mean fun the function at the time defining it?
console.log(arr2)
*/
(function() {
    arr2 = [...arr1]; // get each element in the array, and then create an array of these values. In this way, we get a copy of arr1
    arr1[0] = 'potato';
})();   
console.log(arr2)

// 20. Use Destructuring Assignment to assign variables from objects
var voxel = {x: 3.6, y: 7.4, z: 6.54};  // this is an object

// old ways to do 
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

// use decontructure
const {x: q, y: e, z: r} = voxel; // get the value of x, y, z from voxel, and assign them to q, e, r
console.log(q, e, r);

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const {tomorrow: tempOfTomorrow} = avgTemperatures;
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));

// from nested object
const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
    "use strict";
    const {tomorrow: {max : maxOfTomorrow}} = forecast;
    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));


// from arrays
const [w, v, , t] = [1, 2, 3, 4, 5, 6];
console.log(w, v, t);

let n =9, m = 4;
(() => {
    "use strict";
    [n, m] = [m, n];
})();
console.log(n, m);

// with rest operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function removeFirstTwo (list) {
    const [, , ...arr] = list;
    return arr;
}
console.log(removeFirstTwo(source));
