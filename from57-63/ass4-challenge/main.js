
function checkStatus(a, b, c) {
  let str, num, bool;
  typeof a === "string"
    ? (str = a)
    : typeof b === "string"
      ? (str = b)
      : (str = c);
  typeof a === "number"
    ? (num = a)
    : typeof b === "number"
      ? (num = b)
      : (num = c);
  typeof a === "boolean"
    ? (bool = a)
    : typeof b === "boolean"
      ? (bool = b)
      : (bool = c);
  return `Hello ${str}, Your Age Is ${num}, You ${bool ? "Are" : "Are Not"
    } Available For Hire`;
}

// Needed Output
console.log(checkStatus("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"