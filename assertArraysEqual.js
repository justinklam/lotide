const eqArrays = require("./eqArrays");

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return `Comparison Failed: ${arr1} ❌❌❌ ${arr2}`;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return `Comparison Failed: ${arr1} ❌❌❌ ${arr2}`;
    }
  }
  return `Comparison Passed: ${arr1} ✅✅✅ ${arr2}`;
};

module.exports = assertArraysEqual