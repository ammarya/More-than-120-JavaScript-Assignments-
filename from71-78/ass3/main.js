
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result = myArray.reduce(function (acc, current) {
  return acc + current
}).split("").filter(function (ele) {
  return ele !== ","
}).join("")

console.log(result);



// Elzero




