// creat an epmty array
// loop on array > swaped name
// check current letter
// if capital con to small  and viceversa
// push to array
// join array elements

let start = 0;
let swappedName = "elZerO";
let newarr = [];
// let arr = ["elZerO"];


for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    newarr.push(swappedName[i].toLowerCase());
  } else {
    newarr.push(swappedName[i].toUpperCase());
  }

}

console.log(newarr.join(""));

// Output
// "ELzERo"




// for (i = start; i < swappedName.length; i++) {
//     // newarr.push(swappedName[i].toUpperCase())
//     // console.log(newarr[i]); 
//   words[i] = words[i][start].toUpperCase() + words[i];
//   }

// console.log(`"${words}"`);




// for (let i = start; i < swappedName.length; i++) {
//   if (typeof swappedName === "string") {
//   }
//   console.log(`${newarr[swappedName]}`);
// }
