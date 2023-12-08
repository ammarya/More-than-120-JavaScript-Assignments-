/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera", "sfdsf", "fffgfgf"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let showCount = 3;

document.write(`<div>We Have X Admins</div>`);
document.write(`<div>We Have ${showCount} Admins</div>`);
document.write(`<hr>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<p>The Admin For Team ${i + 1} ${myAdmins[i]}<p>`);
  document.write(`<h3>Team Members:</h3>`);
  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j].charAt(0) === myAdmins[i].charAt(0)) {
      document.write(`<p> - ${j + 1} ${myEmployees[j]}</p>`);
    }
  }
  document.write(`</div>`);
  document.write(`<hr>`);
}















// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera", "sfdsf", "fffgfgf"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
// let showCount = 3;

// document.write(`<div>We Have X Admins</div>`);
// document.write(`<div>We Have ${showCount} Admins</div>`);
// document.write(`<hr>`);

// for (let i = 0; i < showCount; i++) {
//     document.write(`<div>`);
//     document.write(`<p>The Admin For Team ${i + 1} ${myAdmins[i]}<p>`);
//     document.write(`<h3>Team Members:</h3>`);
    
//     for (let j = 0; j < myEmployees.length; j++); {
//     console.log(myEmployees[j]);
//     console.log(myAdmins[i]);
//       // if (myEmployees[j].charAt(0) === myAdmins[i].charAt(0)) {
//       //   document.write(`<p> - ${j + 1} ${myEmployees[j]}</p>`);
//       // }
//     }
//     document.write(`</div>`);
//     document.write(`<hr>`);
// }








// document.write(`<div>We Have X Admins</div>`);
// document.write(`<div>We Have ${showCount} Admins</div>`);
// document.write(`<hr>`)
// for (let i = 0; i < showCount; i++) {
  //   document.write(`<div>`)
  //   document.write(`<p>The Admin For Team ${i + 1} ${myAdmins[i + 0]}<p>`)
  //   document.write(`<h3>Team Members:</h3>`)
  
  //   for (let j = 0; j < myEmployees.length; j++) {
    //     document.write(`<p> - ${j + 1} ${myEmployees[j]}</p>`)
    //   }
    //   document.write(`</div>`)
    //   document.write(`<hr>`)
    // }
    
    
    

    







// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera", "sfdsf", "fffgfgf"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
// let showCount = 3;

// document.write(`<div>We Have ${showCount} Admins</div>`);
// document.write(`<hr>`);

// for (let i = 0; i < showCount; i++) {
//   let adminName = myAdmins[i];
//   let filteredEmployees = myEmployees.filter(employee => employee.toLowerCase().startsWith(adminName.toLowerCase().charAt(0)));

//   document.write(`<div>`);
//   document.write(`<p>The Admin For Team ${i + 1}: ${adminName}</p>`);
//   document.write(`<h3>Team Members:</h3>`);

//   for (let j = 0; j < filteredEmployees.length; j++) {
//     document.write(`<p> - ${j + 1} ${filteredEmployees[j]}</p>`);
//   }

//   document.write(`</div>`);
//   document.write(`<hr>`);
// }
