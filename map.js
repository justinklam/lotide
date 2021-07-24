const eqArrays = require("./eqArray")
const assertArraysEqual = require("./assertArrayEqual")
//
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map

const results1 = map(words, word => word[0]);
console.log(results1);

console.log(eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]));
console.log(assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]));