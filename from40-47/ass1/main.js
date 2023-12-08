let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
let last = myFriends.pop();

// Method 1
myFriends.length = num;

console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2

console.log(myFriends); // ["Ahmed", "Elham", "Osama"];


console.log(myFriends.slice(false, num));