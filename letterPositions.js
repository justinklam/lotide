const eqArrays = require("./eqArrays")
const assertArraysEqual = require("./assertArraysEqual")

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") { // if sentence[i] does not contain whitespace
      if (results[sentence[i]]) { // and if results contains sentence[i]
        results[sentence[i]].push(i); // if yes, push index position into object under index character
      } else {
        results[sentence[i]] = [i]; // if no, add [i] into object
      }
    }
  }
  return results;
  
};

module.exports = letterPositions