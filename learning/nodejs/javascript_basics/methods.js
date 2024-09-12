

// JavaScript has powerful built-in array methods like map, filter, reduce.

let numbers = [1, 2, 3, 4];

// map - Create a new array with results of a function applied to every element
let doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8]

// filter - Create a new array with elements that pass a test
let even = numbers.filter((n) => n % 2 === 0);
console.log(even); // [2, 4]

// reduce - Accumulate a value by iterating over array elements
let sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum); // 10
