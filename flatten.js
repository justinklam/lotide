const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const flatten = function (arr) {
  let newArr = [];
  for (let element of arr) {
    if (Array.isArray(element)) { // if index is a nested Array
      for (let nestElement of element) { // loop through the nested Array
        newArr.push(nestElement); // push element into newArr
      }
    } else {
      newArr.push(element); // else push non-nested elements into newArr
    }
  }
  return newArr;
};

module.exports = flatten;