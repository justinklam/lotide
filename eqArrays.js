const assertEqual = require("./assertEqual");

// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays

// compare the two arrays
// if array lengths are not equal, return false
// if array lengths are equal, compare indexes to see if value is same