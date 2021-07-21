// FUNCTION IMPLEMENTATION for assertEqual
// const assertEqual = function(actual, expected) {
//  if (actual === expected) {
//    return `Assertion Passed: ${actual} === ${expected}`;
//  } else return `Assertion Failed: ${actual} === ${expected}`;
// };

// TEST CODE
// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));

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

// console.log(eqArrays([1, 2, 3], [1, 2, 3]));

// compare the two arrays
// if array lengths are not equal, return false
// if array lengths are equal, compare indexes to see if value is same