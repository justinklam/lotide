const eqArrays = require("./eqArrays")
const assertArraysEqual = require("./assertArraysEqual")

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

// NOTES
// take in an array
// count the .length of the array, return the middle/average number
// return the middle value