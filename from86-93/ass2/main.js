
let divElement = document.querySelector("div");
let imageElement = document.querySelector("img");


imageElement.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
imageElement.alt = "Elzero Logo";


// imageElement.setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
// imageElement.setAttribute("alt", "Elzero Logo");


for(let i = 0; i < 10 ; i++) {
  divElement.appendChild(imageElement)[i];
  console.log(divElement);
}
