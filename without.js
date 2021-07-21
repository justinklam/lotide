const eqArrays = require("./eqArray")
//
const assertArraysEqual = require("./assertArrayEqual")

const without = function(orgArray, rmvArray) {
  let newArray = orgArray;
  for (let i = 0; i < rmvArray.length; i++) {
    while (newArray.includes(rmvArray[i])) {
      let itemsToRemove = newArray.indexOf(rmvArray[i]);
      newArray.splice(itemsToRemove, 1);
    }
  };
  return newArray;
};

module.exports = without

// Test Cases
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));

// take in orgArray
// take in rmvArray
// return a new array (newArray) with the items in source - using without