const assertEqual = require("./assertEqual");

const findKeyByValue = function(obj, val) {
  for (let key in obj) { // for in to loops using [key] through obj, for...of for array if we went that way
    if (obj[key] === val) {  // if parameter object contains parameter 2
      return key;           // we return key here
    }
  }
};

module.exports = findKeyByValue

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);