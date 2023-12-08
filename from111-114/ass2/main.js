var parent = document.body;
let form = document.createElement("form");
parent.appendChild(form);

let inputs = ["input1", "input2", "input3"];
for (let i = 0; i < inputs.length; i++){
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  inputValue = input.value;
  inputValue = inputs[i];
  form.appendChild(input);
  localStorage.setItem("input", inputValue);
  localStorage.getItem("input");
  console.log(localStorage.getItem("input"))
};


let select = document.createElement("select");
form.appendChild(select);
let options = ["option 1", "option 2", "option 3", "option 4", "option 5"];
for (let i = 0; i < options.length; i++) {
  let option = document.createElement("option");
  option.value = options[i];
  option.text = options[i];
  select.appendChild(option);
  localStorage.setItem("option", option.value);
  localStorage.getItem("option");
  console.log(localStorage.getItem("option"))
};
