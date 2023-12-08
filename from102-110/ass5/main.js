let div = document.createElement("div");
div.appendChild(document.createTextNode(10));
document.body.appendChild(div);

let counter = setInterval(countdown, 1000);
function countdown() {
  div.innerHTML--;
  if (div.innerHTML === "5") {
  window.open("https://elzero.org", "_blank", "width=400,height=400,left=200,top=100");
  } else if (div.innerHTML === "0") {
    clearInterval(counter);
  }
};
