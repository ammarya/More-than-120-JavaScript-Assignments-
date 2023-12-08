let divOne = document.querySelector(".one");
let divOneTitle = document.querySelector(".one").title;
let divOneText = document.querySelector(".one").innerHTML;
let divTwo = document.querySelector(".two");
let divTwoTitle = document.querySelector(".two").title;
let divTwoText = document.querySelector(".two").innerHTML;

let numTwo = document.querySelectorAll("div").length;
divOne.title = divTwoTitle;
divOne.innerHTML = divTwoText;
divTwo.title = divOneTitle;
divTwo.innerHTML = divOneText + " " + numTwo;