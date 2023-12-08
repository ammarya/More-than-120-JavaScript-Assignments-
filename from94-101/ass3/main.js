
let theDiv = document.querySelector(".our-element");
let paragraph = document.querySelector("p");

  paragraph.remove();

  let createStartDiv = document.createElement("div");
  theDiv.before(createStartDiv);
  createStartDiv.classList.add("start");
  createStartDiv.title = "Start Element";
  createStartDiv.setAttribute("data-value", "Start");
  createStartDiv.innerHTML = "Start";

  let createEndDiv = document.createElement("div");
  theDiv.after(createEndDiv);
  createEndDiv.classList.add("end");
  createEndDiv.title = "End Element";
  createEndDiv.setAttribute("data-value","End");
  createEndDiv.innerHTML = "End";