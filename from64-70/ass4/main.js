
function specialMix(...data) {
  // Your Code Here
  let sum = 0;
  allIsSrting = true;
  for (let item of data) {
    if (!isNaN(parseInt(item))) {
      sum += parseInt(item);
      allIsSrting = false;
    }
  }
  return allIsSrting ? "All Strings" : sum;

}


console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings









// let sum = 0;
// for (let i = 0; i < data.length; i++) {
//   sum += data[i];
// }
// return sum;