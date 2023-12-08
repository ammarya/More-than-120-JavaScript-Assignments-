
let imgEle = document.querySelectorAll("img");
// imgEle.alt = "Old";
// imgEle.alt = "Elzero New";

for (let i = 0; i < imgEle.length; i++) {
  let image = imgEle[i];
  if (image.hasAttribute("alt")) {
    image.alt = "old";
  } else {
    image.alt = "Elzero New";
  }
};


