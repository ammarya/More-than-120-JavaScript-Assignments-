
function sayHello(theName, theGender) {
  // Your Code Here
  let msg = "";
  if (theGender == "Male") msg = "Mr";
  if (theGender == "Female") msg = "Miss";
  console.log(`Hello ${msg}${theName}`);
  
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"