let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle) === true) {
console.log(`${needle} Found`);
} else {
  console.log(`${needle} Not Found`);
}

console.log(`${haystack.includes(needle)} Found`); // Write 3 Solutions
console.log(`${haystack.indexOf(needle)} Found`);
console.log(`${haystack.lastIndexOf(needle)} Found`);

console.log(`${haystack.splice(1, 1, 0)} Found`);

