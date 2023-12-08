// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }

class Car {
  constructor(name, model, price){
    this.n = name;
    this.m = model;
    this.p = price;
  }
run() {
  return `Car is running now`
}
stop() {
  return 'car is stopped'
}
}

let car1 = new Car("Mercedes", "S500", 60000);
let car2 = new Car("BMW", "M4", 120000);
let car3 = new Car("VolksWagen", "Golf R", 55000);


// Needed Output

console.log(`Car one is ${car1.n} and model is ${car1.m} and the price is ${car1.p}`);
console.log(car1.run());

"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"