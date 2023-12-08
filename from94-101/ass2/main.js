// Catching The Html Elements.
let addField = document.querySelector(".classes-to-add");
let removeField = document.querySelector(".classes-to-remove");
let currentEleField = document.querySelector(".element");
let classOutput = document.getElementsByTagName("div")[3];
// array declaration.
let classList = [];
// default message if no inputs added.
classOutput.innerHTML = `No Class To Show`;

// Applying Blur Event On (Add Input Field).
addField.onblur = function () {
  let addFieldValue = addField.value;
  // Separating The Output Into 1 or more Inputs as array.
  classList = addFieldValue.split(" ");
  // stop function execution when there's no value in the field after blur.
  if (addFieldValue == "") {
    return;
  }
  // removing the default message.
  classOutput.innerHTML = ``;
  // sorting the output by letters.
  classList.sort();
  // Loop for adding all input values into output class.
  for (let i = 0; i < classList.length; i++) {
    // skip adding when the class list element is an empty string.
    if (classList[i] == "") {
      continue;
    }
    // appending class list element as a template literals.
    classOutput.innerHTML += `<span>${classList[i].toLowerCase()}</span>`;
  }
  // Emptying the input field after adding value.
  addField.value = "";
};

// starting the remove function.

// Applying Blur Event On (remove Input Field).
removeField.onblur = function () {
  // initialize the variable with the remove field value.
  let removeFieldValue = removeField.value.toLowerCase();
  // Separating The Output Into 1 or more Inputs as array.
  classList = removeFieldValue.split(" ");
  // skip adding when the class list element is an empty string.
  if (removeFieldValue == "") {
    return;
  }
  // Loop for removing all input values into output class.
  for (let i = 0; i < classList.length; i++) {
    let allSpan = document.querySelectorAll("span");
    // skip adding when the class list element is an empty string.
    if (classList[i] == "") {
      continue;
    }
    // nested loop for comparing the class list element with the span inner html.
    for (let j = 0; j < allSpan.length; j++) {
      // this condition remove the span from the DOM in case of equality.
      if (classList[i] == allSpan[j].innerHTML) {
        // remove from the DOM.
        allSpan[j].remove();
      }
    }
  }
  // Emptying the remove field after adding value.
  removeField.value = "";
};


//  other solution

// let currentElement = document.querySelector("[title='Current']");
// let classesListDiv = document.querySelector(".classes-list div");
// let mainInput = document.querySelectorAll(".main-input");

// mainInput.forEach((ele) => {
//   ele.onblur = function () {
//     if (this.value !== "") {
//       let arrayOfClasses = this.value.split(" ").map((l) => l.toLowerCase());
//       this.value = "";
//       for (let i = 0; i < arrayOfClasses.length; i++) {
//         if (this.classList.contains("classes-to-add")) {
//           currentElement.classList.add(arrayOfClasses[i]);
//         } else {
//           currentElement.classList.remove(arrayOfClasses[i]);
//         }
//       }
//       showClasses();
//     }
//   };
// });

// showClasses();

// function showClasses() {
//   let classesArray = Array.from(currentElement.classList); // Get Array From Classes List
//   classesArray.sort();
//   classesListDiv.innerHTML = ""; // Empty Classes Div
//   for (let i = 0; i < classesArray.length; i++) {
//     let span = document.createElement("span");
//     let spanText = document.createTextNode(classesArray[i]);
//     span.appendChild(spanText);
//     classesListDiv.appendChild(span);
//   }
//   if (classesArray.length === 0) {
//     classesListDiv.innerHTML = "No Classes To Show";
//   }
// }





//  other solution

let currentElement = document.querySelector("[title='Current']");
let classesListDiv = document.querySelector(".classes-list div");

let inputAdd = document.querySelector(".classes-to-add");
let inputRemove = document.querySelector(".classes-to-remove");

inputAdd.onblur = function () {
  if (this.value !== "") {
    let arrayOfClasses = this.value.split(" ").map((l) => l.toLowerCase());
    this.value = "";
    for (let i = 0; i < arrayOfClasses.length; i++) {
      currentElement.classList.add(arrayOfClasses[i]);
    }
    showClasses();
  }
};

inputRemove.onblur = function () {
  if (this.value !== "") {
    let arrayOfClasses = this.value.split(" ").map((l) => l.toLowerCase());
    this.value = "";
    for (let i = 0; i < arrayOfClasses.length; i++) {
      currentElement.classList.remove(arrayOfClasses[i]);
    }
    showClasses();
  }
};

showClasses();

function showClasses() {
  let classesArray = Array.from(currentElement.classList);
  classesArray.sort();
  classesListDiv.innerHTML = "";
  for (let i = 0; i < classesArray.length; i++) {
    let span = document.createElement("span");
    let spanText = document.createTextNode(classesArray[i]);
    span.appendChild(spanText);
    classesListDiv.appendChild(span);
  }
  if (classesArray.length === 0) {
    classesListDiv.innerHTML = "No Classes To Show";
  }
};