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
}

module.exports = countLetters