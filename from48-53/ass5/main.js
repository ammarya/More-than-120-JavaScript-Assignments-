

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let filteredFriends = [];
let counter = 0

for (let i = 0; i < friends.length; i++) {
  let name = friends[i];

  if (!name.toLowerCase().startsWith(letter.toLowerCase())) {
    filteredFriends.unshift(name);
    console.log(`"${++counter} => ${name}"`);
  }
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

