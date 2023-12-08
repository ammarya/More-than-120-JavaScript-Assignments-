
var myParent = document.body;
// create select box for font style and the options.
let selectFonts = document.createElement("select");
selectFonts.id = "fontSelect";
// selectFonts.setAttribute("onchange", "changeFontStyle (this)");
// selectFonts.onchange();
myParent.appendChild(selectFonts);
let fontOptions = ["Open Sans", "Cairo", "Roboto"];
for (let i = 0; i < fontOptions.length; i++) {
  let option = document.createElement("option");
  option.value = fontOptions[i];
  option.text = fontOptions[i];
  selectFonts.appendChild(option);
};

// create select box for colors and the options.
let selectColor = document.createElement("select");
selectColor.id = "colorSelect";
myParent.appendChild(selectColor);
let colorOptions = ["#58fff2", "#fc4ff5", "#2ef322", "#000000", "#FFFF00", "#0000FF"];
for (let i = 0; i < colorOptions.length; i++) {
  let option = document.createElement("option");
  option.value = colorOptions[i];
  option.text = colorOptions[i];
  selectColor.appendChild(option);
};



// create select box for font size an the options.
let selectSize = document.createElement("select");
selectSize.id = "sizeSelect";
myParent.appendChild(selectSize);
let sizeOptions = [16, 18, 20, 24, 26, 28, 36];
for (let i = 0; i < sizeOptions.length; i++) {
  let option = document.createElement("option");
  option.value = sizeOptions[i];
  option.text = sizeOptions[i];
  selectSize.appendChild(option);
};