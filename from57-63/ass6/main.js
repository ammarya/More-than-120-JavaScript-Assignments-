
function multiply(...args) {
  let result = 1;
  for (let arg of args) {
    if (typeof arg === "number") {
      result *= Math.trunc(arg);
    }
  }
  return result;
}

// Testing the function
console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000
