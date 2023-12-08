
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let onlyNums = numsAndStrings.filter(function (ele) {
  return -ele;
}).map(function (ele) {
  return -ele;
});


console.log(onlyNums);

// [-1, -10, 10, 20, -5, -3]

