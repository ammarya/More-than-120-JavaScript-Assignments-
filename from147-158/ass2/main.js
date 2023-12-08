class Phone {
  constructor(name, serial, price) {
    this.n = name;
    this.s = serial;
    this.p = price;
  }
  fullDetails(){
    return `${this.n} serial is ${this.s} and size is ${this.sz? this.sz : "Unknown"}`;
  }
}
// Write Tablet Class Here
class Tablet extends Phone {
  constructor(name, serial, price, size){
    super(name, serial, price)
    this.sz = size;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown