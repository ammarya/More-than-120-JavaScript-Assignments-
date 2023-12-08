
function createSelectBox(startYear, endYear) {
  let selectBox = "<select>\n";
  for (let i = startYear; i <= endYear; i++) {
    selectBox += `  <option value="${i}">${i}</option>\n`;
  }
  selectBox += "</select>";
  document.write(selectBox);
}

// Testing the function
createSelectBox(2000, 2023);





// function createSelectBox(startYear, endYear) {

// }
// createSelectBox(2000, 2021);


// Your Code Here
  // document.write(<select>);
  //   document.write();

  //   document.write();
  // document.write(</select>);
  
  
  
  // for (let i = startYear; i <= endYear; i++) {
  //   console.log(i)
  // }