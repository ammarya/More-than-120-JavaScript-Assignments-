
// let div = document.querySelector("div");
// // let counterValue = div.innerHTML;
// // let nCv = parseInt(counterValue);
// function countdown() {
//   div.innerHTML--;
//   if (div.innerHTML === "0") {
//     clearInterval(counter);
//   }
// }

// let counter = setInterval(countdown, 1000);


let div = document.createElement("div");
div.appendChild(document.createTextNode(10));
document.body.appendChild(div);

let counter = setInterval(function () {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}, 1000);