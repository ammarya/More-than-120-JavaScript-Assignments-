let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.split("")[0].toLowerCase());
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase().repeat(3)); // eee


console.log(userName.toLowerCase().substring(userName.length-6, userName.length -5)); // e
