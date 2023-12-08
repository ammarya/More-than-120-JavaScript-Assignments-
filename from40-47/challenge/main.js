let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.pop(), my.pop(), my.reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];



console.log(my.slice(++zero, counter)); // ["Elham", "Mazero"]

// console.log(my.slice(zero, counter).splice(1, 3)); // ["Elham", "Mazero"]
// console.log(my.slice(zero, counter).slice(1, counter)); // ["Elham", "Mazero"]


// my[my.indexOf("Mazero")] = "Elzero";
// console.log(my[++zero]); // "Elzero"



// console.log(my[1].slice(0, -3)+ my[2].slice(2));

console.log(my[zero][--zero] + my[++zero][zero] + my[--counter].slice(counter));



console.log(my[++zero].slice(++counter).slice(--zero)); // "rO"



