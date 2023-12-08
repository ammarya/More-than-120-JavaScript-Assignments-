
function ageInTime(theAge) {
  // Your Code Here

  let month = theAge * 12;
  let day = month * 24;
  let hour = day * 60;
  let minute = hour * 60;
  let second = minute * 60;

  let ageInSecond = second;
  let ageInMinute = minute;
  let ageInHour = hour;
  let ageInDay = day;
  let ageInMonth = month;

  // Age larger than 10 and less than 100
  // Age > 10 && Age < 100
  if (theAge > 10 && theAge < 100) {
    console.log(`You are ${ageInMonth} months old`);
    console.log(`You are ${ageInDay} Days old`);
    console.log(`You are ${ageInHour} Hours old`);
    console.log(`You are ${ageInMinute} Minutes old`);
    console.log(`You are ${ageInSecond} Seconds old`);
  } else {
    console.log(` The Age (${theAge}) is Out Of Range`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months