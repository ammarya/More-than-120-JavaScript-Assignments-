let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
if (chosen == 1) {
  const [{ title: t, age: a, available: av, skills: [, c] }] = myFriends;
  console.log(`${t}\n${a}\n${av ? "Available" : "Not Available"}\n${c}`);
} else if (chosen == 2) {
  const [, { title: t, age: a, available: av, skills: [, d] }] = myFriends;
  console.log(`${t}\n${a}\n${av ? "Available" : "Not Available"}\n${d}`);
} else if (chosen == 3) {
  const [, , { title: t, age: a, available: av, skills: [, l] }] = myFriends;
  console.log(`${t}\n${a}\n${av ? "Available" : "Not Available"}\n${l}`);
};


// If chosen === 1

// "Osama"
// 39
// "Available"
// "CSS"

// If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"