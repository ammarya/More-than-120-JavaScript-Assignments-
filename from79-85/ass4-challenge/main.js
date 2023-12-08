
// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

const objectKeys = Object.keys(myFavGames);
const objectLength = objectKeys.length;

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${objectKeys[i]}`);
  console.log(`The Publisher Is ${myFavGames[objectKeys[i]].publisher}`);
  console.log(`The Price Is ${myFavGames[objectKeys[i]].price}`);

  if (myFavGames[objectKeys[i]].hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[objectKeys[i]].bestThree.one}`);
    console.log(`Second => ${myFavGames[objectKeys[i]].bestThree.two}`);
    console.log(`Third => ${myFavGames[objectKeys[i]].bestThree.three}`);
  }
  console.log("#".repeat(20));
}



// Code One => How To Get Object Length ?
// let objectLength = Object.keys(myFavGames).length;

// for (let i = 0; i < objectLength; i++) {
//   console.log(`The Game Name Is ${myFavGames}`);
//   console.log(`The Publisher Is ${myFavGames.publisher}`);
//   console.log(`The Price Is ${myFavGames.price}`);

//   // Check If Nested Object Has Property (bestThree)
//   if (myFavGames.bestThree === true) {
//     console.log("- Game Has Releases");
//     console.log(`First => ${bestThree.one}`);
//     console.log(`Second => ${bestThree.two}`);
//     console.log(`Third => ${bestThree.three}`);
//   }
//   console.log("#".repeat(20));
// }

// Ouput
/*
"The Game Name Is Trinity Universe"
"The Publisher Is NIS America"
"The Price Is 40"
"####################"
"The Game Name Is Titan Quest"
"The Publisher Is THQ"
"The Price Is 50"
"- Game Has Releases"
"First => Immortal Throne"
"Second => Ragnarök"
"Third => Atlantis"
"####################"
"The Game Name Is YS"
"The Publisher Is Falcom"
"The Price Is 40"
"- Game Has Releases"
"First => Oath in Felghana"
"Second => Ark Of Napishtim"
"Third => origin"
"####################"
*/