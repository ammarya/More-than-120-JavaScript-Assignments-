
// let dollarInput = document.getElementById("dollarInput");
// let resultDiv = document.querySelector("result");

// function convertCurrency() {
//   let amountInDollars = parseFloat(dollarInput.value);
//   let exchangeRate = 15.6;
//   let egyptianPoundAmount = amountInDollars * exchangeRate;

//   resultDiv = `${amountInDollars} USA Dollar = ${egyptianPoundAmount.toFixed(2)} Egyptian Pound`;

// }

// return resultDiv.appendChild(convertCurrency);

let currencyForm = document.forms[0];
let currencyInput = currencyForm.dollar;
let usSpan = document.querySelector(".us");
let egSpan = document.querySelector(".eg");
let rate = 15.6;

currencyInput.oninput = function () {
  usSpan.innerHTML = this.value;
  egSpan.innerHTML = (this.value * rate).toFixed(2);
};