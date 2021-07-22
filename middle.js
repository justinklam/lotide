const eqArrays = require("./eqArray")
//
const assertArraysEqual = require("./assertArrayEqual")

const middle = function(firstArray) {
  let midArray = [];
  let midIndex
    if (firstArray.length <= 2) {
      return midArray;
    } else if (firstArray.length % 2 === 0) { // return mid 2
      midIndex = Math.floor(firstArray.length / 2)
      midArray.push(firstArray[midIndex -1], firstArray[midIndex]);
    } else if (firstArray.length % 2 !== 0) { // return middle
      midIndex = Math.floor(firstArray.length / 2)
      midArray.push(firstArray[midIndex]);
    }
    return midArray;
  };

module.exports = middle


// Test cases
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

// take in an array
// count the .length of the array, return the middle/average number
// return the middle value