let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = allArrs.concat(arr1, arr2); // Your Code Here
allArrs = allArrs.sort();
allArrs = allArrs.slice(-arr1.length);
allArrs = allArrs.join("").toLowerCase();
console.log(allArrs); // fxy