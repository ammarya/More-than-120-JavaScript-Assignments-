
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    let firstName = zName.split(" ")[0];
    let lastName = zName.split(" ")[1][0] + ".";                // Osama Mohamed => Osama M.
    return `${firstName} ${lastName}`                          // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
                                                                       // 38 Is My Age => Your Age Is 38
    return `Your Age Is ${parseInt(zAge)}`;                           // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    let country = zCountry.substring(0, 2).toUpperCase();       // Egypt => You Live In EG
    return `You Live In ${country}`;                            // Syria => You Live In SY
  }
  function fullDetails() {
    // Write Your Code Here
    let theName = namePattern(zName);
    let theAge = ageWithMessage(zAge);
    let theCountry = countryTwoLetters(zCountry);
    return `Hello ${theName} ${theAge} ${theCountry}`
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY



