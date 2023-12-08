let elementById = document.getElementById("elzero");
console.log(elementById);

let elementByTag = document.getElementsByTagName("div");
console.log(elementByTag[0]);

let elementByClass = document.getElementsByClassName("element");
console.log(elementByClass[0]);



let queryAllElement = document.querySelectorAll("div");
console.log(queryAllElement[0]);

let querySelectorAllClass = document.querySelectorAll(".element");
console.log(querySelectorAllClass[0]);

let querySelectorAllName = document.querySelectorAll('[name="js"]');
console.log(querySelectorAllName[0]);

let querySelectorAllNthChild = document.querySelectorAll('div:nth-child(1)');
console.log(querySelectorAllNthChild[0]);

/* <div id="elzero" class="element" name="js">JavaScript</div> */

let queryElement = document.querySelector("div");
console.log(queryElement);

let querySelectorWithId = document.querySelector("#elzero");
console.log(querySelectorWithId);

let matchesMethod = document.querySelector('#elzero').closest(".element");
console.log(matchesMethod);

let parentElement = document.querySelector('#elzero').parentNode.firstElementChild;
console.log(parentElement);







