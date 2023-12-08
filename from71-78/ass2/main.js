
let myString = "EElllzzzzzzzeroo";

let finalString = myString
  .split("")
  .filter(function (element, position, arr) {
    console.log(position);
    console.log(arr.indexOf(element));
    return arr.indexOf(element) == position;
  })
  .join("");

console.log(finalString);


// Elzero
