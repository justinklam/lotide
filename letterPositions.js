const eqArrays = require("./eqArray")
//
const assertArraysEqual = require("./assertArrayEqual")

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results.hasOwnProperty(sentence[i])) { // if results has property with sentence[i];
      results[sentence[i]] += 1; // if yes, increment it
    } else {
      results[sentence[i]] = 1; // if no, add 1 to it
    }
  }
  return results;
};

module.exports = letterPositions

// console.log(letterPositions("Hello"));
// console.log(assertArraysEqual(letterPositions("hello").e, 1));


// take in a sentence as a string
// loop through the string
// identify letters in the string, if it does not exist, create a new array
// push results into the array
// return array