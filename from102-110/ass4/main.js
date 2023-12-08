let div = document.createElement("div");
div.appendChild(document.createTextNode(10));
document.body.appendChild(div);


let counter = setInterval(countdown, 1000);
function countdown() {
  div.innerHTML--;
  if (div.innerHTML === "0") {
    clearInterval(counter);
    location.href = "https://elzero.org";
    // console.log(location.href);
  }
};


