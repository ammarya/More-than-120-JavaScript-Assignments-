function calculate(firstNum, secondNum, operation = "add") {
  // Your Code Here
  if (secondNum === undefined) {
    console.log(`The second number is not found`);
  } else {
    if (operation === "add" || operation === undefined) {
      console.log(firstNum + secondNum);
    }
    if (operation === "subtract") {
      console.log(firstNum - secondNum);
    }
    if (operation === "multiply") {
      console.log(firstNum * secondNum);
    }
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600








// if (operation === 'add') {
//   console.log(firstNum + secondNum);
// } else if (operation === 'subtract') {
//   console.log(firstNum - secondNum);
// } else if (operation === 'multiply') {
//   console.log(firstNum * secondNum);
// } else if (operation === undefined) {
//   console.log(firstNum + secondNum);
// } else if (secondNum === undefined) {
//   console.log(`The second numer is not found`);
// }
// }
