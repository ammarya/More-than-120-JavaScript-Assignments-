
// Method One
// Create Your Object Here
let objMethodOne = {
  property: 'Method One'
};

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = {};
objMethodTwo.property = "Method Two";

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here

// let objMethodThree = new Object();
// objMethodThree.property = "Method Three";

let objMethodThree = Object.create({});
objMethodThree.property = "Method Three";

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here

// let objMethodFour = new Object({
//   property: "Method Four",
// });

let objMethodFour = Object.assign({ property: "Method Four" }, {})


console.log(objMethodFour.property); // "Method Four"


// Other Method
// var Car = {
//   model: 'BMW',
//   color: 'red'
// }

// var ElectricCar = Object.create(Car);
// console.log(ElectricCar.model); // BMW


// Other Method
// class Car {

//   constructor(maker, price) {
//     this.maker = maker;
//     this.price = price;
//   }

//   getInfo() {
//     console.log(this.maker + " costs : " + this.price);
//   }
// }

// var car1 = new Car("BMW", 100);
// car1.getInfo();
// var car2 = new Car("Audi", 150);
// car2.getInfo();