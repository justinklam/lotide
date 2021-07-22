const assertEqual = require("./assertEqual")

const countLetters = function(stringInp) {
  const countSol = {};

  for (let letters of stringInp) {
    if (countSol[letters]) {
      countSol[letters]++;
    } else {
      if (letters !== " ") {
        countSol[letters] = 1;
      }
    }
  }
  return countSol;
  console.log(countSol);
}

module.exports = countLetters

// Take in sentence as a string
// return a count of each of the letters in the sentence
// Use a for...of loop with strings

console.log(countLetters('LHL')); // Should return L:2, H:1