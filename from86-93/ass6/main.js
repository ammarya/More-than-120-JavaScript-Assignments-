let mainForm = document.forms[0];
let elementsNumber = document.querySelector("[name='elements']");
let elementsText = document.querySelector("[name='texts']");
let elementsType = document.querySelector("[name='type']");
let submitBtn = document.querySelector("[name='create']");
let resultElement = document.querySelector(".results");

// Prevent Form Submit
mainForm.onsubmit = function () {
  return false;
};

// Click On Submit Button
submitBtn.onclick = function () {
  // Empty Elements
  resultElement.innerHTML = "";
  let elesNums = elementsNumber.value;
  let elesText = elementsText.value;
  let elesType = elementsType.value.toLowerCase();
  for (let i = 0; i < elesNums; i++) {
    let mainElement = document.createElement(elesType);
    mainElement.className = "box";
    mainElement.title = "Element";
    mainElement.id = "id-" + (i + 1);
    let elementText = document.createTextNode(elesText);
    mainElement.appendChild(elementText);
    resultElement.appendChild(mainElement);
  }
};