
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,,o,o,l,2,0,Z";
let solution = myString.split("").map(function(ele) {
  return !ele.startsWith(",") ? ele : "";;
}).filter(function(ele) {
  return isNaN(parseInt(ele));
}).reduce(function(acc, current) {
  return `${acc}${current}`
}).split("_").join(" ").slice(true, -true);

console.log(solution); // Elzero Web School





// return ele !== "," && ele !== "_" && isNaN(ele) ? true : false;
