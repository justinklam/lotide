const eqArrays = require("./eqArrays")
const assertArraysEqual = require("./assertArraysEqual")

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

console.log(letterPositions("hello"))