

setTimeout(createPopup, 5000);
function createPopup() { }

let popup = document.createElement("div");
  let heading = document.createElement("h2");
  let description = document.createElement("p");
  let close = document.createElement("span");

  heading.appendChild(document.createTextNode("Welcome"));
  description.appendChild(document.createTextNode("Welcome To Elzero Web School"));
  close.appendChild(document.createTextNode("x"));

  popup.appendChild(close);
  popup.appendChild(heading);
  popup.appendChild(description);

  close.className = "close";
  close.style.cssText = `
    position: absolute;
    top: -16px;
    right: -16px;
    background-color: red;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 50%;
    font-weight: bold;
    border: 2px solid white;
    cursor: pointer;
  `;

  popup.className = "popup";
  popup.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: #f5f4f4;
    border: 1px solid #dbdbdb;
    padding: 20px;
    width: 500px;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: Arial, Tahoma;
  `;

document.body.appendChild(popup);

document.addEventListener("click", function (e) {
    if (e.target.className === "close") {
      e.target.parentElement.remove();
    }
  });