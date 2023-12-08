let msg = prompt("Print Number From - To", "Example: 5-20");
let msgArray = msg.split("-").map((n) => +n);

let start;
let end;

if (msgArray[0] > msgArray[1]) {
  start = msgArray[1];
  end = msgArray[0];
} else {
  start = msgArray[0];
  end = msgArray[1];
}

for (let i = start; i <= end; i++) {
  document.write(`${i}<br>`);
}

































// function printNumbersBetweenRange(start, end) {
//     if (start <= end) {
//         for (let num = start; num <= end; num++) {
//             console.log(num);
//         }
//     } else {
//         for (let num = end; num <= start; num++) {
//             console.log(num);
//         }
//     }
// }

// // استخدام الـ prompt لجلب الإدخال من المستخدم
// const userInput = prompt("Print Number From – To\nExample: 5-20");

// // تحليل الإدخال للحصول على الأرقام
// const inputParts = userInput.split('-');
// if (inputParts.length === 2) {
//     const start = parseInt(inputParts[0]);
//     const end = parseInt(inputParts[1]);

//     if (!isNaN(start) && !isNaN(end)) {
//         printNumbersBetweenRange(start, end);
//     } else {
//         console.log("Invalid input format. Please use the format 'start-end'.");
//     }
// } else {
//     console.log("Invalid input format. Please use the format 'start-end'.");
// }
